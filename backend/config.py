from dotenv import load_dotenv
import os


load_dotenv()
db_host = os.getenv('DB_HOST')
db_user = os.getenv('DB_USER')
db_password = os.getenv('DB_PASSWORD')
db_database = os.getenv('DB_DATABASE')

web_app_client_id = os.getenv('REACT_APP_TRACKEET_GOOGLE_AUTH_CLIENT_ID')
chrome_ext_client_id = os.getenv('TRACKEET_CHROME_EXTENSION_GOOGLE_AUTH_CLIENT_ID')

ERR = -1