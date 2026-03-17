# RTC 实时时钟

支持 DS3231/DS1307/DS1302/PCF8563 多种 RTC 芯片的实时时钟库。

## Library Info
- **Name**: @aily-project/lib-rtc
- **Version**: 1.0.0

## Block Definitions

| Block Type | Connection | Parameters (args0 order) | ABS Format | Generated Code |
|------------|-----------|--------------------------|------------|----------------|
| `rtc_init` | Statement | VAR(field_input), CHIP_TYPE(dropdown), [DAT_PIN/CLK_PIN/RST_PIN or SDA_PIN/SCL_PIN via extension] | `rtc_init("rtc", DS3231)` | `RtcDS3231<TwoWire> rtc(Wire); rtc.Begin();` |
| `rtc_set_datetime` | Statement | VAR(field_variable), YEAR(input_value), MONTH(input_value), DAY(input_value), HOUR(input_value), MINUTE(input_value), SECOND(input_value) | `rtc_set_datetime($rtc, math_number(2026), math_number(1), math_number(1), math_number(0), math_number(0), math_number(0))` | `rtc.SetDateTime(RtcDateTime(2026, 1, 1, 0, 0, 0));` |
| `rtc_set_compile_datetime` | Statement | VAR(field_variable) | `rtc_set_compile_datetime($rtc)` | `rtc.SetDateTime(RtcDateTime(__DATE__, __TIME__));` |
| `rtc_get_datetime` | Value(RtcDateTime) | VAR(field_variable) | `rtc_get_datetime($rtc)` | `rtc.GetDateTime()` |
| `rtc_is_datetime_valid` | Value(Boolean) | VAR(field_variable) | `rtc_is_datetime_valid($rtc)` | `rtc.IsDateTimeValid()` |
| `rtc_get_is_running` | Value(Boolean) | VAR(field_variable) | `rtc_get_is_running($rtc)` | `rtc.GetIsRunning()` |
| `rtc_set_is_running` | Statement | VAR(field_variable), RUNNING(dropdown) | `rtc_set_is_running($rtc, TRUE)` | `rtc.SetIsRunning(true);` |
| `rtc_get_year` | Value(Number) | TIME(input_value:RtcDateTime) | `rtc_get_year(rtc_get_datetime($rtc))` | `rtc.GetDateTime().Year()` |
| `rtc_get_month` | Value(Number) | TIME(input_value:RtcDateTime) | `rtc_get_month(rtc_get_datetime($rtc))` | `rtc.GetDateTime().Month()` |
| `rtc_get_day` | Value(Number) | TIME(input_value:RtcDateTime) | `rtc_get_day(rtc_get_datetime($rtc))` | `rtc.GetDateTime().Day()` |
| `rtc_get_hour` | Value(Number) | TIME(input_value:RtcDateTime) | `rtc_get_hour(rtc_get_datetime($rtc))` | `rtc.GetDateTime().Hour()` |
| `rtc_get_minute` | Value(Number) | TIME(input_value:RtcDateTime) | `rtc_get_minute(rtc_get_datetime($rtc))` | `rtc.GetDateTime().Minute()` |
| `rtc_get_second` | Value(Number) | TIME(input_value:RtcDateTime) | `rtc_get_second(rtc_get_datetime($rtc))` | `rtc.GetDateTime().Second()` |
| `rtc_get_day_of_week` | Value(Number) | TIME(input_value:RtcDateTime) | `rtc_get_day_of_week(rtc_get_datetime($rtc))` | `rtc.GetDateTime().DayOfWeek()` |
| `rtc_format_datetime` | Value(String) | TIME(input_value:RtcDateTime) | `rtc_format_datetime(rtc_get_datetime($rtc))` | `rtcFormatDateTime(rtc.GetDateTime())` |
| `rtc_ds3231_get_temperature` | Value(Number) | VAR(field_variable), UNIT(dropdown) | `rtc_ds3231_get_temperature($rtc, C)` | `rtc.GetTemperature().AsFloatDegC()` |
| `rtc_ds1302_set_write_protect` | Statement | VAR(field_variable), ENABLE(dropdown) | `rtc_ds1302_set_write_protect($rtc, TRUE)` | `rtc.SetIsWriteProtected(true);` |

## Parameter Options

| Parameter | Values | Description |
|-----------|--------|-------------|
| CHIP_TYPE | DS3231, DS1307, DS1302, PCF8563 | RTC 芯片型号 |
| RUNNING | TRUE, FALSE | 运行/停止 |
| UNIT | C, F | 温度单位（摄氏/华氏） |
| ENABLE | TRUE, FALSE | 启用/禁用写保护 |

## ABS Examples

### 基本用法：读取并打印时间
```
arduino_setup()
    rtc_init("rtc", DS3231)
    rtc_set_compile_datetime($rtc)
    serial_begin(Serial, 9600)

arduino_loop()
    serial_println(Serial, rtc_format_datetime(rtc_get_datetime($rtc)))
    time_delay(math_number(1000))
```

### 读取单独的时间组件
```
arduino_setup()
    rtc_init("rtc", DS1307)
    serial_begin(Serial, 9600)

arduino_loop()
    serial_print(Serial, rtc_get_year(rtc_get_datetime($rtc)))
    serial_print(Serial, text("/"))
    serial_print(Serial, rtc_get_month(rtc_get_datetime($rtc)))
    serial_print(Serial, text("/"))
    serial_println(Serial, rtc_get_day(rtc_get_datetime($rtc)))
    time_delay(math_number(1000))
```

### DS3231 读取温度
```
arduino_setup()
    rtc_init("rtc", DS3231)
    serial_begin(Serial, 9600)

arduino_loop()
    serial_println(Serial, rtc_ds3231_get_temperature($rtc, C))
    time_delay(math_number(1000))
```

### DS1302 三线协议初始化
```
arduino_setup()
    rtc_init("rtc", DS1302)
    rtc_ds1302_set_write_protect($rtc, FALSE)
    rtc_set_is_running($rtc, TRUE)
    rtc_set_compile_datetime($rtc)
```

## Notes

1. **初始化**: 在 `arduino_setup()` 中调用 `rtc_init`
2. **芯片差异**: DS1302 使用三线协议（需指定 DAT/CLK/RST 引脚），其余使用 I2C
3. **ESP32 I2C**: ESP32 上初始化 I2C 芯片时会自动出现 SDA/SCL 引脚选择
4. **编译时间校准**: 首次使用时用 `rtc_set_compile_datetime` 校准，之后注释掉以避免每次上传都重置时间
5. **温度读取**: 仅 DS3231 支持 `rtc_ds3231_get_temperature`
6. **写保护**: 仅 DS1302 支持 `rtc_ds1302_set_write_protect`
7. **Variable**: `rtc_init("varName", ...)` 创建变量 `$varName`，后续用 `variables_get($varName)` 引用
