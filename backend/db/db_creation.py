import mysql.connector as SQLC
import sys
import os
sys.path.append(os.path.abspath('../'))
from config import db_host, db_user, db_password


# connect to db
db_con = SQLC.connect(host=db_host, user=db_user, passwd=db_password)
cursor = db_con.cursor()

# create database
cursor.execute("CREATE DATABASE IF NOT EXISTS Trackeet")
db_con.commit()

# use db
cursor.execute("use Trackeet")
db_con.commit()

# create Company table
cursor.execute("""CREATE TABLE IF NOT EXISTS `Company` (
                  `CompanyName` VARCHAR(255) NOT NULL,
                  PRIMARY KEY (`CompanyName`)
    );""")
db_con.commit()

# create Customer table
cursor.execute("""CREATE TABLE `Customer` (
                  `CustomerId` varchar(255) NOT NULL,
                  `FirstName` varchar(255) DEFAULT NULL,
                  `LastName` varchar(255) DEFAULT NULL,
                  `Email` varchar(255) DEFAULT NULL,
                  PRIMARY KEY (`CustomerId`)
    );""")
db_con.commit()

# create Card table 
cursor.execute("""CREATE TABLE IF NOT EXISTS `Card` (
                  `CardId` varchar(255) NOT NULL,
                  `OrderSerialCode` varchar(255) DEFAULT NULL,
                  `Url` varchar(2083) DEFAULT NULL,
                  `OrderName` varchar(255) NOT NULL,
                  `Bucket` enum('WishList','OnTheWay','Paid','Transit','PickUp','Arrived') DEFAULT 'WishList',
                  `Price` decimal(33,3) DEFAULT NULL,
                  `Currency` enum('ILS','USD','EUR','GBP') DEFAULT NULL,
                  `OrderDate` varchar(12) DEFAULT NULL,
                  `EstimatedArrivingDate` varchar(12) DEFAULT NULL,
                  `Notes` text,
                  `CompanyName` varchar(255) DEFAULT NULL,
                  `CustomerId` varchar(255) DEFAULT NULL,
                  `LastUpdated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                  PRIMARY KEY (`CardId`,`OrderName`),
                  KEY `CompanyName` (`CompanyName`),
                  KEY `CustomerId` (`CustomerId`),
                  CONSTRAINT `Card_ibfk_1` FOREIGN KEY (`CompanyName`) REFERENCES `Company` (`CompanyName`) ON DELETE CASCADE ON   UPDATE CASCADE,
                  CONSTRAINT `Card_ibfk_2` FOREIGN KEY (`CustomerId`) REFERENCES `Customer` (`CustomerId`) ON DELETE CASCADE ON   UPDATE CASCADE
);""")
db_con.commit()

cursor.close()
