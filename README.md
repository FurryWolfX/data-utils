# 实用数据处理函数

## 模块化环境下使用：

```bash
npm install @wolfx/data-utils
```

```javascript
const DataUtils = require("@wolfx/data-utils");
```

## 标签引入直接使用：

需要引用预编译的版本，在dist目录下。

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

## Functions

### 数组分组

```javascript
console.log(DataUtils.arrayToGroup([1, 2, 3, 4, 5, 6], 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
```

### 金额格式

```javascript
console.log(DataUtils.thousandNumFormat(10000)); // 10,000.00
```

### queryString转对象

```javascript
console.log(DataUtils.queryStringToObject("?a=1&b=2")); // { a: '1', b: '2' }
```

### 生成GUID

```javascript
console.log(DataUtils.queryStringToObject("?a=1&b=2")); // { a: '1', b: '2' }
```

### 字符长度统计（中文+2）

```javascript
console.log(DataUtils.getStringLength("1个")); // 3
```

### 树形数据转换，将扁平结构的数据转换成树型结构

```javascript
const testArray = [
  {id:1, label: "yyy"},
  {id:2, parentId: 1, label: "aaa"},
  {id:3, parentId: 1, label: "bbb"},
  {id:4, parentId: 2, label: "ccc"},
  {id:5, label: "ddd"},
];
console.log(DataUtils.treeDataTranslate(testArray));
```

```json
[
  {
    "id": 1,
    "label": "yyy",
    "children": [
      {
        "id": 2,
        "parentId": 1,
        "label": "aaa",
        "_level": 2,
        "children": [
          {
            "id": 4,
            "parentId": 2,
            "label": "ccc",
            "_level": 3
          }
        ]
      },
      {
        "id": 3,
        "parentId": 1,
        "label": "bbb",
        "_level": 2
      }
    ],
    "_level": 1
  },
  {
    "id": 5,
    "label": "ddd"
  }
]
```
