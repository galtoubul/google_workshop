import mysql.connector as SQLC
import json


# TODO hide these in .env.local
db_host = '35.185.234.203'
db_user = 'root'
db_password = 'pkayHgFByeOHjs8F'

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
def get_cards(user_id):
    cursor.execute("""SELECT *
                      FROM Trackeet.Orders
                      WHERE CustomerId = %(user_id)s""",
                      {'user_id': user_id})
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
    return json.dumps(cards)


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
        return ('ERROR: failed to insert values: %s', err)
    return 'Succesful insertion! {} rows were affacted'.format(cursor.rowcount)
