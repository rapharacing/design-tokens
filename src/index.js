const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const _ = require('lodash');

const convertToCjs = require('./converters/cjs');
const convertToEs = require('./converters/es');
const convertToScss = require('./converters/scss');

const config = {
    outputDirectory: '../dist',
    tokenPath: path.resolve(__dirname, './tokens/*.json')
};

const clean = (outputDirectory = config.outputDirectory) => {
    fs.removeSync(outputDirectory)
};

const processTokens = async (tokenPath = config.tokenPath) => {
    const files = glob.sync(tokenPath);

    const contents = {
        cjs: [],
        es: [],
        scss: [],
    };

    _.forEach(files, file => {
        const json = JSON.parse(fs.readFileSync(file).toString());

        const cjs = _.trim(_.reduce(json.tokens, convertToCjs, ''));
        const es = _.trim(_.reduce(json.tokens, convertToEs, ''));
        const scss = _.trim(_.reduce(json.tokens, convertToScss, ''));

        contents.cjs.push(cjs);
        contents.es.push(es);
        contents.scss.push(scss);
    });

    return({
        cjs: contents.cjs.join('\n'),
        es: contents.es.join('\n'),
        scss: contents.scss.join('\n')
    });
};

const saveDistributionFiles = (tokens, outputDirectory = path.resolve(__dirname, config.outputDirectory)) => {
    fs.outputFileSync(`${outputDirectory}/javascript/index.js`, tokens.cjs);
    fs.outputFileSync(`${outputDirectory}/javascript/index.es.js`, tokens.es);
    fs.outputFileSync(`${outputDirectory}/scss/_index.scss`, tokens.scss);
};

createTokens = async (tokenPath = config.tokenPath) => {
    await processTokens(tokenPath)
        .then(tokens => {
            saveDistributionFiles(tokens);
        })
        .catch(error => {
            console.error('Error: ', error);
        }) 
}

clean();
createTokens();

module.exports = {
    clean,
    createTokens
};