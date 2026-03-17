# ESP32 Web Server

ESP32 Web服务器库，用于创建HTTP服务器，支持路由处理、请求响应和身份认证。

## Library Info

| Field | Value |
|-------|-------|
| Package | @aily-project/lib-esp32-webserver |
| Version | 1.0.0 |
| Author | Espressif Systems |
| Source | https://github.com/espressif/arduino-esp32/tree/master/libraries/WebServer |
| License | LGPL-2.1 |

## Supported Boards

ESP32全系列（ESP32、ESP32-S2、ESP32-S3、ESP32-C3、ESP32-C6、ESP32-H2）

## Description

基于ESP32 Arduino核心内置的WebServer库，提供轻量级HTTP/1.1服务器功能。支持GET/POST等多种HTTP方法路由注册、请求参数与请求头解析、多种格式响应发送（文本/HTML/JSON）、HTTP基本认证与摘要认证、CORS跨域配置、静态文件服务（SPIFFS/LittleFS/SD）等功能。

## Quick Start

1. 使用WiFi库先连接网络
2. 创建WebServer对象并注册路由
3. 在`setup()`中启动服务器，在`loop()`中调用`handleClient()`
  - 其他块使用 `field_variable` 引用已创建的WebServer对象
  - `handleClient()` 需要在loop中持续调用

## 使用示例

### 创建Web服务器
```json
{
  "type": "esp32_webserver_create",
  "id": "webserver_init",
  "fields": {
    "VAR": "server",
    "PORT": 80
  }
}
```

### 注册路由处理
```json
{
  "type": "esp32_webserver_on",
  "id": "route_handler",
  "fields": {
    "VAR": {"id": "server_id", "name": "server", "type": "WebServer"},
    "METHOD": "HTTP_GET"
  },
  "inputs": {
    "PATH": {
      "shadow": {
        "type": "text",
        "fields": {"TEXT": "/"}
      }
    },
    "HANDLER": {
      "block": {
        "type": "esp32_webserver_send_html",
        "fields": {"VAR": {"id": "server_id", "name": "server", "type": "WebServer"}},
        "inputs": {
          "CONTENT": {
            "shadow": {
              "type": "text",
              "fields": {"TEXT": "<h1>Hello World</h1>"}
            }
          }
        }
      }
    }
  }
}
```

### 完整服务器示例
```json
{
  "type": "arduino_setup",
  "id": "arduino_setup_id0",
  "inputs": {
    "ARDUINO_SETUP": {
      "block": {
        "type": "esp32_webserver_create",
        "id": "ws_create",
        "fields": {"VAR": "server", "PORT": 80},
        "next": {
          "block": {
            "type": "esp32_webserver_on",
            "fields": {"VAR": {"id": "srv"}, "METHOD": "HTTP_GET"},
            "inputs": {
              "PATH": {"shadow": {"type": "text", "fields": {"TEXT": "/"}}},
              "HANDLER": {
                "block": {
                  "type": "esp32_webserver_send_simple",
                  "fields": {"VAR": {"id": "srv"}},
                  "inputs": {
                    "CONTENT": {"shadow": {"type": "text", "fields": {"TEXT": "Hello ESP32!"}}}
                  }
                }
              }
            },
            "next": {
              "block": {
                "type": "esp32_webserver_begin",
                "fields": {"VAR": {"id": "srv"}}
              }
            }
          }
        }
      }
    },
    "ARDUINO_LOOP": {
      "block": {
        "type": "esp32_webserver_handle_client",
        "fields": {"VAR": {"id": "srv"}}
      }
    }
  }
}
```

## 重要规则

1. **必须遵守**: 每个块ID必须唯一
2. **变量引用**: 方法调用块必须引用已创建的WebServer变量
3. **持续处理**: `handle_client`块必须放在loop中持续调用
4. **路由注册**: 路由注册（`on`块）应在setup中、`begin`之前完成

## HTTP方法选项
- `HTTP_ANY`: 任意方法
- `HTTP_GET`: GET请求
- `HTTP_POST`: POST请求
- `HTTP_PUT`: PUT请求
- `HTTP_DELETE`: DELETE请求
- `HTTP_PATCH`: PATCH请求
- `HTTP_OPTIONS`: OPTIONS请求

## 常见错误状态码
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal Server Error
- `503`: Service Unavailable
