# DPS310 气压传感器

用于DPS310高精度气压传感器，通过I2C接口实现温度和气压测量、海拔高度计算

## Library Info
- **Name**: @aily-project/lib-seeed-dps310
- **Version**: 0.0.1

## Block Definitions

| Block Type | Connection | Parameters (args0 order) | ABS Format | Generated Code |
|------------|------------|--------------------------|------------|----------------|
| `dps310_init` | Statement | ADDR(dropdown), WIRE(dropdown) | `dps310_init(0x77, WIRE)` | `dps310.begin(Wire, 0x77);` |
| `dps310_correct_temp` | Statement | (none) | `dps310_correct_temp()` | `dps310.correctTemp();` |
| `dps310_read_temperature` | Value | OSR(dropdown) | `dps310_read_temperature(7)` | `_dps310ReadTemp(7)` |
| `dps310_read_pressure` | Value | OSR(dropdown) | `dps310_read_pressure(7)` | `_dps310ReadPressure(7)` |
| `dps310_read_altitude` | Value | SEAPRESSURE(field_number) | `dps310_read_altitude(1013.25)` | `_dps310CalcAltitude(1013.25)` |

## Parameter Options

| Parameter | Values | Description |
|-----------|--------|-------------|
| ADDR | 0x77, 0x76 | I2C地址: 0x77(默认) / 0x76 |
| WIRE | ${board.i2c} | I2C接口，随开发板变化 |
| OSR | 7, 6, 5, 4, 3, 2, 1, 0 | 过采样率: 128次(最高精度)到1次(最快速度) |

## ABS Examples

### Basic Usage
```
arduino_setup()
    dps310_init(0x77, WIRE)
    dps310_correct_temp()
    serial_begin(Serial, 9600)

arduino_loop()
    serial_print(Serial, text("Temperature: "))
    serial_println(Serial, dps310_read_temperature(7))
    serial_print(Serial, text("Pressure: "))
    serial_println(Serial, dps310_read_pressure(7))
    time_delay(math_number(1000))
```

### Altitude Calculation
```
arduino_setup()
    dps310_init(0x77, WIRE)
    dps310_correct_temp()
    serial_begin(Serial, 9600)

arduino_loop()
    serial_print(Serial, text("Altitude: "))
    serial_println(Serial, dps310_read_altitude(1013.25))
    time_delay(math_number(1000))
```

## Notes

1. **Initialization**: Place `dps310_init` inside `arduino_setup()`
2. **Temperature correction**: Call `dps310_correct_temp` in setup after init to fix hardware calibration issues
3. **Oversampling**: Higher values (7=128x) give better precision but slower speed; lower values (0=1x) are faster
4. **Pressure unit**: Pressure is returned in Pascal (Pa), divide by 100 for hPa
5. **Altitude**: Uses barometric formula, requires accurate sea-level pressure for your location
