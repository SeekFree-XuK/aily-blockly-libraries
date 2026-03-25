# SerialTransfer 可靠数据传输

基于 SerialTransfer 库的可靠数据传输，支持 UART/I2C/SPI 三种通信方式，CRC 校验和 COBS 编码

## Library Info
- **Name**: @aily-project/lib-serial-transfer
- **Version**: 1.0.0

## Block Definitions

### UART (SerialTransfer)

| Block Type | Connection | Parameters (args0 order) | ABS Format | Generated Code |
|------------|------------|--------------------------|------------|----------------|
| `serial_transfer_init` | Statement | VAR(field_input), SERIAL(dropdown), BAUD(input_value) | `serial_transfer_init("myTransfer", Serial1, math_number(115200))` | `SerialTransfer myTransfer; Serial1.begin(115200); myTransfer.begin(Serial1);` |
| `serial_transfer_send_int` | Statement | VAR(field_variable), VALUE(input_value), PACKET_ID(input_value) | `serial_transfer_send_int($myTransfer, math_number(42), math_number(0))` | `int32_t val=42; myTransfer.txObj(val); myTransfer.sendData(size,0);` |
| `serial_transfer_send_float` | Statement | VAR(field_variable), VALUE(input_value), PACKET_ID(input_value) | `serial_transfer_send_float($myTransfer, math_number(3.14), math_number(0))` | `float val=3.14; myTransfer.txObj(val); myTransfer.sendData(size,0);` |
| `serial_transfer_send_string` | Statement | VAR(field_variable), VALUE(input_value), PACKET_ID(input_value) | `serial_transfer_send_string($myTransfer, text("hello"), math_number(0))` | `_st_sendString_myTransfer("hello", 0);` |
| `serial_transfer_available` | Value(Boolean) | VAR(field_variable) | `serial_transfer_available($myTransfer)` | `(myTransfer.available() > 0)` |
| `serial_transfer_receive_int` | Value(Number) | VAR(field_variable) | `serial_transfer_receive_int($myTransfer)` | `_st_recvInt_myTransfer()` |
| `serial_transfer_receive_float` | Value(Number) | VAR(field_variable) | `serial_transfer_receive_float($myTransfer)` | `_st_recvFloat_myTransfer()` |
| `serial_transfer_receive_string` | Value(String) | VAR(field_variable), LENGTH(input_value) | `serial_transfer_receive_string($myTransfer, math_number(32))` | `_st_recvString_myTransfer(32)` |
| `serial_transfer_status` | Value(Number) | VAR(field_variable) | `serial_transfer_status($myTransfer)` | `myTransfer.status` |
| `serial_transfer_current_packet_id` | Value(Number) | VAR(field_variable) | `serial_transfer_current_packet_id($myTransfer)` | `myTransfer.currentPacketID()` |

### I2C (I2CTransfer)

| Block Type | Connection | Parameters (args0 order) | ABS Format | Generated Code |
|------------|------------|--------------------------|------------|----------------|
| `i2c_transfer_init_master` | Statement | VAR(field_input), WIRE(dropdown) | `i2c_transfer_init_master("i2cTransfer", Wire)` | `I2CTransfer i2cTransfer; Wire.begin(); i2cTransfer.begin(Wire);` |
| `i2c_transfer_init_slave` | Statement | VAR(field_input), WIRE(dropdown), ADDRESS(input_value) | `i2c_transfer_init_slave("i2cTransfer", Wire, math_number(0))` | `I2CTransfer i2cTransfer; Wire.begin(0); i2cTransfer.begin(Wire);` |
| `i2c_transfer_send_int` | Statement | VAR(field_variable), VALUE(input_value), ADDRESS(input_value), PACKET_ID(input_value) | `i2c_transfer_send_int($i2cTransfer, math_number(42), math_number(0), math_number(0))` | `int32_t val=42; i2cTransfer.txObj(val); i2cTransfer.sendData(size,0,0);` |
| `i2c_transfer_send_float` | Statement | VAR(field_variable), VALUE(input_value), ADDRESS(input_value), PACKET_ID(input_value) | `i2c_transfer_send_float($i2cTransfer, math_number(3.14), math_number(0), math_number(0))` | `float val=3.14; i2cTransfer.txObj(val); i2cTransfer.sendData(size,0,0);` |
| `i2c_transfer_send_string` | Statement | VAR(field_variable), VALUE(input_value), ADDRESS(input_value), PACKET_ID(input_value) | `i2c_transfer_send_string($i2cTransfer, text("hello"), math_number(0), math_number(0))` | `_i2c_sendString_i2cTransfer("hello",0,0);` |
| `i2c_transfer_receive_int` | Value(Number) | VAR(field_variable) | `i2c_transfer_receive_int($i2cTransfer)` | `_i2c_recvInt_i2cTransfer()` |
| `i2c_transfer_receive_float` | Value(Number) | VAR(field_variable) | `i2c_transfer_receive_float($i2cTransfer)` | `_i2c_recvFloat_i2cTransfer()` |
| `i2c_transfer_receive_string` | Value(String) | VAR(field_variable), LENGTH(input_value) | `i2c_transfer_receive_string($i2cTransfer, math_number(32))` | `_i2c_recvString_i2cTransfer(32)` |
| `i2c_transfer_status` | Value(Number) | VAR(field_variable) | `i2c_transfer_status($i2cTransfer)` | `i2cTransfer.status` |

### SPI (SPITransfer)

| Block Type | Connection | Parameters (args0 order) | ABS Format | Generated Code |
|------------|------------|--------------------------|------------|----------------|
| `spi_transfer_init_master` | Statement | VAR(field_input), SS_PIN(input_value) | `spi_transfer_init_master("spiTransfer", math_number(10))` | `SPITransfer spiTransfer; SPI.begin(); spiTransfer.begin(SPI);` |
| `spi_transfer_init_slave` | Statement | VAR(field_input) | `spi_transfer_init_slave("spiTransfer")` | `SPITransfer spiTransfer; SPCR\|=bit(SPE); spiTransfer.begin(SPI);` |
| `spi_transfer_send_int` | Statement | VAR(field_variable), VALUE(input_value), PACKET_ID(input_value) | `spi_transfer_send_int($spiTransfer, math_number(42), math_number(0))` | `int32_t val=42; spiTransfer.txObj(val); spiTransfer.sendData(size,0);` |
| `spi_transfer_send_float` | Statement | VAR(field_variable), VALUE(input_value), PACKET_ID(input_value) | `spi_transfer_send_float($spiTransfer, math_number(3.14), math_number(0))` | `float val=3.14; spiTransfer.txObj(val); spiTransfer.sendData(size,0);` |
| `spi_transfer_send_string` | Statement | VAR(field_variable), VALUE(input_value), PACKET_ID(input_value) | `spi_transfer_send_string($spiTransfer, text("hello"), math_number(0))` | `_spi_sendString_spiTransfer("hello",0);` |
| `spi_transfer_available` | Value(Boolean) | VAR(field_variable) | `spi_transfer_available($spiTransfer)` | `_spi_newPacket_spiTransfer` |
| `spi_transfer_receive_int` | Value(Number) | VAR(field_variable) | `spi_transfer_receive_int($spiTransfer)` | `_spi_recvInt_spiTransfer()` |
| `spi_transfer_receive_float` | Value(Number) | VAR(field_variable) | `spi_transfer_receive_float($spiTransfer)` | `_spi_recvFloat_spiTransfer()` |
| `spi_transfer_receive_string` | Value(String) | VAR(field_variable), LENGTH(input_value) | `spi_transfer_receive_string($spiTransfer, math_number(32))` | `_spi_recvString_spiTransfer(32)` |
| `spi_transfer_status` | Value(Number) | VAR(field_variable) | `spi_transfer_status($spiTransfer)` | `spiTransfer.status` |

## Parameter Options

| Parameter | Values | Description |
|-----------|--------|-------------|
| SERIAL | Serial, Serial1, Serial2, Serial3 | UART串口选择 |
| WIRE | Wire, Wire1 | I2C接口选择 |

## ABS Examples

### 发送端 - 发送整数
```
arduino_setup()
    serial_transfer_init("myTransfer", Serial1, math_number(115200))
    serial_begin(Serial, 9600)

arduino_loop()
    serial_transfer_send_int(variables_get($myTransfer), math_number(42), math_number(0))
    time_delay(math_number(500))
```

### 接收端 - 接收整数
```
arduino_setup()
    serial_transfer_init("myTransfer", Serial1, math_number(115200))
    serial_begin(Serial, 9600)

arduino_loop()
    controls_if()
        @IF0: serial_transfer_available(variables_get($myTransfer))
        @DO0:
            serial_println(Serial, serial_transfer_receive_int(variables_get($myTransfer)))
```

### 发送字符串
```
arduino_setup()
    serial_transfer_init("myTransfer", Serial1, math_number(115200))

arduino_loop()
    serial_transfer_send_string(variables_get($myTransfer), text("hello"), math_number(0))
    time_delay(math_number(1000))
```

### 接收字符串
```
arduino_setup()
    serial_transfer_init("myTransfer", Serial1, math_number(115200))
    serial_begin(Serial, 9600)

arduino_loop()
    controls_if()
        @IF0: serial_transfer_available(variables_get($myTransfer))
        @DO0:
            serial_println(Serial, serial_transfer_receive_string(variables_get($myTransfer), math_number(32)))
```

### I2C 主机发送整数
```
arduino_setup()
    i2c_transfer_init_master("i2cTransfer", Wire)
    serial_begin(Serial, 115200)

arduino_loop()
    i2c_transfer_send_int(variables_get($i2cTransfer), math_number(42), math_number(0), math_number(0))
    time_delay(math_number(500))
```

### I2C 从机接收整数
```
arduino_setup()
    i2c_transfer_init_slave("i2cTransfer", Wire, math_number(0))
    serial_begin(Serial, 115200)

arduino_loop()
    serial_println(Serial, i2c_transfer_receive_int(variables_get($i2cTransfer)))
```

### SPI 主机发送整数
```
arduino_setup()
    spi_transfer_init_master("spiTransfer", math_number(10))
    serial_begin(Serial, 115200)

arduino_loop()
    spi_transfer_send_int(variables_get($spiTransfer), math_number(42), math_number(0))
    time_delay(math_number(500))
```

### SPI 从机接收整数
```
arduino_setup()
    spi_transfer_init_slave("spiTransfer")
    serial_begin(Serial, 115200)

arduino_loop()
    controls_if()
        @IF0: spi_transfer_available(variables_get($spiTransfer))
        @DO0:
            serial_println(Serial, spi_transfer_receive_int(variables_get($spiTransfer)))
```

## Notes

1. **Initialization**: `serial_transfer_init` 必须放在 `arduino_setup()` 中
2. **Variable**: `serial_transfer_init("varName", ...)` 会创建变量 `$varName`，后续使用 `variables_get($varName)` 引用
3. **接收流程**: 必须先用 `serial_transfer_available` 判断数据可用，再调用接收积木块
4. **数据类型匹配**: 发送端和接收端必须使用相同的数据类型（整数对整数、浮点对浮点）
5. **状态码**: status 值含义：2=新数据, 1=无数据, 0=CRC错误, -1=载荷错误, -2=停止字节错误, -3=超时
6. **包ID**: 发送和接收时可使用包ID（0-255）区分不同数据流
7. **I2C 从机**: 从机数据通过 `onReceive` 中断自动接收，无需手动调用 available
8. **I2C 目标地址**: I2C 主机发送数据时需指定从机地址
9. **SPI 从机**: 从机通过 SPI 中断自动接收，使用 `spi_transfer_available` 检查新数据
10. **SPI 主从模式**: SPI 主机用于发送数据，从机用于接收数据
