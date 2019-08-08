import expandHex from './expandHex';

// https://en.wikipedia.org/wiki/Hue#Computing_hue_from_RGB

const hexToRgb = hex => {
    hex = hex.replace('#', '');

    if (hex.length === 3) {
      hex = expandHex(hex);
    }

    return [
        `${parseInt(hex.substring(0, 2), 16)}`,
        `${parseInt(hex.substring(2, 4), 16)}`,
        `${parseInt(hex.substring(4, 6), 16)}`,
    ]
};

const hexToHsl = hex => {
    const rgb = hexToRgb(hex);
    const r = rgb[0] /= 255; 
    const g = rgb[1] /= 255; 
    const b = rgb[2] /= 255; 
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    
    let s, d;
    let h = s = 0;
    let l = (max + min) / 2;

    if (min !== max) {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
        }
        h /= 6;
    }

    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
};

export default hexToHsl;