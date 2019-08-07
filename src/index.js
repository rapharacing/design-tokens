const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const _ = require('lodash');

const convertToCommonJS = require('./converters/common');
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
        scss: []
    };

    _.forEach(files, file => {
        const json = JSON.parse(fs.readFileSync(file).toString());

        const cjs = _.trim(_.reduce(json.tokens, convertToCommonJS, ''));
        const scss = _.trim(_.reduce(json.tokens, convertToScss, ''));

        contents.cjs.push(cjs);
        contents.scss.push(scss);
    });

    return({
        cjs: contents.cjs.join('\n'),
        scss: contents.scss.join('\n')
    });
};

const saveDistributionFiles = (tokens, outputDirectory = path.resolve(__dirname, config.outputDirectory)) => {
    fs.outputFileSync(`${outputDirectory}/index.js`, tokens.cjs);
    fs.outputFileSync(`${outputDirectory}/_index.scss`, tokens.scss);
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