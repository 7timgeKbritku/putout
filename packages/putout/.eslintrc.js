'use strict';

module.exports = {
    extends: [
        'plugin:putout/recommended',
        'plugin:node/recommended',
    ],
    plugins: [
        'node',
        'putout',
    ],
    overrides: [{
        files: ['bin/**/*.js'],
        rules: {
            'no-process-exit': 0,
            'no-console': 0,
        },
    }],
};

