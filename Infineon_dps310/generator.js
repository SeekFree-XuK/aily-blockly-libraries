/**
 * DPS310 气压传感器代码生成器
 * 用于读取高精度温度和气压数据，并计算海拔高度
 */

Arduino.forBlock['dps310_init'] = function(block, generator) {
  var address = block.getFieldValue('ADDR');
  var wire = block.getFieldValue('WIRE') || 'Wire';

  generator.addLibrary('DPS310_INCLUDE', '#include <Dps310.h>');
  generator.addLibrary('WIRE_INCLUDE', '#include <Wire.h>');
  generator.addObject('DPS310_OBJECT', 'Dps310 dps310_dev = Dps310();');
  generator.addSetupBegin('WIRE_BEGIN', wire + '.begin();');
  generator.addSetupBegin('DPS310_BEGIN', 'dps310_dev.begin(' + wire + ', ' + address + ');');

  return '';
};

Arduino.forBlock['dps310_correct_temp'] = function(block, generator) {
  return 'dps310_dev.correctTemp();\n';
};

Arduino.forBlock['dps310_read_temperature'] = function(block, generator) {
  var osr = block.getFieldValue('OSR');

  generator.addFunction('DPS310_READ_TEMP', 
    'float _dps310ReadTemp(uint8_t osr) {\n' +
    '  float result = 0;\n' +
    '  dps310_dev.measureTempOnce(result, osr);\n' +
    '  return result;\n' +
    '}'
  );

  return ['_dps310ReadTemp(' + osr + ')', generator.ORDER_FUNCTION_CALL];
};

Arduino.forBlock['dps310_read_pressure'] = function(block, generator) {
  var osr = block.getFieldValue('OSR');

  generator.addFunction('DPS310_READ_PRS',
    'float _dps310ReadPressure(uint8_t osr) {\n' +
    '  float result = 0;\n' +
    '  dps310_dev.measurePressureOnce(result, osr);\n' +
    '  return result;\n' +
    '}'
  );

  return ['_dps310ReadPressure(' + osr + ')', generator.ORDER_FUNCTION_CALL];
};

Arduino.forBlock['dps310_read_altitude'] = function(block, generator) {
  var seaPressure = block.getFieldValue('SEAPRESSURE');

  generator.addFunction('DPS310_READ_PRS',
    'float _dps310ReadPressure(uint8_t osr) {\n' +
    '  float result = 0;\n' +
    '  dps310_dev.measurePressureOnce(result, osr);\n' +
    '  return result;\n' +
    '}'
  );

  generator.addFunction('DPS310_CALC_ALT',
    'float _dps310CalcAltitude(float seaLevelPa) {\n' +
    '  float pressure = _dps310ReadPressure(7);\n' +
    '  return 44330.0 * (1.0 - pow(pressure / (seaLevelPa * 100.0), 0.1903));\n' +
    '}'
  );

  return ['_dps310CalcAltitude(' + seaPressure + ')', generator.ORDER_FUNCTION_CALL];
};
