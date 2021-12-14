import mysql.connector as SQLC
import json


# TODO hide these in .env.local
db_host = '35.185.234.203'
db_user = 'root'
db_password = '***REMOVED***'

# TODO should it be under an init function?
# connect to db
db_con = SQLC.connect(host=db_host,user=db_user,passwd=db_password)
cursor = db_con.cursor()

# fe_to_db = {
#     'bucket': {
#         'wishlist': 'Wishlist',
#         'on_the_way': 'OnTheWay',
#         'arrived': 'Arrived',
#         None: 'Wishlist'
#     }
# }

# db_to_fe = {
#     'bucket': {
#         'Wishlist': 'wishlist',
#         'OnTheWay': 'on_the_way',
#         'Arrived': 'arrived',
#         None: 'wishlist'
#     }
# }


# return all the cards of the user that associated with user_id
def get_cards(user_id, bucket=None):
    select_query = """SELECT *
                      FROM Trackeet.Orders
                      WHERE CustomerId = %(user_id)s"""
    query_params_dict = {'user_id': user_id}

    if bucket != None:
        select_query += ' AND Bucket = %(bucket)s'
        query_params_dict['bucket'] = bucket
    
    cursor.execute(select_query, query_params_dict)

    results = cursor.fetchall()
    cards = []
    for res in results:
        cards.append({'order_name': res[2],
                      'company': res[9],
                      'estimated_arrival_date': res[7],
                      'order_url': res[1],
                      'price': res[4],
                      'currency': res[5],
                      'order_date': res[6],
                      'order_serial_code': res[0],
                      'notes': res[8],
                      'timeline_position': res[3]})
    return {'cards': cards}


def is_in_company(company_name):
    cursor.execute("""SELECT count(*)
                      FROM Trackeet.Company
                      WHERE CompanyName = %(company_name)s""",
                      {'company_name': company_name})
    res = cursor.fetchone()
    return int(res[0]) >= 1


def is_in_customers(customer_id):
    cursor.execute("""SELECT count(*)
                      FROM Trackeet.Customer
                      WHERE CustomerId = %(customer_id)s""",
                      {'customer_id': customer_id})
    res = cursor.fetchone()
    return int(res[0]) >= 1


def update_foreign_keys(data):
    # add foreign keys to parents tables if needed
    if not is_in_company(data['company']):
        cursor.execute("""INSERT INTO Trackeet.Company (CompanyName)
                          values (%(company_name)s)""",
                          {'company_name': data.get('company')})
        db_con.commit()

    if not is_in_customers(data['user_id']):
        cursor.execute("""INSERT INTO Trackeet.Customer (CustomerId)
                          values (%(customer_id)s)""",
                          {'customer_id': int(data['user_id'])})
        db_con.commit()


def add_card (data):
    try:
        update_foreign_keys(data)

        price = float(data.get('price')) if 'price' in data else None
        bucket = 'Wishlist' if 'timeline_position' not in data else data.get('price')

        cursor.execute("""INSERT INTO Trackeet.Orders
                        (OrderNumber, OrderName, CompanyName, CustomerId,
                        Url, Bucket, Price, Currency, OrderDate,
                        EstimatedArrivingDate, Notes)
                        values(%(order_number)s, %(order_name)s, %(company_name)s, %(customer_id)s,
                            %(url)s, %(bucket)s, %(price)s, %(currency)s, %(order_date)s,
                            %(estimated_arriving_date)s, %(notes)s)""",
                                {'order_number': int(data.get('order_serial_code')),
                                'order_name': data.get('order_name'),
                                'company_name': data.get('company'),
                                'customer_id': int(data.get('user_id')),
                                'url': data.get('order_url'),
                                'bucket': bucket,
                                'price': price,
                                'currency': data.get('currency'),
                                'order_date': data.get('order_date'),
                                'estimated_arriving_date': data.get('estimated_arrival_date'),
                                'notes': data.get('notes')})
        db_con.commit()
    except SQLC.IntegrityError as err:
        return {'response': f'ERROR: failed to insert records: {err}'}
    return {'response': 'Succesful insert! {} rows were affacted'.format(cursor.rowcount)}


db_to_fe_dict = {
    'OrderNumber': 'order_serial_code',
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


def get_fe_param_to_query_param(data):
    order_serial_code = None if 'order_serial_code' not in data else int(data.get('order_serial_code'))
    order_name = None if 'order_name' not in data else data.get('order_name')
    company = None if 'company' not in data else data.get('company')
    user_id = None if 'user_id' not in data else int(data.get('user_id'))
    order_url = None if 'order_url' not in data else data.get('order_url')
    timeline_position = 'Wishlist' if 'timeline_position' not in data else data.get('price')
    price = float(data.get('price')) if 'price' in data else None
    currency = None if 'currency' not in data else data.get('currency')
    order_date = None if 'order_date' not in data else data.get('order_date')
    estimated_arrival_date = None if 'estimated_arrival_date' not in data else data.get('estimated_arrival_date')
    notes = None if 'notes' not in data else data.get('notes')

    fe_param_to_query_param = {
        'order_serial_code': order_serial_code,
        'order_name': order_name,
        'company': company,
        'user_id': user_id,
        'order_url': order_url,
        'timeline_position': timeline_position,
        'price': price,
        'currency': currency,
        'order_date': order_date,
        'estimated_arrival_date': estimated_arrival_date,
        'notes': notes
    }

    return fe_param_to_query_param


def update_card(customer_id, compamy_name, order_number, data):
    fe_param_to_query_param = get_fe_param_to_query_param(data)
      
    update_query = 'UPDATE Trackeet.Orders SET '

    query_params_dict = {}
    is_first = True
    for (db_format, fe_format) in db_to_fe_dict.items():
        if fe_format in data:
            if not is_first:
                update_query += ', '
            update_query += f'{db_format} = %({fe_format})s'
            query_params_dict[fe_format] = fe_param_to_query_param[fe_format]
            is_first = False

    query_params_dict['customer_id'] = int(customer_id)
    query_params_dict['compamy_name'] = compamy_name
    query_params_dict['order_number'] = int(order_number)

    update_query += (""" WHERE CustomerId = %(customer_id)s   AND
                                CompanyName = %(compamy_name)s AND
                                OrderNumber = %(order_number)s""")

    try: 
        cursor.execute(update_query, query_params_dict)
        db_con.commit()

    except SQLC.IntegrityError as err:
        return {'response': f'ERROR: failed to update records: {err}'}
    return {'response': 'Succesful update! {} rows were affacted'.format(cursor.rowcount)}


def delete_card(user_id, compamy_name, order_number):
    delete_query = """DELETE FROM Trackeet.Orders
                      WHERE CustomerId  = %(customer_id)s  AND
                            CompanyName = %(compamy_name)s AND
                            OrderNumber = %(order_number)s"""
    
    query_params_dict = {}
    query_params_dict['customer_id'] = int(user_id)
    query_params_dict['compamy_name'] = compamy_name
    query_params_dict['order_number'] = int(order_number)

    try:
        cursor.execute(delete_query, query_params_dict)
        db_con.commit()

    except SQLC.IntegrityError as err:
        return {'response': f'ERROR: failed to delete records: {err}'}
    return {'response': 'Succesful delete! {} rows were affacted'.format(cursor.rowcount)}



# """
#                           OrderNumber = %(order_number)s,
#                           OrderName = %(order_name)s,
#                           CompanyName = %(company_name)s,
#                           CustomerId = %(customer_id)s,
#                           Url = %(url)s,
#                           Bucket = %(bucket)s,
#                           Price = %(price)s,
#                           Currency = %(currency)s,
#                           OrderDate = %(order_date)s,
#                           EstimatedArrivingDate = %(estimated_arriving_date)s,
#                           Notes = %(notes)s)""",
                                