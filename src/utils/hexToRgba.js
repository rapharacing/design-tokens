const expandHex = require('./expandHex');

const hexToRgba = (hex, opacity = 100) => {
  hex = hex.replace('#', '');

  if (hex.length === 3) {
    hex = expandHex(hex);
  }

  return `rgba(
    ${parseInt(hex.substring(0, 2), 16)}, 
    ${parseInt(hex.substring(2, 4), 16)},
    ${parseInt(hex.substring(4, 6), 16)},
    ${opacity / 100}
  )`
};

module.exports = hexToRgba;