var badCode = require('./');
var code = badCode(10, 'console.log("worst code in the history of javascript")');
console.log(code);
eval(code);
