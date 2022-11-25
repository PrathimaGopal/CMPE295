#include "secrets1.h"
#include <WiFiClientSecure.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include <esp_now.h>
#include "WiFi.h"
#include "time.h"

#define LIVING_TEMP_HUM            0
#define LIVING_ROOM_LIGHT_MESSAGE  1
#define COMMUNITY_LIGHT_MESSAGE    2
#define LIVING_ROOM_LIGHTS

#define AWS_IOT_PUBLISH_TOPIC    "esp32/pub1"
#define AWS_IOT_PUBLISH_TOPIC1   "esp32/pub1"
#define AWS_IOT_SUBSCRIBE_TOPIC  "esp32/sub1"

uint8_t broadcastAddress[]   = {0x34, 0x86, 0x5D, 0xFF, 0x18, 0x4C};
uint8_t broadcastAddress_2[] = {0x58, 0xBF, 0x25, 0x9F, 0xA6, 0x38};
uint8_t broadcastAddress_3[] = {0x34, 0x86, 0x5D, 0xFE, 0xE0, 0xEC};

const char* ssid = "indiarocks";
const char* password = "cdsarode";

float t,h;
int living_room_light_val;

const char* ntpServer = "pool.ntp.org";
const long  gmtOffset_sec = 0;
const int   daylightOffset_sec = 0;

WiFiClientSecure net = WiFiClientSecure();
PubSubClient client(net);

typedef struct struct_message {  
  union {
    struct{
      float temp;
      float hum; 
    }temp_hum;

    struct{
      int light_val;
    }LivingRoomLight;
    
    struct{
      int light_val;
    }CommunityLight;
  } u;
  int  msg_type;
} struct_message;

// Define variables to store incoming readings
float incomingTemp;
float incomingHum;
int   incomingmsgType;

// Create a struct_message called BME280Readings to hold sensor readings
struct_message SensorReadings;

// Create a struct_message to hold incoming sensor readings
struct_message incomingReadings;

esp_now_peer_info_t peerInfo;
esp_now_peer_info_t peerInfo_2;
esp_now_peer_info_t peerInfo_3;

// Variable to store if sending data was successful
String success;

void printLocalTime(char *time_val){
  struct tm timeinfo;
  if(!getLocalTime(&timeinfo)){
    Serial.println("Failed to obtain time");
    return;
  }
 Serial.println(&timeinfo, "%A, %B %d %Y %H:%M:%S"); 
 strftime(time_val, 200,  "%A, %B %d %Y %H:%M:%S", &timeinfo);
 Serial.println("time val = ");
 Serial.println(time_val);
}

void OnDataSent(const uint8_t *mac_addr, esp_now_send_status_t status) {
  Serial.print("\r\nLast Packet Send Status:\t");
  Serial.println(status == ESP_NOW_SEND_SUCCESS ? "Delivery Success" : "Delivery Fail");
  if (status ==0){
    success = "Delivery Success :)";
  }
  else{
    success = "Delivery Fail :(";
  }
}

// Callback when data is received
void OnDataRecv(const uint8_t * mac, const uint8_t *incomingData, int len) {
  int msg_type;
  memcpy(&incomingReadings, incomingData, sizeof(incomingReadings));
  msg_type = incomingReadings.msg_type;
  Serial.print("Bytes received: ");
  Serial.println(len);
  if(msg_type == LIVING_TEMP_HUM) {
  incomingTemp = incomingReadings.u.temp_hum.temp;
  incomingHum = incomingReadings.u.temp_hum.hum;
  Serial.println("Temp Value");
  Serial.print(incomingTemp);
  Serial.println("Hum Value");
  Serial.print(incomingHum);
  } else if(msg_type == LIVING_ROOM_LIGHT_MESSAGE) {
    
    living_room_light_val = incomingReadings.u.LivingRoomLight.light_val;
    Serial.println("Light Value:");
    Serial.print(living_room_light_val); 
  }
}

void publishTempMessage() {
  char time_val[200];
  StaticJsonDocument<200> doc;
  char jsonBuffer[512];
  
  doc["LIVING_ROOM_TEMPERATURE"] = "LivingRoomTemperature";
  printLocalTime(time_val);
  doc["time"] = time_val;
  doc["homeID"] = 1;
  doc["temperature"] = incomingTemp;
  
  serializeJson(doc, jsonBuffer); // print to client
 
  client.publish(AWS_IOT_PUBLISH_TOPIC, jsonBuffer);
}

void publishHumidityMessage(){
  char time_val[200];
  StaticJsonDocument<200> doc;
  char jsonBuffer[512];
  
  doc["LivingRoomHumidity"] = "LivingRoomHumidity";
  printLocalTime(time_val);
  doc["time"] = time_val;
  doc["homeID"] = 1;
  doc["Humidity"] = incomingHum;
  
  serializeJson(doc, jsonBuffer); // print to client
 
  client.publish(AWS_IOT_PUBLISH_TOPIC, jsonBuffer);
}

void publishLightMessage(){
  static int i = 0;
  StaticJsonDocument<200> doc;
  char jsonBuffer[512];
  
  doc["LIVING_ROOM_LIGHT"] = "LivingRoomLight";
  doc["homeID"] = 1;
  doc["value"] = living_room_light_val;
  
  serializeJson(doc, jsonBuffer); // print to client
 
  client.publish(AWS_IOT_PUBLISH_TOPIC, jsonBuffer); 
}


void publishCameraUrl(){
  static int i = 0;
  StaticJsonDocument<200> doc;
  char jsonBuffer[512];
  
  doc["HOME_SECURITY_CAMERA"] = "HomeSecurityCamera";
  doc["homeID"] = 1;
  doc["url"] = "https://www.youtube.com/results?search_query=security+camera+footage";
  
  serializeJson(doc, jsonBuffer); // print to client
 
  client.publish(AWS_IOT_PUBLISH_TOPIC, jsonBuffer); 
}

void publishMessage(){
  publishTempMessage();
  delay(500);
  publishLightMessage();
  delay(500);
  publishHumidityMessage();
  delay(500);
}

void switch_living_room_lights(int val) {
  SensorReadings.msg_type = LIVING_ROOM_LIGHT_MESSAGE;
  SensorReadings.u.LivingRoomLight.light_val = val;
  // Send message via ESP-NOW
  esp_err_t result = esp_now_send(broadcastAddress_2, (uint8_t *) &SensorReadings, sizeof(SensorReadings));
   
  if (result == ESP_OK) {
    Serial.println("Sent with success Living room light data");
  }
  else {
    Serial.println("Error sending the data");
  }
}


void messageHandler(char* topic, byte* payload, unsigned int length){
  Serial.print("incoming: ");
  Serial.println(topic);
 
  StaticJsonDocument<200> doc;
  deserializeJson(doc, payload);
  const char* messagetype = doc["deviceType"];
  Serial.println(messagetype);
  int value = doc["value"];
  Serial.println(value);
  
  if(strcmp(messagetype, "LivingRoomLight") == 0) {
    Serial.print("Got message for living room lights");
    switch_living_room_lights(value);
  } else if(strcmp(messagetype, "livingroomtemperature") == 0) {
    Serial.print("Got message for living room temperature");
  } else if(strcmp(messagetype, "HomeSecurityCamera") == 0) {
    Serial.print("Got message for Home security Camera");
    publishCameraUrl();
  }
}
 
void setup(){
  Serial.begin(115200);

  WiFi.mode(WIFI_AP_STA);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Setting as a Wi-Fi Station..");
  }

  Serial.print("Wi-Fi Channel: ");
  Serial.println(WiFi.channel());

  // Init ESP-NOW
  if (esp_now_init() != ESP_OK) {
    Serial.println("Error initializing ESP-NOW");
    return;
  }

  // Once ESPNow is successfully Init, we will register for Send CB to
  // get the status of Trasnmitted packet
  esp_now_register_send_cb(OnDataSent);
  
  // Register peer
  memcpy(peerInfo.peer_addr, broadcastAddress, 6);
  peerInfo.channel = 0;  
  peerInfo.encrypt = false;

  memcpy(peerInfo_2.peer_addr, broadcastAddress_2, 6);
  peerInfo_2.channel = 0;  
  peerInfo_2.encrypt = false;

  memcpy(peerInfo_3.peer_addr, broadcastAddress_3, 6);
  peerInfo_3.channel = 0;  
  peerInfo_3.encrypt = false;
  
  // Add peer        
  if (esp_now_add_peer(&peerInfo) != ESP_OK){
    Serial.println("Failed to add peer");
    return;
  }

   if (esp_now_add_peer(&peerInfo_2) != ESP_OK){
    Serial.println("Failed to add peer 2");
    return;
  }

   if (esp_now_add_peer(&peerInfo_3) != ESP_OK){
   Serial.println("Failed to add peer 3");
   return;
  }
  // Register for a callback function that will be called when data is received
  esp_now_register_recv_cb(OnDataRecv);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
 
  Serial.println("Connecting to Wi-Fi");
 
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }

  // Configure WiFiClientSecure to use the AWS IoT device credentials
  net.setCACert(AWS_CERT_CA);
  net.setCertificate(AWS_CERT_CRT);
  net.setPrivateKey(AWS_CERT_PRIVATE);
 
  // Connect to the MQTT broker on the AWS endpoint we defined earlier
  client.setServer(AWS_IOT_ENDPOINT, 8883);
 
  // Create a message handler
  client.setCallback(messageHandler);
 
  Serial.println("Connecting to AWS IOT");
 
  while (!client.connect(THINGNAME))
  {
    Serial.print(".");
    delay(100);
  }
 
  if (!client.connected())
  {
    Serial.println("AWS IoT Timeout!");
    return;
  }
  // Subscribe to a topic
  client.subscribe(AWS_IOT_SUBSCRIBE_TOPIC);
 
  Serial.println("AWS IoT Connected!");

  configTime(gmtOffset_sec, daylightOffset_sec, ntpServer);

}
 
void loop(){
  Serial.print("\n");
  publishMessage();
  client.loop();
}
