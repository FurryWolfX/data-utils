const DataUtils = require("../dist/DataUtils.umd");

console.log(DataUtils.arrayToGroup([1, 2, 3, 4, 5, 6], 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
console.log(DataUtils.thousandNumFormat(10000)); // 10,000.00
console.log(DataUtils.queryStringToObject("?a=1&b=2")); // { a: '1', b: '2' }
console.log(DataUtils.getGUID()); // 4e97b561-a5a9-49da-81d9-a2203ccf62f6
console.log(DataUtils.getStringLength("1个")); // 3
console.log(DataUtils.compareVersion("3.0.11", "3.0.12")); // false
