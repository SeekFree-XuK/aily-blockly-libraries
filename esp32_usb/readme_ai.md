# ESP32 USB

ESP32原生USB HID功能库，支持键盘、鼠标、游戏手柄、媒体控制、系统控制和MIDI

## Library Info
- **Name**: @aily-project/lib-esp32-usb
- **Version**: 1.0.0

## Block Definitions

| Block Type | Connection | Parameters (args0 order) | ABS Format | Generated Code |
|------------|------------|--------------------------|------------|----------------|
| `esp32_usb_keyboard_begin` | Statement | (none) | `esp32_usb_keyboard_begin()` | (auto-init Keyboard) |
| `esp32_usb_keyboard_print` | Statement | TEXT(input_value) | `esp32_usb_keyboard_print(text("hello"))` | `Keyboard.print("hello");\n` |
| `esp32_usb_keyboard_println` | Statement | TEXT(input_value) | `esp32_usb_keyboard_println(text("hello"))` | `Keyboard.println("hello");\n` |
| `esp32_usb_keyboard_write` | Statement | KEY(input_value) | `esp32_usb_keyboard_write(esp32_usb_keyboard_special_key(KEY_RETURN))` | `Keyboard.write(KEY_RETURN);\n` |
| `esp32_usb_keyboard_press` | Statement | KEY(input_value) | `esp32_usb_keyboard_press(esp32_usb_keyboard_special_key(KEY_LEFT_CTRL))` | `Keyboard.press(KEY_LEFT_CTRL);\n` |
| `esp32_usb_keyboard_release` | Statement | KEY(input_value) | `esp32_usb_keyboard_release(esp32_usb_keyboard_special_key(KEY_LEFT_CTRL))` | `Keyboard.release(KEY_LEFT_CTRL);\n` |
| `esp32_usb_keyboard_release_all` | Statement | (none) | `esp32_usb_keyboard_release_all()` | `Keyboard.releaseAll();\n` |
| `esp32_usb_keyboard_special_key` | Value | KEY(dropdown) | `esp32_usb_keyboard_special_key(KEY_RETURN)` | `KEY_RETURN` |
| `esp32_usb_mouse_begin` | Statement | (none) | `esp32_usb_mouse_begin()` | (auto-init Mouse) |
| `esp32_usb_mouse_move` | Statement | X(input_value), Y(input_value), WHEEL(input_value) | `esp32_usb_mouse_move(math_number(10), math_number(0), math_number(0))` | `Mouse.move(10, 0, 0);\n` |
| `esp32_usb_mouse_click` | Statement | BUTTON(dropdown), ACTION(dropdown) | `esp32_usb_mouse_click(MOUSE_LEFT, click)` | `Mouse.click(MOUSE_LEFT);\n` |
| `esp32_usb_mouse_is_pressed` | Value | BUTTON(dropdown) | `esp32_usb_mouse_is_pressed(MOUSE_LEFT)` | `Mouse.isPressed(MOUSE_LEFT)` |
| `esp32_usb_gamepad_begin` | Statement | (none) | `esp32_usb_gamepad_begin()` | (auto-init Gamepad) |
| `esp32_usb_gamepad_press_button` | Statement | BUTTON(dropdown) | `esp32_usb_gamepad_press_button(BUTTON_A)` | `Gamepad.pressButton(BUTTON_A);\n` |
| `esp32_usb_gamepad_release_button` | Statement | BUTTON(dropdown) | `esp32_usb_gamepad_release_button(BUTTON_A)` | `Gamepad.releaseButton(BUTTON_A);\n` |
| `esp32_usb_gamepad_left_stick` | Statement | X(input_value), Y(input_value) | `esp32_usb_gamepad_left_stick(math_number(0), math_number(0))` | `Gamepad.leftStick(0, 0);\n` |
| `esp32_usb_gamepad_right_stick` | Statement | X(input_value), Y(input_value) | `esp32_usb_gamepad_right_stick(math_number(0), math_number(0))` | `Gamepad.rightStick(0, 0);\n` |
| `esp32_usb_gamepad_trigger` | Statement | SIDE(dropdown), VALUE(input_value) | `esp32_usb_gamepad_trigger(left, math_number(0))` | `Gamepad.leftTrigger(0);\n` |
| `esp32_usb_gamepad_hat` | Statement | DIRECTION(dropdown) | `esp32_usb_gamepad_hat(HAT_CENTER)` | `Gamepad.hat(HAT_CENTER);\n` |
| `esp32_usb_consumer_press` | Statement | KEY(dropdown) | `esp32_usb_consumer_press(CONSUMER_CONTROL_PLAY_PAUSE)` | `ConsumerControl.press(CONSUMER_CONTROL_PLAY_PAUSE);\n` |
| `esp32_usb_consumer_release` | Statement | (none) | `esp32_usb_consumer_release()` | `ConsumerControl.release();\n` |
| `esp32_usb_system_press` | Statement | ACTION(dropdown) | `esp32_usb_system_press(SYSTEM_CONTROL_POWER_OFF)` | `SystemControl.press(SYSTEM_CONTROL_POWER_OFF);\n` |
| `esp32_usb_system_release` | Statement | (none) | `esp32_usb_system_release()` | `SystemControl.release();\n` |
| `esp32_usb_midi_begin` | Statement | (none) | `esp32_usb_midi_begin()` | (auto-init MIDI) |
| `esp32_usb_midi_note_on` | Statement | NOTE(input_value), VELOCITY(input_value), CHANNEL(input_value) | `esp32_usb_midi_note_on(math_number(60), math_number(127), math_number(1))` | `MIDI.noteOn(60, 127, 1);\n` |
| `esp32_usb_midi_note_off` | Statement | NOTE(input_value), VELOCITY(input_value), CHANNEL(input_value) | `esp32_usb_midi_note_off(math_number(60), math_number(0), math_number(1))` | `MIDI.noteOff(60, 0, 1);\n` |
| `esp32_usb_midi_control_change` | Statement | CONTROL(input_value), VALUE(input_value), CHANNEL(input_value) | `esp32_usb_midi_control_change(math_number(0), math_number(0), math_number(1))` | `MIDI.controlChange(0, 0, 1);\n` |
| `esp32_usb_midi_program_change` | Statement | PROGRAM(input_value), CHANNEL(input_value) | `esp32_usb_midi_program_change(math_number(0), math_number(1))` | `MIDI.programChange(0, 1);\n` |
| `esp32_usb_midi_pitch_bend` | Statement | VALUE(input_value), CHANNEL(input_value) | `esp32_usb_midi_pitch_bend(math_number(0), math_number(1))` | `MIDI.pitchBend((int16_t)0, 1);\n` |

## Parameter Options

| Parameter | Values | Description |
|-----------|--------|-------------|
| KEY (keyboard) | KEY_RETURN, KEY_ESC, KEY_BACKSPACE, KEY_TAB, KEY_SPACE, KEY_LEFT_CTRL, KEY_LEFT_SHIFT, KEY_LEFT_ALT, KEY_LEFT_GUI, KEY_RIGHT_CTRL, KEY_RIGHT_SHIFT, KEY_RIGHT_ALT, KEY_RIGHT_GUI, KEY_UP_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW, KEY_RIGHT_ARROW, KEY_INSERT, KEY_DELETE, KEY_HOME, KEY_END, KEY_PAGE_UP, KEY_PAGE_DOWN, KEY_CAPS_LOCK, KEY_NUM_LOCK, KEY_F1~KEY_F12, KEY_PRINT_SCREEN, KEY_SCROLL_LOCK, KEY_PAUSE, KEY_MENU | 特殊按键 |
| BUTTON (mouse) | MOUSE_LEFT, MOUSE_RIGHT, MOUSE_MIDDLE | 鼠标按键 |
| ACTION (mouse) | click, press, release | 鼠标操作 |
| BUTTON (gamepad) | BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_X, BUTTON_Y, BUTTON_Z, BUTTON_TL, BUTTON_TR, BUTTON_TL2, BUTTON_TR2, BUTTON_SELECT, BUTTON_START, BUTTON_MODE, BUTTON_THUMBL, BUTTON_THUMBR | 手柄按键 |
| SIDE (trigger) | left, right | 左/右扳机 |
| DIRECTION (hat) | HAT_CENTER, HAT_UP, HAT_UP_RIGHT, HAT_RIGHT, HAT_DOWN_RIGHT, HAT_DOWN, HAT_DOWN_LEFT, HAT_LEFT, HAT_UP_LEFT | 十字键方向 |
| KEY (consumer) | CONSUMER_CONTROL_PLAY_PAUSE, CONSUMER_CONTROL_STOP, CONSUMER_CONTROL_SCAN_NEXT, CONSUMER_CONTROL_SCAN_PREVIOUS, CONSUMER_CONTROL_RECORD, CONSUMER_CONTROL_FAST_FORWARD, CONSUMER_CONTROL_REWIND, CONSUMER_CONTROL_VOLUME_INCREMENT, CONSUMER_CONTROL_VOLUME_DECREMENT, CONSUMER_CONTROL_MUTE, CONSUMER_CONTROL_BRIGHTNESS_INCREMENT, CONSUMER_CONTROL_BRIGHTNESS_DECREMENT, CONSUMER_CONTROL_POWER, CONSUMER_CONTROL_SLEEP, CONSUMER_CONTROL_CALCULATOR, CONSUMER_CONTROL_EMAIL_READER, CONSUMER_CONTROL_LOCAL_BROWSER, CONSUMER_CONTROL_SEARCH, CONSUMER_CONTROL_HOME, CONSUMER_CONTROL_BACK, CONSUMER_CONTROL_FORWARD, CONSUMER_CONTROL_REFRESH | 媒体控制键 |
| ACTION (system) | SYSTEM_CONTROL_POWER_OFF, SYSTEM_CONTROL_STANDBY, SYSTEM_CONTROL_WAKE_HOST | 系统控制 |

## ABS Examples

### USB Keyboard - Type and Send
```
arduino_setup()
    esp32_usb_keyboard_begin()

arduino_loop()
    esp32_usb_keyboard_println(text("Hello World"))
    time_delay(math_number(2000))
```

### USB Keyboard - Shortcut Ctrl+A
```
arduino_loop()
    esp32_usb_keyboard_press(esp32_usb_keyboard_special_key(KEY_LEFT_CTRL))
    esp32_usb_keyboard_write(text("a"))
    esp32_usb_keyboard_release_all()
```

### USB Mouse - Move and Click
```
arduino_loop()
    esp32_usb_mouse_move(math_number(10), math_number(0), math_number(0))
    esp32_usb_mouse_click(MOUSE_LEFT, click)
    time_delay(math_number(1000))
```

### USB Gamepad
```
arduino_loop()
    esp32_usb_gamepad_press_button(BUTTON_A)
    time_delay(math_number(100))
    esp32_usb_gamepad_release_button(BUTTON_A)
    esp32_usb_gamepad_left_stick(math_number(127), math_number(0))
```

### USB MIDI - Play Note
```
arduino_loop()
    esp32_usb_midi_note_on(math_number(60), math_number(127), math_number(1))
    time_delay(math_number(500))
    esp32_usb_midi_note_off(math_number(60), math_number(0), math_number(1))
    time_delay(math_number(500))
```

## Notes

1. **Auto-Initialization**: Each action block auto-initializes its device. Explicit begin blocks are optional.
2. **USB.begin() Order**: `USB.begin()` is placed in `addSetupEnd` to ensure it runs after all device `.begin()` calls.
3. **Board Compatibility**: Only ESP32-S2 and ESP32-S3 with native USB support.
4. **USB Mode**: Arduino IDE USB Mode must be set to "USB-OTG (TinyUSB)".
5. **Multiple Devices**: Keyboard, Mouse, Gamepad, etc. can be used simultaneously.
