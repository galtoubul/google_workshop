# [Trackeet](http://trackeet.co) - **Make Tracking Online Orders Easier**

<p align="center">
  <img src="https://img.shields.io/badge/webserver-off-red.svg" alt="web server" />
  <img src="https://img.shields.io/badge/autotrack-off-red.svg" alt="auto track" />
</p>

![image](https://user-images.githubusercontent.com/58177619/147886708-d6200934-1188-43bb-ba12-2dec2930a819.png)

# Features

## Trackeet Chrome Extension
Save your orders from across the web
with our Chrome extension

https://user-images.githubusercontent.com/58177619/147888563-d2471ed9-893c-4727-95f3-f4481d243c54.mp4

## Trackeet Web App
Effortlessly track, organize and know exactly when your international orders will arrive
![image](https://user-images.githubusercontent.com/58177619/148172825-905b9bf4-8c1e-424d-a647-6eae723be5a8.png)

# Architecture
![image](https://user-images.githubusercontent.com/58177619/148173039-2762acf6-1d1b-4027-97a5-754f590f5b4f.png)

All our resources are hosted on Google Cloud.

Front-End
In the view layer we are using React components.
For communicating with clients and our BE API we use Axios.
We expose our web app is by using NGINX.

Back-End
We used Flask as a (micro) web framework.
We expose Flask api to our FE by using Gunicorn as a HTTP server and NGINX as reverse proxy.

Information Security
We used Cloudflare free service for creating a SSL/TLS certificate.
We used Google Oauth 2.0 our frontend to enable users to sign in with google.
We also used Google Oauth 2.0 in our backend to authenticate the calls the backend gets from our frontend
