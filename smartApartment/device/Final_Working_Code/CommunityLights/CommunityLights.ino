//device 3
// community room lights

#include <esp_now.h>
#include <WiFi.h>
#include <esp_wifi.h>

#define LIVING_ROOM_PIN 22
#define COMMUNITY_PIN 5

#define LIVING_TEMP_HUM 0
#define LIVING_ROOM_LIGHT_MESSAGE 1
#define COMMUNITY_LIGHT_MESSAGE 2

unsigned int readingId = 0;

// REPLACE WITH THE MAC Address of your receiver 
uint8_t broadcastAddress[] = {0x0C, 0xB8, 0x15, 0xC1, 0xB2, 0xE4};

constexpr char WIFI_SSID[] = "indiarocks";

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
char  imsg_type;

// Create a struct_message called BME280Readings to hold sensor readings
struct_message SensorReadings;

// Create a struct_message to hold incoming sensor readings
struct_message incomingReadings;

esp_now_peer_info_t peerInfo;

// Variable to store if sending data was successful
String success;

int32_t getWiFiChannel(const char *ssid) {
  if (int32_t n = WiFi.scanNetworks()) {
      for (uint8_t i=0; i<n; i++) {
          if (!strcmp(ssid, WiFi.SSID(i).c_str())) {
              return WiFi.channel(i);
          }
      }
  }
  return 0;
}

// Callback when data is sent
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

void set_living_room_light_val(int val) {
  //GPIO on/off
  SensorReadings.u.LivingRoomLight.light_val = val;
  if(val == 0) {
    Serial.println("Turn off lights");
    digitalWrite(LIVING_ROOM_PIN, LOW);
  } else {
    Serial.println("Turn on lights");
    digitalWrite(LIVING_ROOM_PIN, HIGH);
  }
}

void set_community_light_val(int val) {
  //GPIO on/off
  SensorReadings.u.CommunityLight.light_val = val;
  if(val == 0) {
    Serial.println("Turn off lights");
    digitalWrite(COMMUNITY_PIN, LOW);
  } else {
    Serial.println("Turn on lights");
    digitalWrite(COMMUNITY_PIN, HIGH);
  }
}

// Callback when data is received
void OnDataRecv(const uint8_t * mac, const uint8_t *incomingData, int len) {
  memcpy(&incomingReadings, incomingData, sizeof(incomingReadings));
  Serial.print("Bytes received: ");
  Serial.println(len);
  if(incomingReadings.msg_type == LIVING_ROOM_LIGHT_MESSAGE) {
    set_living_room_light_val(incomingReadings.u.LivingRoomLight.light_val);
  } else if(incomingReadings.msg_type == COMMUNITY_LIGHT_MESSAGE) {
    set_community_light_val(incomingReadings.u.CommunityLight.light_val);
  } else if(incomingReadings.msg_type == LIVING_TEMP_HUM) {
    incomingTemp = incomingReadings.u.temp_hum.temp;
    incomingHum = incomingReadings.u.temp_hum.hum;
  }
}

void setup() {
  // Init Serial Monitor
  pinMode(COMMUNITY_PIN, OUTPUT);
  Serial.begin(115200);
 
  // Set device as a Wi-Fi Station
  WiFi.mode(WIFI_STA);

  int32_t channel = getWiFiChannel(WIFI_SSID);

  WiFi.printDiag(Serial); // Uncomment to verify channel number before
  esp_wifi_set_promiscuous(true);
  esp_wifi_set_channel(channel, WIFI_SECOND_CHAN_NONE);
  esp_wifi_set_promiscuous(false);
  WiFi.printDiag(Serial);

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
  
  // Add peer        
  if (esp_now_add_peer(&peerInfo) != ESP_OK){
    Serial.println("Failed to add peer");
    return;
  }
  // Register for a callback function that will be called when data is received
  esp_now_register_recv_cb(OnDataRecv);
}

static int get_living_room_light_val() {
  return SensorReadings.u.LivingRoomLight.light_val;
}

static int get_community_light_val() {
  return SensorReadings.u.CommunityLight.light_val;
}

void loop() { 
  // Set values to send
  SensorReadings.msg_type = COMMUNITY_LIGHT_MESSAGE; 
  if(SensorReadings.msg_type == LIVING_ROOM_LIGHT_MESSAGE) {
      Serial.println("Hi. There...................Living Room............");
      SensorReadings.u.LivingRoomLight.light_val = get_living_room_light_val();
  } else if(SensorReadings.msg_type == COMMUNITY_LIGHT_MESSAGE) {
      Serial.println("Hi. There...................COMMUNITY LIGHT............");
      SensorReadings.u.CommunityLight.light_val = get_community_light_val();
  } else if (SensorReadings.msg_type == LIVING_TEMP_HUM){
       Serial.println("Wrong Message");
      //SensorReadings.u.temp_hum.temp = dht.readTemperature();
      //delay(10);
      //SensorReadings.u.temp_hum.hum = dht.readHumidity();
      //delay(10);
  }
  // Send message via ESP-NOW
  esp_err_t result = esp_now_send(broadcastAddress, (uint8_t *) &SensorReadings, sizeof(SensorReadings));
   
  if (result == ESP_OK) {
    Serial.println("Sent with success");
  }
  else {
    Serial.println("Error sending the data");
  }
  delay(500);
}

void updateDisplay(){
  // Display Readings in Serial Monitor
  Serial.println("INCOMING READINGS");
  Serial.print("Temperature: ");
  Serial.print(incomingReadings.u.temp_hum.temp);
  Serial.println(" ºC");
  Serial.print("Humidity: ");
  Serial.print(incomingReadings.u.temp_hum.hum);
  Serial.println(" %");
  Serial.print(" MESSAGE FROM MASTER: ");
  Serial.print(incomingReadings.msg_type);
  Serial.println();
}
