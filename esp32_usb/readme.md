# ESP32 USB

## 简介
ESP32原生USB HID功能库，支持键盘、鼠标、游戏手柄、媒体控制、系统控制和MIDI。利用ESP32-S2/S3内置USB接口，无需额外硬件即可模拟各类USB HID设备。

## 特性
- USB键盘：字符输入、特殊按键、组合键
- USB鼠标：移动、点击、滚轮
- USB游戏手柄：按键、摇杆、扳机、十字键
- USB媒体控制：播放、音量、亮度等
- USB系统控制：关机、待机、唤醒
- USB MIDI：音符、控制变更、音色切换、弯音

## 支持的开发板
- ESP32-S2
- ESP32-S3

> 注意：仅支持具有原生USB接口的ESP32型号，不支持ESP32、ESP32-C3等。

## 依赖库
无外部依赖，使用ESP32 Arduino Core内置的USB库。

## 使用说明
1. 选择需要的USB设备功能块（键盘/鼠标/游戏手柄等）
2. 库会自动完成设备初始化和USB启动
3. 在循环中发送HID指令

## 注意事项
- `USB.begin()` 必须在所有设备 `.begin()` 之后调用（库已自动处理）
- Arduino IDE中需将USB Mode设置为"USB-OTG (TinyUSB)"
- 同一程序可同时使用多种USB设备

## 许可证
ESP32 Arduino Core内置库，遵循Apache License 2.0。
