The directory hirearchy has code for the following under Final_Working_Code.

For Apratments - Base Station, Living Room End Device and Living Room Temperature and Humidity

BaseStationHome - BaseStation Code for Apartments
LivingRoomLights - End Device Code for Living Room Lights for an apartment
LivingRoomTempHumidity - End Device Code Temperature and Humidity Data for an apartment

For Public Places - Admin Base Station, Community lights for the admin

BaseStationAdmin  - Base Station Code for Public Places
CommunityLights - End Device Code for Public Place Community Lights
Platform - Arduino
Board - ESP32 for both Base Station and End Devices

Compilation - Load the correponding .ino file in any of the folders using Arduino IDE and hit compile and flash.
The Base Station Code establishes connection with the AWS IoT Core using Wifi and hence the correct Wifi Details
need to be updated in the code. The publish and subscribe topics also need to be updated.
In order to connect to the correct Bluetooth devices, the corresponding Bluetooth MAC adddress need to be updated
