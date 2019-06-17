const DataUtils = require("../lib/index");
const a = {v : 1};
const b = DataUtils.deepCopy(a);
b.v = 2;
console.log(a);
console.log(b);
