const expandHex = hex => hex.split('').reduce((acc, value) => {
    return acc.concat([value, value])
}, []).join('');

module.exports = expandHex;