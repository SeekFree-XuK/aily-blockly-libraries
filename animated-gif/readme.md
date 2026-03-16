# GIF动画播放器

基于AnimatedGIF库的GIF动画播放器，支持在TFT显示屏上播放GIF动画，可从内存（FLASH）或SD卡加载GIF文件。

## 库信息

| 字段 | 值 |
|------|------|
| 包名 | @aily-project/lib-animated-gif |
| 版本 | 1.0.0 |
| 作者 | Larry Bank |
| 来源 | https://github.com/bitbank2/AnimatedGIF |
| 许可证 | Apache-2.0 |

## 支持开发板

Arduino UNO, Arduino Mega, ESP32, ESP8266, Arduino UNO R4 WiFi, Raspberry Pi Pico 等

## 说明

AnimatedGIF 是一个高性能的 GIF 解码库，专为 MCU 设计，只需 22K RAM 即可解码 GIF 动画。支持从内存（FLASH）或 SD 卡播放 GIF 动画到 TFT 显示屏（需配合 Adafruit GFX 彩色显示屏库使用）。支持透明度处理和多帧动画播放。

## 快速开始

1. 先使用「彩色显示屏」库初始化 TFT 屏幕
2. 使用「初始化GIF播放器」块创建播放器
3. 使用「打开内存数据」或「打开SD卡文件」块加载 GIF
4. 使用「播放全部帧」块播放动画
5. 使用「关闭」块释放资源
