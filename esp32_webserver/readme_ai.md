# ESP32 Web Server

ESP32 Web服务器库，支持HTTP服务端、路由处理、请求响应、静态文件服务和身份认证

## Library Info
- **Name**: @aily-project/lib-esp32-webserver
- **Version**: 1.0.0

## Block Definitions

| Block Type | Connection | Parameters (args0 order) | ABS Format | Generated Code |
|------------|------------|--------------------------|------------|----------------|
| `esp32_webserver_create` | Statement | VAR(field_input), PORT(field_number) | `esp32_webserver_create("server", 80)` | `WebServer server(80);` |
| `esp32_webserver_begin` | Statement | VAR(field_variable) | `esp32_webserver_begin($server)` | `server.begin();` |
| `esp32_webserver_stop` | Statement | VAR(field_variable) | `esp32_webserver_stop($server)` | `server.stop();` |
| `esp32_webserver_handle_client` | Statement | VAR(field_variable) | `esp32_webserver_handle_client($server)` | `server.handleClient();` |
| `esp32_webserver_on` | Statement | VAR(field_variable), METHOD(dropdown), PATH(input_value), HANDLER(input_statement) | `esp32_webserver_on($server, HTTP_GET, text("/")) @HANDLER: ...` | `server.on("/", HTTP_GET, handler);` |
| `esp32_webserver_on_not_found` | Statement | VAR(field_variable), HANDLER(input_statement) | `esp32_webserver_on_not_found($server) @HANDLER: ...` | `server.onNotFound(handler);` |
| `esp32_webserver_serve_static` | Statement | VAR(field_variable), URI(input_value), FS(dropdown), PATH(input_value) | `esp32_webserver_serve_static($server, text("/"), SPIFFS, text("/"))` | `server.serveStatic("/", SPIFFS, "/");` |
| `esp32_webserver_send` | Statement | VAR(field_variable), CODE(input_value), TYPE(input_value), CONTENT(input_value) | `esp32_webserver_send($server, math_number(200), text("text/html"), text("<h1>Hi</h1>"))` | `server.send(200, "text/html", "<h1>Hi</h1>");` |
| `esp32_webserver_send_simple` | Statement | VAR(field_variable), CONTENT(input_value) | `esp32_webserver_send_simple($server, text("Hello"))` | `server.send(200, "text/plain", "Hello");` |
| `esp32_webserver_send_html` | Statement | VAR(field_variable), CONTENT(input_value) | `esp32_webserver_send_html($server, text("<h1>Hi</h1>"))` | `server.send(200, "text/html", "<h1>Hi</h1>");` |
| `esp32_webserver_send_json` | Statement | VAR(field_variable), CONTENT(input_value) | `esp32_webserver_send_json($server, text("{\"ok\":1}"))` | `server.send(200, "application/json", "{\"ok\":1}");` |
| `esp32_webserver_send_error` | Statement | VAR(field_variable), CODE(dropdown), MESSAGE(input_value) | `esp32_webserver_send_error($server, 404, text("Not Found"))` | `server.send(404, "text/plain", "Not Found");` |
| `esp32_webserver_send_header` | Statement | VAR(field_variable), NAME(input_value), VALUE(input_value) | `esp32_webserver_send_header($server, text("Cache-Control"), text("no-cache"))` | `server.sendHeader("Cache-Control", "no-cache");` |
| `esp32_webserver_uri` | Value(String) | VAR(field_variable) | `esp32_webserver_uri($server)` | `server.uri()` |
| `esp32_webserver_method` | Value(String) | VAR(field_variable) | `esp32_webserver_method($server)` | `httpMethodToString(server.method())` |
| `esp32_webserver_arg` | Value(String) | VAR(field_variable), NAME(input_value) | `esp32_webserver_arg($server, text("name"))` | `server.arg("name")` |
| `esp32_webserver_has_arg` | Value(Boolean) | VAR(field_variable), NAME(input_value) | `esp32_webserver_has_arg($server, text("name"))` | `server.hasArg("name")` |
| `esp32_webserver_args_count` | Value(Number) | VAR(field_variable) | `esp32_webserver_args_count($server)` | `server.args()` |
| `esp32_webserver_arg_by_index` | Value(String) | VAR(field_variable), INDEX(input_value) | `esp32_webserver_arg_by_index($server, math_number(0))` | `server.arg(0)` |
| `esp32_webserver_arg_name` | Value(String) | VAR(field_variable), INDEX(input_value) | `esp32_webserver_arg_name($server, math_number(0))` | `server.argName(0)` |
| `esp32_webserver_header` | Value(String) | VAR(field_variable), NAME(input_value) | `esp32_webserver_header($server, text("Content-Type"))` | `server.header("Content-Type")` |
| `esp32_webserver_has_header` | Value(Boolean) | VAR(field_variable), NAME(input_value) | `esp32_webserver_has_header($server, text("Content-Type"))` | `server.hasHeader("Content-Type")` |
| `esp32_webserver_collect_headers` | Statement | VAR(field_variable) | `esp32_webserver_collect_headers($server)` | `server.collectAllHeaders();` |
| `esp32_webserver_host_header` | Value(String) | VAR(field_variable) | `esp32_webserver_host_header($server)` | `server.hostHeader()` |
| `esp32_webserver_path_arg` | Value(String) | VAR(field_variable), INDEX(input_value) | `esp32_webserver_path_arg($server, math_number(0))` | `server.pathArg(0)` |
| `esp32_webserver_authenticate` | Value(Boolean) | VAR(field_variable), USERNAME(input_value), PASSWORD(input_value) | `esp32_webserver_authenticate($server, text("admin"), text("pass"))` | `server.authenticate("admin", "pass")` |
| `esp32_webserver_request_authentication` | Statement | VAR(field_variable), METHOD(dropdown) | `esp32_webserver_request_authentication($server, BASIC_AUTH)` | `server.requestAuthentication(BASIC_AUTH);` |
| `esp32_webserver_enable_cors` | Statement | VAR(field_variable), ENABLE(field_checkbox) | `esp32_webserver_enable_cors($server, TRUE)` | `server.enableCORS(true);` |
| `esp32_webserver_client_ip` | Value(String) | VAR(field_variable) | `esp32_webserver_client_ip($server)` | `server.client().remoteIP().toString()` |
| `esp32_webserver_content_length` | Value(Number) | VAR(field_variable) | `esp32_webserver_content_length($server)` | `server.clientContentLength()` |

## Parameter Options

| Parameter | Values | Description |
|-----------|--------|-------------|
| METHOD (on) | HTTP_ANY, HTTP_GET, HTTP_POST, HTTP_PUT, HTTP_DELETE, HTTP_PATCH, HTTP_OPTIONS | HTTP请求方法 |
| CODE (send_error) | 400, 401, 403, 404, 500, 503 | HTTP错误状态码 |
| METHOD (auth) | BASIC_AUTH, DIGEST_AUTH | HTTP认证方式 |
| FS (serve_static) | SPIFFS, LittleFS, SD | 文件系统类型 |

## ABS Examples

### Hello World Web Server
```
arduino_setup()
    esp32_webserver_create("server", 80)
    esp32_webserver_on($server, HTTP_GET, text("/"))
        @HANDLER:
            esp32_webserver_send_html($server, text("<h1>Hello World</h1>"))
    esp32_webserver_on_not_found($server)
        @HANDLER:
            esp32_webserver_send_error($server, 404, text("Not Found"))
    esp32_webserver_begin($server)

arduino_loop()
    esp32_webserver_handle_client($server)
```

### REST API with Parameters
```
arduino_setup()
    esp32_webserver_create("server", 80)
    esp32_webserver_enable_cors($server, TRUE)
    esp32_webserver_on($server, HTTP_GET, text("/api/data"))
        @HANDLER:
            controls_if()
                @IF0: esp32_webserver_has_arg($server, text("id"))
                @DO0:
                    esp32_webserver_send_json($server, text("{\"status\":\"ok\"}"))
                @ELSE:
                    esp32_webserver_send_error($server, 400, text("Missing id parameter"))
    esp32_webserver_begin($server)

arduino_loop()
    esp32_webserver_handle_client($server)
```

### Static File Server
```
arduino_setup()
    esp32_webserver_create("server", 80)
    esp32_webserver_serve_static($server, text("/"), SPIFFS, text("/www/"))
    esp32_webserver_begin($server)

arduino_loop()
    esp32_webserver_handle_client($server)
```

## Notes

1. **Variable Creation**: `esp32_webserver_create("varName", ...)` creates variable `$varName`; reference with `variables_get($varName)`
2. **Initialization**: Place `esp32_webserver_create`, `esp32_webserver_on`, and `esp32_webserver_begin` inside `arduino_setup()`
3. **Loop Required**: `esp32_webserver_handle_client` must be called in `arduino_loop()` for the server to process requests
4. **WiFi Required**: The ESP32 must be connected to WiFi before starting the web server
5. **Route Handler Blocks**: `esp32_webserver_on` and `esp32_webserver_on_not_found` contain an `@HANDLER:` statement body where response blocks (send, send_html, etc.) should be placed
6. **Parameter Order**: Follows `block.json` args0 order — fields and inputs may interleave
