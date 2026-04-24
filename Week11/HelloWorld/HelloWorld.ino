/*
  DN1010 Experimental Interaction, Ashley Hi 2026
  Week 11 - Physical Computing
  ESP32-C3 OLED Example
  Displays text on the 0.42" built-in OLED screen.
  No additional components.
*/

// ====== Reference Libraries ======
#include <Arduino.h>
#include <U8g2lib.h>
#include <Wire.h>

// ====== Set OLED Pins ======
#define SDA_PIN 5
#define SCL_PIN 6

U8G2_SSD1306_72X40_ER_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);  // 0.42" OLED

void setup(void) {
  Wire.begin(SDA_PIN, SCL_PIN);
  u8g2.begin();
}

void loop(void) {

  u8g2.clearBuffer();        
         
  u8g2.setFont(u8g2_font_ncenB08_tr); 
  I explored different types of messages
  u8g2.drawStr(0,10,"I Wanna");  
  u8g2.drawStr(0,20,"Go HOME!");
  
  u8g2.sendBuffer();                  
  delay(1000);  
}