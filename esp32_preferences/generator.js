'use strict';

// Preferences 使用全局对象模式
function ensurePreferencesLib(generator) {
  generator.addLibrary('Preferences', '#include <Preferences.h>');
  generator.addObject('preferences_obj', 'Preferences preferences;');
}

Arduino.forBlock['esp32_preferences_begin'] = function(block, generator) {
  const namespace = generator.valueToCode(block, 'NAMESPACE', generator.ORDER_ATOMIC) || '"storage"';
  const readOnly = block.getFieldValue('READONLY') || 'false';
  ensurePreferencesLib(generator);
  return 'preferences.begin(' + namespace + ', ' + readOnly + ');\n';
};

Arduino.forBlock['esp32_preferences_end'] = function(block, generator) {
  ensurePreferencesLib(generator);
  return 'preferences.end();\n';
};

Arduino.forBlock['esp32_preferences_clear'] = function(block, generator) {
  ensurePreferencesLib(generator);
  return 'preferences.clear();\n';
};

Arduino.forBlock['esp32_preferences_remove'] = function(block, generator) {
  const key = generator.valueToCode(block, 'KEY', generator.ORDER_ATOMIC) || '"key"';
  ensurePreferencesLib(generator);
  return 'preferences.remove(' + key + ');\n';
};

Arduino.forBlock['esp32_preferences_put_int'] = function(block, generator) {
  const key = generator.valueToCode(block, 'KEY', generator.ORDER_ATOMIC) || '"key"';
  const value = generator.valueToCode(block, 'VALUE', generator.ORDER_ATOMIC) || '0';
  ensurePreferencesLib(generator);
  return 'preferences.putInt(' + key + ', ' + value + ');\n';
};

Arduino.forBlock['esp32_preferences_put_float'] = function(block, generator) {
  const key = generator.valueToCode(block, 'KEY', generator.ORDER_ATOMIC) || '"key"';
  const value = generator.valueToCode(block, 'VALUE', generator.ORDER_ATOMIC) || '0.0';
  ensurePreferencesLib(generator);
  return 'preferences.putFloat(' + key + ', ' + value + ');\n';
};

Arduino.forBlock['esp32_preferences_put_bool'] = function(block, generator) {
  const key = generator.valueToCode(block, 'KEY', generator.ORDER_ATOMIC) || '"key"';
  const value = generator.valueToCode(block, 'VALUE', generator.ORDER_ATOMIC) || 'true';
  ensurePreferencesLib(generator);
  return 'preferences.putBool(' + key + ', ' + value + ');\n';
};

Arduino.forBlock['esp32_preferences_put_string'] = function(block, generator) {
  const key = generator.valueToCode(block, 'KEY', generator.ORDER_ATOMIC) || '"key"';
  const value = generator.valueToCode(block, 'VALUE', generator.ORDER_ATOMIC) || '""';
  ensurePreferencesLib(generator);
  return 'preferences.putString(' + key + ', ' + value + ');\n';
};

Arduino.forBlock['esp32_preferences_get_int'] = function(block, generator) {
  const key = generator.valueToCode(block, 'KEY', generator.ORDER_ATOMIC) || '"key"';
  const defaultVal = generator.valueToCode(block, 'DEFAULT', generator.ORDER_ATOMIC) || '0';
  ensurePreferencesLib(generator);
  return ['preferences.getInt(' + key + ', ' + defaultVal + ')', generator.ORDER_FUNCTION_CALL];
};

Arduino.forBlock['esp32_preferences_get_float'] = function(block, generator) {
  const key = generator.valueToCode(block, 'KEY', generator.ORDER_ATOMIC) || '"key"';
  const defaultVal = generator.valueToCode(block, 'DEFAULT', generator.ORDER_ATOMIC) || '0.0';
  ensurePreferencesLib(generator);
  return ['preferences.getFloat(' + key + ', ' + defaultVal + ')', generator.ORDER_FUNCTION_CALL];
};

Arduino.forBlock['esp32_preferences_get_bool'] = function(block, generator) {
  const key = generator.valueToCode(block, 'KEY', generator.ORDER_ATOMIC) || '"key"';
  const defaultVal = generator.valueToCode(block, 'DEFAULT', generator.ORDER_ATOMIC) || 'false';
  ensurePreferencesLib(generator);
  return ['preferences.getBool(' + key + ', ' + defaultVal + ')', generator.ORDER_FUNCTION_CALL];
};

Arduino.forBlock['esp32_preferences_get_string'] = function(block, generator) {
  const key = generator.valueToCode(block, 'KEY', generator.ORDER_ATOMIC) || '"key"';
  const defaultVal = generator.valueToCode(block, 'DEFAULT', generator.ORDER_ATOMIC) || '""';
  ensurePreferencesLib(generator);
  return ['preferences.getString(' + key + ', ' + defaultVal + ')', generator.ORDER_FUNCTION_CALL];
};

Arduino.forBlock['esp32_preferences_is_key'] = function(block, generator) {
  const key = generator.valueToCode(block, 'KEY', generator.ORDER_ATOMIC) || '"key"';
  ensurePreferencesLib(generator);
  return ['preferences.isKey(' + key + ')', generator.ORDER_FUNCTION_CALL];
};

Arduino.forBlock['esp32_preferences_free_entries'] = function(block, generator) {
  ensurePreferencesLib(generator);
  return ['preferences.freeEntries()', generator.ORDER_FUNCTION_CALL];
};
