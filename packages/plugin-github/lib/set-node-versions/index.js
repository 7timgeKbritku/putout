'use strict';

const {
    operator,
    template,
} = require('putout');

const deepEqual = require('fast-deep-equal');
const {traverseProperty} = require('../traverse-property');

const {
    replaceWith,
    getTemplateValues,
} = operator;

const defaultVersions = [
    '16.x',
    '18.x',
    '20.x',
];

const {
    parse,
    stringify,
} = JSON;

module.exports.report = () => 'Latest version of node is missing';

module.exports.fix = (path, {options}) => {
    const {versions = defaultVersions} = options;
    const nodeVersionsNode = template.ast(stringify(versions));
    
    replaceWith(path, nodeVersionsNode);
};

module.exports.traverse = ({push, options}) => ({
    '__putout_processor_json(__a)'(path) {
        const {versions: nodeVersions = defaultVersions} = options;
        const {__a} = getTemplateValues(path, '__putout_processor_json(__a)');
        
        for (const nodeVersionPath of traverseProperty(__a, 'node-version')) {
            const valueStr = nodeVersionPath
                .get('value')
                .toString();
            
            const versions = parse(valueStr);
            
            if (versions === '${{ matrix.node-version }}')
                continue;
            
            if (deepEqual(versions, nodeVersions))
                continue;
            
            push(nodeVersionPath.get('value'));
        }
    },
});
