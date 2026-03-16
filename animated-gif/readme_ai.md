# GIF Animation Player

Play GIF animations on TFT displays from memory (FLASH) or SD card using the AnimatedGIF library.

## Library Info
- **Name**: @aily-project/lib-animated-gif
- **Version**: 1.0.0

## Block Definitions

| Block Type | Connection | Parameters (args0 order) | ABS Format | Generated Code |
|------------|------------|--------------------------|------------|----------------|
| `gif_init` | Statement | VAR(field_input) | `gif_init("gif")` | `AnimatedGIF gif; gif.begin(GIF_PALETTE_RGB565_LE);` |
| `gif_open_memory` | Statement | VAR(field_variable), HEADER(field_input), ARRAY(field_input), X(input_value), Y(input_value) | `gif_open_memory($gif, "badgers.h", "ucBadgers", math_number(0), math_number(0))` | `gif.open((uint8_t *)ucBadgers, sizeof(ucBadgers), _GIFDraw);` |
| `gif_open_sd` | Statement | VAR(field_variable), FILENAME(input_value), X(input_value), Y(input_value) | `gif_open_sd($gif, text("/anim.gif"), math_number(0), math_number(0))` | `gif.open("/anim.gif", _GIFOpenFile, ...);` |
| `gif_play_frame` | Value(Boolean) | VAR(field_variable), SYNC(dropdown) | `gif_play_frame($gif, true)` | `gif.playFrame(true, NULL)` |
| `gif_play_all` | Statement | VAR(field_variable) | `gif_play_all($gif)` | `while (gif.playFrame(true, NULL)) {}` |
| `gif_close` | Statement | VAR(field_variable) | `gif_close($gif)` | `gif.close();` |
| `gif_get_width` | Value(Number) | VAR(field_variable) | `gif_get_width($gif)` | `gif.getCanvasWidth()` |
| `gif_get_height` | Value(Number) | VAR(field_variable) | `gif_get_height($gif)` | `gif.getCanvasHeight()` |

## Parameter Options

| Parameter | Values | Description |
|-----------|--------|-------------|
| SYNC | true, false | Whether to wait for frame delay before returning |

## ABS Examples

### Play GIF from memory (FLASH)
```
arduino_setup()
    tft_init(ST7789)
    gif_init("gif")

arduino_loop()
    gif_open_memory($gif, "badgers.h", "ucBadgers", math_number(0), math_number(0))
    gif_play_all($gif)
    gif_close($gif)
```

### Play GIF from SD card
```
arduino_setup()
    tft_init(ST7789)
    gif_init("gif")

arduino_loop()
    gif_open_sd($gif, text("/animation.gif"), math_number(0), math_number(0))
    gif_play_all($gif)
    gif_close($gif)
```

### Play frame by frame with custom logic
```
arduino_setup()
    tft_init(ST7789)
    gif_init("gif")
    gif_open_memory($gif, "image.h", "ucImage", math_number(10), math_number(20))

arduino_loop()
    controls_if()
        @IF0: gif_play_frame($gif, true)
        @DO0:
            serial_println(Serial, text("Playing..."))
        @ELSE:
            gif_close($gif)
            gif_open_memory($gif, "image.h", "ucImage", math_number(10), math_number(20))
```

## Notes

1. **Requires TFT display**: This library must be used together with the Adafruit GFX TFT display library (`tft` object must exist)
2. **Memory GIF data**: For `gif_open_memory`, the GIF data must be stored in a `.h` header file as a `const uint8_t` array
3. **SD card**: For `gif_open_sd`, the SD card must be properly wired and the GIF file must exist on the card
4. **Variable**: `gif_init("varName")` creates variable `$varName`; reference it later with `variables_get($varName)`
5. **Single GIF at a time**: The display offset (`_gif_xOffset`, `_gif_yOffset`) is shared globally, so only one GIF should be displayed at a time
