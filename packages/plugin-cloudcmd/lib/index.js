'use strict';

const getRule = (a) => ({
    [a]: require(`./${a}`),
});

module.exports.rules = {
    ...getRule('convert-io-mv-to-io-move'),
    ...getRule('convert-io-cp-to-io-copy'),
};

