const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  // const options = getOptions();

  return j(file.source)
    .find(j.StringLiteral)
    .forEach(path => {
      const value = path.node.value;

      // if (/betterup/.test(value)) {
      //   console.log("Not Found");
      //   return;
      // }

      path.node.value = value.replace(/betterup/i, "BetterUp");
    })
    .toSource();
};

module.exports.type = 'js';
