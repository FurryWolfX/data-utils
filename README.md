# 实用数据处理函数

```javascript
const DataUtils = require("@wolfx/data-utils");

console.log(DataUtils.arrayToGroup([1,2,3,4,5,6], 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
console.log(DataUtils.thousandNumFormat(10000)); // 10,000.00
console.log(DataUtils.queryStringToObject("?a=1&b=2")); // { a: '1', b: '2' }
```