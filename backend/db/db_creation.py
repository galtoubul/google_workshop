import mysql.connector as SQLC


host = '35.185.234.203'
user = 'root'
password = '***REMOVED***'

# connect to db
db_con = SQLC.connect(host=host,user=user,passwd=password)
cursor = db_con.cursor()

# create database
cursor.execute("CREATE DATABASE Trackeet")
db_con.commit()

# use db
cursor.execute("use Trackeet")
db_con.commit()

# create Company table
cursor.execute("""CREATE TABLE Company(
    CompanyName VARCHAR(255) PRIMARY KEY);""")
db_con.commit()

# create Customer table
cursor.execute("""CREATE TABLE Customer(
    CustomerId INT(11) AUTO_INCREMENT PRIMARY KEY,
    CustomerName VARCHAR(255) NOT NULL DEFAULT 'guest');""")
db_con.commit()
 
# create Order table
cursor.execute("""CREATE TABLE Orders(
    OrderNumber VARCHAR(255),
    Url VARCHAR(2083),
    OrderName VARCHAR(255) NOT NULL DEFAULT 'unknown',
    Bucket ENUM('WishList', 'OnTheWay', 'Arrived') NOT NULL DEFAULT 'WishList',
    Price DECIMAL,
    Currency ENUM('ILS', 'USD', 'EUR'),
    OrderDate DATETIME,
    EstimatedArrivingDate DATETIME,
    Notes TEXT,
    CompanyName VARCHAR(255) REFERENCES Company(CompanyName) ON DELETE CASCADE ON UPDATE CASCADE,
    CustomerId INT(11) REFERENCES Customer(CustomerId) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY (OrderNumber, CompanyName, CustomerId));""")
db_con.commit()

cursor.close()