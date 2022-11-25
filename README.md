# MASTER'S PROJECT - SMART APARTMENT COMMUNITY MONITORING

## TEAM MEMBERS:
* __Anjali Kumari__ - 015353026
* __Prathima Gopal__ - 014545375
* __Shreevats Gadhikar__ - 015247401
* __Sourab Gupta__ - 014632436

The source code consists of two different folders:
1. Front-end folder
2. Hardware code

```
To run the web application, use the instructions in the frontend folder 'readme' file
```


### Project Overview

* Developing a centralized interface for multiple IoT devices
* Authorized access for the residents and the admin.
* The resident of an apartment will be given a separate login to manage the IoT devices of the particular apartment. The login will be valid until the lease expires.
* The administrator will be authorized to add/remove users and manage the IoT devices in the public areas.


### Project Architecture


![newArch1](https://user-images.githubusercontent.com/70705974/203882013-72588f0a-1de6-4563-9a67-acb9ad5bef72.jpg)


### Data Pipeline

* IoT devices connected to AWS IoT core.
* Each apartment in the IoT core has a unique topic to which all the devices subscribe.
* IoT devices publishes state of the devices and data to AWS DynamoDB using Rules Engine.
* Web application allows authorized users to login using AWS Cognito pool.
* Once authorized, the dashboard displays the state of the devices from the devices using AWS Gateway services.
* When the user changes the state of a device, the application uses API gateway to call AWS Lambda functions which publishes the state change to the IoT core.

### Hardware Design

* Use ESP32 board as BaseStation and End Devices
* Wifi to connect to AWS IoT Core
* ESP now to connect BaseStation to End Devices
* Messages are received on the subscription Topic, Passed onto the end device based on device ID, Relevant action taken by end device (e.g. Light on or off)
* Messages sent to the web application/DynamoDB via Publish Topic

### Software Design

* The software part of the project is the design  of a web application. 
* It is designed using the React library of Javascript because of its efficiency and flexibility. 
* React is an open-source JavaScript library for building simple and scalable front ends. 
* The application consists of two dashboards: Resident dashboard, Admin Dashboard.


### Application Screenshots

Resident Dashboard:
<img width="1467" alt="ResidentDashboard" src="https://user-images.githubusercontent.com/70705974/203881864-ac8ddeff-51df-4622-89b6-2a0ca5b6f2fe.png">

Resident Dashboard - Service Request:
<img width="1462" alt="ResidentDashboard_ServiceRequest" src="https://user-images.githubusercontent.com/70705974/203881865-73c11e63-83d0-4b2d-905a-6ca0094b65be.png">

Admin Dashboard:
<img width="1464" alt="AdminDashboard" src="https://user-images.githubusercontent.com/70705974/203881854-072a3366-2641-49b3-8b43-a316e01374e1.png">

Admin Dashboard - Add new user:
<img width="1464" alt="AdminDashboard_AddNewUser" src="https://user-images.githubusercontent.com/70705974/203881858-a38edf91-64ba-4ac3-81dd-52f828200853.png">

Admin Dashboard - Remove user:
<img width="1466" alt="AdminDashboard_RemoveUser" src="https://user-images.githubusercontent.com/70705974/203881861-6790180d-e57d-4e11-be95-d2b6e48f758d.png">

Admin Dashboard - Service Request:
<img width="1466" alt="ServiecRequest_Admin" src="https://user-images.githubusercontent.com/70705974/203881867-9b053983-90d6-4501-9cf8-8786a82879fd.png">

## Individual Contribution:

__Anjali Kumari__:

* Created Cognito pool in AWS to maintain the login functionality for authentication and user details with custom attributes for user & resident.https://github.com/PrathimaGopal/CMPE295/tree/main/smartApartment/frontend/src/app/pages/auth-pages/login1
* Created a user table in DynamoDB synced with UI where it will be simultaneously modified. 
* Created API gateway of Get and Post function with the AWS lambda code to Add user and Remove user admin functionality from UI to DynamoDb and AWS pool which updates the Cognito pool with enabled and confirmed status.  
https://github.com/PrathimaGopal/CMPE295/blob/main/smartApartment/frontend/src/app/pages/AdminDashboard/AddNewUser/ 
https://github.com/PrathimaGopal/CMPE295/blob/main/smartApartment/frontend/src/app/pages/AdminDashboard/RemoveUser/ 

* Created API by using AWS lambda function to fetch the data related to the particular device and to check the state of all the switches of the apartment from the DynamoDb table and show the same state on UI while loading the dashboard. 
https://github.com/PrathimaGopal/CMPE295/blob/main/smartApartment/frontend/src/app/pages/ResidentDashboard/Dashboard/Lights.jsx

* Created API and integrated it to read the latest value of Temperature and Humidity from dynamodb and displayed the same on the controller sliders of the resident dashboard with AWS lambda function and API integration. 
https://github.com/PrathimaGopal/CMPE295/tree/main/smartApartment/frontend/src/app/pages/ResidentDashboard/Dashboard/TemperatureController

* Displayed the temperature and humidity graph on UI against time with the dynamic data of the table with AWS lambda function and API integration as a line graph.
https://github.com/PrathimaGopal/CMPE295/tree/main/smartApartment/frontend/src/app/pages/ResidentDashboard/Dashboard/TempHumidityGraph

__Prathima Gopal__:
* Created two different layouts for Resident and Admin [smartApartment/frontend/src/app/layouts](https://github.com/PrathimaGopal/CMPE295/tree/main/smartApartment/frontend/src/app/layouts).

* Created UI for the Website pages - Home page, About Us, Contact Us, Login [/smartApartment/frontend/src/app/pages/Others](https://github.com/PrathimaGopal/CMPE295/tree/main/smartApartment/frontend/src/app/pages/Others).
  - EmailJS template to send mail to apartment email when a request is submitted from Contact Us page.  
  
* UI for Resident login [/smartApartment/frontend/src/app/pages/ResidentDashboard](https://github.com/PrathimaGopal/CMPE295/tree/main/smartApartment/frontend/src/app/pages/ResidentDashboard).
  - Dashboard (Components: Lights, MainController, InfoCard, Temperature Controller, Humidity Controller, Security Camera, Resident Dashboard).
  - Service Request (Component: Service Request).
  - Created a table in DynamoDB for service request and integrated it with the application using API.
  
* UI for Admin Login [/smartApartment/frontend/src/app/pages/AdminDashboard](https://github.com/PrathimaGopal/CMPE295/tree/main/smartApartment/frontend/src/app/pages/AdminDashboard).
  - Dashboard (Components: Public Utility, Camera, AdminDashboard).
  - Add new user (Component: AddNewUser).
  - Remove user (Component: RemoveUser).
  - Service Request (Components: Messages, FeedMessage).
  
* Created the Datapipeline to send messages from Application to IoT core using AWS Lambda & API gateway.

__Shreevats Gadhikar & Sourab Gupta__:
* BaseStationHome:
  - BaseStation Code for Apartments Files - BaseStationHome.ino, secrets1.h
```
Functions: 
```
  - setup() - Setup Wifi, connect to IoT Core, setup up publish and subscribe topics, establish connection with end devices over Bluetooth and configure time of day over NTP.  
  - messageHandler() - Handler to process messages over subscription topic. Send relevant message to relevant endpoint to control or fetch data from an end device.
  - publishMessage() - Calls functions to publish messages from different endpoints. 
  - publishCameraUrl() - Publish Camera Url to AWS IoT Cores over publish topic. 
  - publishHumidityMessage() - Publish Humidity data to AWS IoT Core over Publish Topic. 
  - publishTempMessage() - Publish Temperature data to AWS IoT Core over Publish Topic. 
  - switch_living_room_lights() - Send Message to the endpoint to switch the living room lights. 
  - OnDataRecv() - Callback to process messages recieved over bluetooth from end devices.
  - OnDataSent() - Callback after a message is sent to the end device over bluetooth. 

* LivingRoomLights:
  - End Device Code for Living Room Lights for an apartment Files - LivingRoomLights.ino 
```
Functions():
```
  - setup() - Setup Bluetooth connection with the Basestation, register callbacks.
  - OnDataRecv() - Handler to process messages from the Base Station. 
  - OnDataSent() - Callback handler called after data is sent to the base station. 
  - set_living_room_light_val() - Turn on/off a LED on the board representing a light.
  - get_living_room_light_val() - Get Current State of Living Room Lights.

* LivingRoomTempHumidity:
  - End Device Code Temperature and Humidity Data for an apartment Files - LivingRoomTempHumidity.ino 
  - Similar functions as Living Room lights plus one additional function to send dht sensor values to base station. 

* For Public Places - Admin Base Station, Community lights for the admin.

* BaseStationAdmin:
  - Base Station Code for Public Places Files - BaseStationAdmin.ino, secrets1.h 
```
Functions():
```
  - setup() - Setup Wifi, connect to IoT Core, setup up publish and subscribe topics, establish connection with end devices over Bluetooth and configure time of day over NTP. 
  - messageHandler() - Handler to process messages over subscription topic. Send relevant message to relevant endpoint to control or fetch data from an end device. 
  - publishMessage() - Calls functions to publish messages from different endpoints.  
  - switch_community_lights() - Send Message to the endpoint to switch the community lights. 
  - OnDataRecv() - Callback to process messages recieved over bluetooth from end devices. 
  - OnDataSent() - Callback after a message is sent to the end device over bluetooth.
  - CommunityLights - End Device Code for Public Place Community Lights setup() - Setup Bluetooth connection with the Basestation, register callbacks. 
  - OnDataRecv() - Handler to process messages from the Base Station.
  - OnDataSent() - Callback handler called after data is sent to the base station.
  - set_community_light_val() - Turn on/off a LED on the board representing a light. 
  - get_community_light_val() - Get Current State of Community Lights.




