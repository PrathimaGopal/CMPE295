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

__Prathima Gopal__:
* Created two different layouts for Resident and Admin (smartApartment/frontend/src/app/layouts).
* Created UI for the Website pages - Home page, About Us, Contact Us, Login (/smartApartment/frontend/src/app/pages/Others).
  - EmailJS template to send mail to aparment email when a request is submitted from Contact Us page.  
* UI for Resident login (/smartApartment/frontend/src/app/pages/ResidentDashboard).
  - Dashboard (Components: Lights, MainController, InfoCard, Temperature Controller, Humidity Controller, Security Camera, Resident Dashboard).
  - Service Request (Component: Service Request).
* UI for Admin Login (/smartApartment/frontend/src/app/pages/AdminDashboard).
  - Dashboard (Components: Public Utility, Camera, AdminDashboard).
  - Add new user (Component: AddNewUser).
  - Remove user (Component: RemoveUser).
  - Service Request (Components: Messages, FeedMessage).
* Created the Datapipeline to send messages from Application to IoT core using AWS Lambda & API gateway.




