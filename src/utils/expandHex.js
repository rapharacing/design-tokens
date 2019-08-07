const expandHex = hex => hex.split('').reduce((acc, value) => {
    return acc.concat([value, value])
}, []).join('');

export default expandHex;