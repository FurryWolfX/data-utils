# 实用数据处理函数

模块化环境下使用：

```javascript
const DataUtils = require("@wolfx/data-utils");

// 数组分组
console.log(DataUtils.arrayToGroup([1, 2, 3, 4, 5, 6], 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
// 金额格式
console.log(DataUtils.thousandNumFormat(10000)); // 10,000.00
// queryString转对象
console.log(DataUtils.queryStringToObject("?a=1&b=2")); // { a: '1', b: '2' }
// 生成GUID
console.log(DataUtils.getGUID()); // 4e97b561-a5a9-49da-81d9-a2203ccf62f6
// 字符长度，中文算2（原生中文算1）
console.log(DataUtils.getStringLength("1个")); // 3
```

直接使用：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <script src="../dist/DataUtils.js"></script>
    <script>
      console.log(DataUtils.arrayToGroup([1, 2, 3, 4, 5, 6], 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
    </script>
  </head>
  <body></body>
</html>
```
