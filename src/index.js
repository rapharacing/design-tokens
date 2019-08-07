const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const _ = require('lodash');

const convertToCommonJS = require('./converters/common');

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
        cjs: []
    };

    _.forEach(files, file => {
        const json = JSON.parse(fs.readFileSync(file).toString());

        const cjs = _.trim(_.reduce(json.tokens, convertToCommonJS, ''));

        contents.cjs.push(cjs);
    });

    return({
        cjs: contents.cjs.join('\n')
    });
};

const saveDistributionFiles = (tokens, outputDirectory = path.resolve(__dirname, config.outputDirectory)) => {
    fs.outputFileSync(`${outputDirectory}/index.js`, tokens.cjs);
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