# SerialTransfer 可靠数据传输库

基于 SerialTransfer 库的 Arduino Blockly 可靠数据传输库，支持 UART、I2C、SPI 三种通信方式，使用 CRC 校验和 COBS 编码。

## Library Info

| Field | Value |
|-------|-------|
| Package | @aily-project/lib-serial-transfer |
| Version | 1.0.0 |
| Author | PowerBroker2 |
| Source | https://github.com/PowerBroker2/SerialTransfer |
| License | MIT |

## 支持的开发板

所有支持硬件串口的 Arduino 开发板（UNO、Mega、ESP32、ESP8266 等）

## 功能描述

SerialTransfer 库提供了一种在两个 Arduino 之间通过 UART/I2C/SPI 可靠传输数据的方式。它使用 COBS 编码和 CRC 校验来确保数据完整性，支持发送整数、浮点数、字符串等类型数据，并支持多包ID标识不同数据流。

- **UART 传输 (SerialTransfer)**: 通过硬件串口传输，支持 Serial/Serial1/Serial2/Serial3
- **I2C 传输 (I2CTransfer)**: 通过 I2C 总线传输，支持主机/从机模式，需指定目标地址
- **SPI 传输 (SPITransfer)**: 通过 SPI 总线传输，支持主机/从机模式

## 快速开始

### UART 传输
1. 使用"初始化 SerialTransfer"积木块选择串口和波特率
2. 发送端使用"发送整数/浮点数/字符串"积木块
3. 接收端先用"收到新数据"判断，再使用接收积木块

### I2C 传输
1. 主机端使用"初始化 I2CTransfer 主机"积木块
2. 从机端使用"初始化 I2CTransfer 从机"积木块并设置地址
3. 主机通过"I2CTransfer 发送"积木块发送数据到指定地址
4. 从机数据自动接收，使用接收积木块读取

### SPI 传输
1. 主机端使用"初始化 SPITransfer 主机"积木块
2. 从机端使用"初始化 SPITransfer 从机"积木块
3. 主机发送数据，从机通过中断自动接收

## 依赖库

- SerialTransfer（已包含在 src 目录中）
