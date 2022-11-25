The directory hirearchy has code for the following under Final_Working_Code.

For Apartments - Base Station, Living Room End Device and Living Room Temperature and Humidity

BaseStationHome - BaseStation Code for Apartments
Files - BaseStationHome.ino, secrets1.h
Functions: 
	setup() - Setup Wifi, connect to IoT Core, setup up publish and subscribe topics, establish connection with end devices over Bluetooth and configure time of day over NTP - Sourab/Shreevats
	messageHandler() - Handler to process messages over subscription topic. Send relevant message to relevant endpoint to control or fetch data from an end device - Sourab/Shreevats
	publishMessage() - Calls functions to publish messages from different endpoints - Shreevats/Sourab
	publishCameraUrl() - Publish Camera Url to AWS IoT Cores over publish topic - Shreevats/Sourab
	publishHumidityMessage() - Publish Humidity data to AWS IoT Core over Publish Topic - Shreevats/Sourab
	publishTempMessage() - Publish Temperature data to AWS IoT Core over Publish Topic - Shreevats/Sourab
	switch_living_room_lights() - Send Message to the endpoint to switch the living room lights - Shreevats/Sourab
	OnDataRecv() - Callback to process messages recieved over bluetooth from end devices - Shreevats/Sourab
	OnDataSent() -  Callback after a message is sent to the end device over bluetooth - Shreevats/Sourab
	

LivingRoomLights - End Device Code for Living Room Lights for an apartment
Files - LivingRoomLights.ino
Functions():
	setup() - Setup Bluetooth connection with the Basestation, register callbacks - Shreevats/Sourab
	OnDataRecv() - Handler to process messages from the Base Station - Shreevats/Sourab
	OnDataSent() - Callback handler called after data is sent to the base station - Shreevats/Sourab
	set_living_room_light_val() - Turn on/off a LED on the board representing a light - Shreevats/Sourab
	get_living_room_light_val() - Get Current State of Living Room Lights
	
	
LivingRoomTempHumidity - End Device Code Temperature and Humidity Data for an apartment
Files - LivingRoomTempHumidity.ino
	Similar functions as Living Room lights plus one additional function to send dht sensor values to base station - Shreevats/Sourab
	
For Public Places - Admin Base Station, Community lights for the admin

BaseStationAdmin  - Base Station Code for Public Places
Files - BaseStationAdmin.ino, secrets1.h
Functions():
	setup() - Setup Wifi, connect to IoT Core, setup up publish and subscribe topics, establish connection with end devices over Bluetooth and configure time of day over NTP - Sourab/Shreevats
	messageHandler() - Handler to process messages over subscription topic. Send relevant message to relevant endpoint to control or fetch data from an end device - Sourab/Shreevats
	publishMessage() - Calls functions to publish messages from different endpoints - Shreevats/Sourab
	switch_community_lights() - Send Message to the endpoint to switch the community lights - Shreevats/Sourab
	OnDataRecv() - Callback to process messages recieved over bluetooth from end devices - Shreevats/Sourab
	OnDataSent() -  Callback after a message is sent to the end device over bluetooth - Shreevats/Sourab
CommunityLights - End Device Code for Public Place Community Lights
	setup() - Setup Bluetooth connection with the Basestation, register callbacks - Shreevats/Sourab
	OnDataRecv() - Handler to process messages from the Base Station - Shreevats/Sourab
	OnDataSent() - Callback handler called after data is sent to the base station - Shreevats/Sourab
	set_community_light_val() - Turn on/off a LED on the board representing a light - Shreevats/Sourab
	get_community_light_val() - Get Current State of Community Lights


Platform - Arduino
Board - ESP32 for both Base Station and End Devices

Compilation - Load the correponding .ino file in any of the folders using Arduino IDE and hit compile and flash.
The Base Station Code establishes connection with the AWS IoT Core using Wifi and hence the correct Wifi Details
need to be updated in the code. The publish and subscribe topics also need to be updated.
In order to connect to the correct Bluetooth devices, the corresponding Bluetooth MAC adddress need to be updated
