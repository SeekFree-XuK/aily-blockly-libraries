# DPS310 气压传感器

用于DPS310高精度气压传感器，通过I2C接口实现温度和气压测量、海拔高度计算。

## Library Info

| Field | Value |
|-------|-------|
| Package | @aily-project/lib-seeed-dps310 |
| Version | 0.0.1 |
| Author | Infineon Technologies / Seeed Studio |
| Source | https://github.com/Infineon/DPS310-Pressure-Sensor |
| License | MIT |

## Supported Boards

Arduino UNO, Mega, ESP32, ESP32-S3, ESP32-C3

## Description

DPS310是英飞凌推出的高精度数字气压传感器，测量范围300-1200hPa，温度范围-40~85°C。支持I2C和SPI接口，具有高过采样率配置，适用于气象站、无人机高度计、室内导航等应用。

## Quick Start

1. 将DPS310传感器通过I2C连接到开发板（SDA/SCL）
2. 在setup中放置初始化块，在loop中读取温度和气压数据
