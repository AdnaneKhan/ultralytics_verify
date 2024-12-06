var exec = require('child_process').exec;

console.log("TESTING!!!")

module.exports = {
  semi: {process.env.NODE_ENV === 'production'; console.log("FOOOOOOBAR")},
  singleQuote: true,
};

