# RTC 实时时钟

支持 DS3231/DS1307/DS1302/PCF8563 多种芯片的实时时钟 Blockly 库。

## 库信息

| 字段 | 值 |
|------|-----|
| Package | @aily-project/lib-rtc |
| Version | 1.0.0 |
| Author | Michael C. Miller (Makuna) |
| Source | https://github.com/Makuna/Rtc |
| License | LGPL-3.0 |

## 支持的开发板

Arduino UNO, Mega, SAMD, ESP32, ESP8266, RP2040

## 说明

基于 Makuna/Rtc 库，统一支持 DS3231（I2C，含温度传感器）、DS1307（I2C）、DS1302（三线协议）和 PCF8563（I2C）四种常见 RTC 芯片。提供时间读取、设置、格式化及芯片专有功能。

## 快速开始

1. 在 setup 中使用"初始化RTC时钟"积木，选择芯片型号
2. 使用"设置为编译时间"积木进行首次校准
3. 在 loop 中使用"获取当前时间"和时间组件积木读取时间
