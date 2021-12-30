import requests

# test addCard
api_endpoint = "http://127.0.0.1:5000/api/addCard"
data = {'order_serial_code': 567,
        'order_url': 'http://Amazon',
        'order_name': 'test',
        'company': 'Amazon',
        'user_id': 567}
response = requests.post(url=api_endpoint, data=data)
print(response.json())

# # test getCards
# api_endpoint = "http://127.0.0.1:5000/api/getCards"
# params = {'user_id': 567}
# response = requests.get(url=api_endpoint, params=params)
# print(response.json())

# # test updateCard
# api_endpoint = "http://127.0.0.1:5000/api/updateCard"
# params = {'user_id': 567,
#           'company': 'Amazon',
#           'order_serial_code': 678}
# data = {'order_url': 'http://Amazon.com'}
# response = requests.post(url=api_endpoint, params=params, data=data)
# print(response.json())

# # test deleteCard
# api_endpoint = "http://127.0.0.1:5000/api/deleteCard"
# params = {'user_id': 567,
#           'company': 'Amazon',
#           'order_serial_code': 678}
# response = requests.post(url=api_endpoint, params=params)
# print(response.json())