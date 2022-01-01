import inspect
import mysql.connector as SQLC


db_con = None


def init_con(mysql):
    global db_con
    db_con = mysql.connect()


# return all the relevant details of cards that were updated before more than 1 hour
def get_not_updated_cards(user_id):
    cursor = db_con.cursor()
    select_query = """SELECT OrderSerialCode, Bucket, CardId, OrderName
                      FROM Card
                      WHERE CustomerId = %(user_id)s AND
                            LastUpdated < DATE_SUB(NOW(), INTERVAL 1 HOUR)"""
    query_params_dict = {'user_id': user_id}

    print(f'\n\nDB get_not_updated_cards\nselect_query = {select_query}\nquery_params_dict = {query_params_dict}', flush=True)

    try:
        cursor.execute(select_query, query_params_dict)
        db_con.commit()
    except SQLC.IntegrityError as err:
        print(f'\n\n{get_not_updated_cards}\nerror = {err}')
    
    cards = []
    results = cursor.fetchall()
    for res in results:
        cards.append({'order_serial_code': res[0],
                        'timeline_position': res[1],
                        'card_id': res[2],
                        'order_name': res[3]})
    return cards

# return all the cards of user_id from the given bucket (or all the buckets if bucket wasn't supplied)
def get_cards(user_id, bucket=None):
    select_query = """SELECT *
                      FROM Card
                      WHERE CustomerId = %(user_id)s """
    query_params_dict = {'user_id': user_id}

    if bucket != None:
        select_query += ' AND Bucket = %(bucket)s'
        query_params_dict['bucket'] = bucket
    
    print(f'\n\nDB get_cards\nselect_query = {select_query}\nquery_params_dict = {query_params_dict}', flush=True)
    
    cursor = db_con.cursor()
    try:
        cursor.execute(select_query, query_params_dict)
        db_con.commit()
    except SQLC.IntegrityError as err:
        print(f'\n\n{get_cards}\nerror = {err}')
        return {'response': f'ERROR: failed to get records: {err}'}

    results = cursor.fetchall()
    cards = []
    for res in results:
        cards.append({'order_name': res[3],
                      'company': res[10],
                      'estimated_arrival_date': res[8],
                      'order_url': res[2],
                      'price': str(res[5]),
                      'currency': res[6],
                      'order_date': res[7],
                      'order_serial_code': res[1],
                      'notes': res[9],
                      'timeline_position': res[4],
                      'card_id': res[0],
                      'user_id': res[11]})
    return {'cards': cards}


def is_in_company(company_name):
    cursor = db_con.cursor()
    cursor.execute("""SELECT count(*)
                      FROM Company
                      WHERE CompanyName = %(company_name)s""",
                      {'company_name': company_name})
    res = cursor.fetchone()
    return int(res[0]) >= 1


def is_in_customers(customer_id):
    cursor = db_con.cursor()
    cursor.execute("""SELECT count(*)
                      FROM Customer
                      WHERE CustomerId = %(customer_id)s""",
                      {'customer_id': customer_id})
    res = cursor.fetchone()
    return int(res[0]) >= 1


db_to_fe_dict = {
    'bucket': {
        'Wishlist': 'Wishlist',
        'OnTheWay': 'On The Way',
        'Arrived': 'Arrived',
        'Paid': 'Paid',
        'Transit': 'Transit',
        'PickUp': 'PickUp',
        None: 'Wishlist'
    },
    'Customer': {
        'CustomerId': 'sub',
        'FirstName': 'name',
        'LastName': 'family_name',
        'Email': 'email',
    },
    'Company': {
        'CompanyName': 'company'
    },
    'Card': {
        'CardId': 'card_id',
        'OrderSerialCode': 'order_serial_code',
        'OrderName': 'order_name',
        'CompanyName': 'company',
        'CustomerId': 'user_id',
        'Url': 'order_url',
        'Bucket': 'timeline_position',
        'Price': 'price',
        'Currency': 'currency',
        'OrderDate': 'order_date',
        'EstimatedArrivingDate': 'estimated_arrival_date',
        'Notes': 'notes'
    } 
}


def insert(table_name, data):
    caller = inspect.stack()[1].function
    insert_query = f'INSERT INTO {table_name} '
    insert_query_cols = '('
    insert_query_vals = 'VALUES('

    insert_query_params_dict = {}
    is_first = True
    for (db_format, fe_format) in db_to_fe_dict[table_name].items():
        if fe_format in data and data[fe_format] != '':
            if not is_first:
                insert_query_cols += ', '
                insert_query_vals += ', '
            is_first = False

            insert_query_cols += db_format
            insert_query_vals += f'%({fe_format})s'
            insert_query_params_dict[fe_format] = data[fe_format]
    
    insert_query_cols += ') '
    insert_query_vals += ');'
    insert_query += insert_query_cols + insert_query_vals

    print(f'\n\ninsert | caller = {caller} | table name = {table_name}\ninsert_query = {insert_query}\nquery_params_dict = {insert_query_params_dict}', flush=True)
    
    cursor = db_con.cursor()
    try:
        cursor.execute(insert_query, insert_query_params_dict)
        db_con.commit()
    except SQLC.IntegrityError as err:
        print(f'\n\n{caller}\nerror = {err}', flush=True)
        return {'response': f'ERROR: failed to insert records: {err}'}

    print(f'\n\ninsert | caller = {caller} | table name = {table_name}\nSuccesful insert! {cursor.rowcount} rows were affacted', flush=True)
    return {'response': 'Succesful insert! {} rows were affacted'.format(cursor.rowcount)}


# add foreign keys to parents' tables if needed
def update_foreign_keys(data, user_info):
    
    if 'company' in data and not is_in_company(data['company']):
        insert('Company', data)

    user_id = user_info['sub']
    if not is_in_customers(user_id):
        insert('Customer', user_info)


def add_card(data, user_info):
    update_foreign_keys(data, user_info)
    user_id = user_info['sub']
    data['user_id'] = user_id
    insert('Card', data)


def update_card(data):     
    update_query = 'UPDATE Card SET '

    query_params_dict = {}
    is_first = True
    for (db_format, fe_format) in db_to_fe_dict['Card'].items():
        if fe_format in data and data[fe_format] != '':
            if not is_first:
                update_query += ', '
            update_query += f'{db_format} = %({fe_format})s'
            query_params_dict[fe_format] = data[fe_format]
            is_first = False

    update_query += ' WHERE CardId = %(card_id)s AND OrderName = %(order_name)s'
    query_params_dict['card_id'] = data['card_id']
    query_params_dict['order_name'] = data['order_name']
    print(f'\n\nupdate_card\nupdate_query = {update_query}\n query_params_dict = {query_params_dict}', flush=True)

    cursor = db_con.cursor()
    try:
        cursor.execute(update_query, query_params_dict)
        db_con.commit()

    except SQLC.IntegrityError as err:
        return {'response': f'ERROR: failed to update records: {err}'}
    return {'response': 'Succesful update! {} rows were affacted'.format(cursor.rowcount)}


def delete_card(card_id, order_name):
    delete_query = """DELETE FROM Card
                      WHERE CardId = %(card_id)s AND
                            OrderName = %(order_name)s;"""
    
    query_params_dict = {}
    query_params_dict['card_id'] = card_id
    query_params_dict['order_name'] = order_name
    print(f'\n\ndelete_card\ndelete_query = {delete_query}\n query_params_dict = {query_params_dict}', flush=True)

    cursor = db_con.cursor()
    try:
        cursor.execute(delete_query, query_params_dict)
        db_con.commit()

    except SQLC.IntegrityError as err:
        return {'response': f'ERROR: failed to delete records: {err}'}
    return {'response': 'Succesful delete! {} rows were affacted'.format(cursor.rowcount)}
