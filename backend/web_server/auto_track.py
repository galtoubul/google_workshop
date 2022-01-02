import urllib.request
import json
from config import ERR

class TrackingApi:
    apiKey = "e87b5128-a872-49b3-aefb-f8dd17e37f96"
    apiPath = "realtime?tracking_number=RS0393888296Y&courier_code=cainiao"
    baseApi = "https://api.trackingmore.com"
    apiVersion = "v3"
    sandbox = False

    def __init__(self, api_key):
        self.apiKey = api_key

    def doRequest(self, api_path, post_data="", method="get"):
        method = method.upper()
        if self.sandbox:
            url = self.baseApi + "/" + self.apiVersion + "/trackings/sandbox/" + api_path
        else:
            url = self.baseApi + "/" + self.apiVersion + "/trackings/" + api_path
        print(f'\n\ndoRequest\nurl = {url}')
        headers = {"Content-Type": "application/json", "Tracking-Api-Key": self.apiKey,
                   'User-Agent': 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.17 (KHTML, like Gecko) '
                                 'Chrome/24.0.1312.27 Safari/537.17'}
        post_data = post_data.encode('UTF-8')
        req = urllib.request.Request(url, post_data, headers=headers, method=method)
        with urllib.request.urlopen(req) as response:
            print(response.getcode())
            return response.read()


def get_tracking_details(tracking_package_number):
    apiKey = "6fcb859c-1389-42af-8cc8-14109852e6cd"
    tracker = TrackingApi(apiKey)

    # Get courier code
    postData = json.dumps({"tracking_number": tracking_package_number})
    courier = tracker.doRequest("detect", postData, "POST")
    courier_dict = json.loads(courier.decode('utf-8'))
    # courier_dict['data'] is a list in which only the first element is relevant for us
    courier_code = courier_dict['data'][0]['courier_code']
    print(f'\n\nget_tracking_details\ncourier_code = {courier_code}')

    # Get realtime tracking results of a single tracking
    post_request = json.dumps({"tracking_number": tracking_package_number, "courier_code": courier_code})
    response = tracker.doRequest("realtime", post_request, "POST")
    return json.loads(response.decode('utf-8'))


def getDeliveryStatus(serial_code):
    try:
        real_time_result = get_tracking_details(serial_code)
    except Exception as err:
        print(f'\n\ngetDeliveryStatus\n error = {str(err)}')
        return ERR

    if (real_time_result['code'] == 200 and
        'data' in real_time_result and 'delivery_status' in real_time_result['data']):
            delivery_status = real_time_result['data']['delivery_status']
            print(f'\n\ngetDeliveryStatus\ndelivery_status = {delivery_status}')
            return delivery_status
    
    return ERR
