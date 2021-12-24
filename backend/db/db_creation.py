import mysql.connector as SQLC


host = '35.185.234.203'
user = 'root'
password = 'pkayHgFByeOHjs8F'

# connect to db
db_con = SQLC.connect(host=host, user=user, passwd=password)
cursor = db_con.cursor()

# create database
cursor.execute("CREATE DATABASE IF NOT EXISTS Trackeet")
db_con.commit()

# use db
cursor.execute("use Trackeet")
db_con.commit()

# create Customer table
cursor.execute("""CREATE TABLE IF NOT EXISTS Customer(
                  CustomerId VARCHAR(255),
                  FirstName VARCHAR(255),
                  LastName VARCHAR(255),
                  Email VARCHAR(255),
                  PRIMARY KEY (CustomerId)
    );""")
db_con.commit()

# create Company table
cursor.execute("""CREATE TABLE IF NOT EXISTS Company(
                  CompanyName VARCHAR(255),
                  PRIMARY KEY (CompanyName)
    );""")
db_con.commit()

# create Order table
cursor.execute("""CREATE TABLE IF NOT EXISTS Card(
                  CardId SMALLINT UNSIGNED AUTO_INCREMENT,
                  OrderSerialCode VARCHAR(255),
                  Url VARCHAR(2083),
                  OrderName VARCHAR(255),
                  Bucket ENUM('WishList', 'OnTheWay', 'Arrived') DEFAULT 'WishList',
                  Price DECIMAL(33,3),
                  Currency ENUM('ILS', 'USD', 'EUR', 'GBP'),
                  OrderDate VARCHAR(12),
                  EstimatedArrivingDate VARCHAR(12),
                  Notes TEXT,
                  CompanyName VARCHAR(255),
                  CustomerId VARCHAR(255),
                  FOREIGN KEY (CompanyName) REFERENCES Company(CompanyName) ON DELETE CASCADE ON UPDATE CASCADE,
                  FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId) ON DELETE CASCADE ON UPDATE CASCADE,
                  PRIMARY KEY (CardId)
    );""")
db_con.commit()

cursor.close()
