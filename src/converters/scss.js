import _ from 'lodash';
import hexToHsl from '../utils/hexToHsl';

const generateComment = (description, isDeprecated) => {
    const comments = [];

    if (description) {
        comments.push(`// ${description}`);
    }

    if (isDeprecated) {
        comments.push('// @deprecated');
    }

    if (comments.length > 0) {
        return `\n${comments.join('\n')}`;
    }

    return '';
};

const toSCSS = (memo, { id, value, description, deprecated }) => {
    if (!id) {
        throw new Error('An `id` must be provided.');
    }

    if (!value) {
        throw new Error('A `value` must be provided.');
    }

    const formattedName = id;
    const formattedValue = _.isNumber(value) ? value : _.startsWith(value, '#') ? `${hexToHsl(value)}` : `${value}`;
    const comment = generateComment(description, deprecated);

    return `${memo}${comment}\n$${formattedName}: ${formattedValue};`;
};

export default toSCSS;