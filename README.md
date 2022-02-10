# [Trackeet](http://trackeet.co) - **Make Tracking Online Orders Easier**

<p align="center">
  <img src="https://img.shields.io/badge/webserver-on-brightgreen.svg" alt="web server" />
  <img src="https://img.shields.io/badge/autotrack-on-brightgreen.svg" alt="auto track" />
</p>

![image](https://user-images.githubusercontent.com/58177619/147886708-d6200934-1188-43bb-ba12-2dec2930a819.png)

# Introduction

E-Commerce is growing at a crazy Rate. There are many reasons for that, but undoubtedly, one of them is the ease of doing online shopping these days. 
Users usually have orders from multiple websites. That makes it hard to track all the different orders.</br>
Trackeet is a web application combined with a Chrome extension that allows users to easily track all their orders from one place. With Trackeet Chrome extension the user is able to add his order directly from the supplier's website to his dashboard in Trackeet’s website.
Whenever he wants to check his orders’ status he can go to Trackeet and find out right away.
All the orders on the website are updated automatically.

Check out our demo:

https://user-images.githubusercontent.com/58177619/153352560-b030b7c6-d6f8-48ca-b8c7-f2173c6aa0ce.mp4

# Features

## Trackeet Chrome Extension
*Save your orders from across the web
with our [Chrome extension](https://chrome.google.com/webstore/detail/trackeet/fahklmfdcmnnbodejmnhbnkaoocaoabi?hl=en-GB)*

https://user-images.githubusercontent.com/58177619/147888563-d2471ed9-893c-4727-95f3-f4481d243c54.mp4

### Supported websites for adding orders via the chrome extension:
<ol>
  <li>Amazon</li>
  <li>Ebay</li>
  <li>AliExpress</li>
</ol>

## Trackeet Web App
*Effortlessly track, organize and know exactly when your international orders will arrive*
### Tracking Your Orders
After logging in the user will be redirected to his dashboard in which he can see all his orders divided into 3 buckets.
</br></br>
![image](https://user-images.githubusercontent.com/58177619/148172825-905b9bf4-8c1e-424d-a647-6eae723be5a8.png)

**Wishlist.** Many people maintain wish-lists of things they want to order. Usually, it is done by searching for potential products in the suppliers’ website and adding products to cart for a potential order. We recognized here a similar pain to the pain of tracking active orders from different suppliers’ websites and wanted to solve it for the users by giving them the option of tracking of all of those potential orders in one place. Once those orders will be made the user can add an order number and drag it to ‘On The Way’. 

**On The Way.** This bucket contains all the user’s active orders.
If the order was assigned with an order number, then automatic tracking will be activated for it, and the user will get a more specific information about the order status which can be one of:
- **Paid.** The package doesn’t have an order number, or the package wasn’t sent yet.
- **Transit.** Courier has picked up the package from the shipper, the package is on the way to destination.
- **Pick Up.** Courier is about to deliver the package, or the package is waiting for the addressee to pick up.
- **Arrived.** The package was delivered successfully.
</br></br>
The order’s status will be checked on each refresh (unless it has already been checked in the last hour). </br>
The order’s status is visible both on the card and in the card’s timeline.
![image](https://user-images.githubusercontent.com/58177619/153365365-746d3fdd-4753-4673-ac9d-a8a39522d196.png)     
![image](https://user-images.githubusercontent.com/58177619/153365193-82767e75-d1c3-4730-9bfe-9ebdffca3915.png)

**Arrived.** This bucket contains all the user’s orders which was delivered successfully.
An order can be placed under Arrived bucket manually by the user, or automatically by the automatic tracking. In both cases, the package’s status won’t be checked from that moment (even if it has an order number).

# Architecture
![image](https://user-images.githubusercontent.com/58177619/153365535-70d3b345-6f18-48ee-9887-7e61f9c65b6d.png)

## Resources
All our resources are hosted on Google Cloud.</br>
We have built our web server on an Ubuntu VM.</br>
We are using Cloud SQL with MySQL server as our database.</br>

## Front-End (Chrome extension and website)
In the view layer we are using React components. Material UI was our main library for them.</br>
For communicating with our Back-End API we used Axios.</br>
We exposed our web application to users by using NGINX.</br>

## Back-End
We used Flask as a (micro) web framework.</br>
We exposed our Flask API to our Front-End by using gunicorn as a HTTP server and NGINX as reverse proxy.

## Information Security
We used Cloudflare free service for creating a SSL/TLS certificate.</br>
We used Google Oauth 2.0 in our frontend to enable users to sign in with google. We also used Google Oauth 2.0 in our backend to authenticate the calls the backend gets from our frontend.

## DB ER Diagram
![image](https://user-images.githubusercontent.com/58177619/153365782-38cbb4c5-072d-4cb7-a20e-50f9fed27e05.png)


# Main APIs
## Google Authentication
Users are able to sign up and login in to our website using their google account. 
After the user has successfully logged in with Google our front-end will get the user’s token id that was generated by Google. From this point in the session, all the user’s indirect calls (calls that will be performed by our front-end as a result from his actions) to our back-end API will be passed with its token id.
When the back-end will get an API call with a token id it will authenticate the token id via Google authentication API. If succeeded, it will get the user’s information (first name, last name and email), in case it wasn’t stored in our database yet, and then it will make the necessary actions in accordance to the given API call.
## Tracking More
Tracking More (https://www.trackingmore.com/) provides an API that gives us information about the live status of orders. Every time a user refreshes his dashboard or gets in to his dashboard we look for all the user’s orders that their status wasn’t checked in the last hour and they are in On The Way bucket and make multithreaded API calls to Tracking More to get their real time delivery status. 

