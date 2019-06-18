# 实用数据处理函数

## 使用方式

### 模块化环境下使用：

```bash
npm install @wolfx/data-utils
```

```javascript
const DataUtils = require("@wolfx/data-utils");
```

### 标签引入直接使用：

需要引用预编译的版本，在 dist 目录下。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <script src="../dist/DataUtils.umd.js"></script>
    <script>
      console.log(DataUtils.arrayToGroup([1, 2, 3, 4, 5, 6], 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
    </script>
  </head>
  <body></body>
</html>
```

## Functions

### 数组分组

将数组分组，返回二维数组。

```javascript
console.log(DataUtils.arrayToGroup([1, 2, 3, 4, 5, 6], 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
```

### 金额格式

输出逗号分隔的金额格式。

```javascript
console.log(DataUtils.thousandNumFormat(10000)); // 10,000.00
```

### 比较版本号

`compareVersion(v1, v2)`

比较版本号，如果 `v1>v2` 则返回 `true`，否则 `false`

```javascript
console.log(DataUtils.compareVersion("3.0.11", "3.0.12")); // false
```

### 生成 GUID

输出符合规范的GUID。

```javascript
console.log(DataUtils.getGUID()); // 4e97b561-a5a9-49da-81d9-a2203ccf62f6
```

### 字符长度统计（中文+2）

解决中文字符长度统计问题。

```javascript
console.log(DataUtils.getStringLength("1个")); // 3
```

### 对象深拷贝

```javascript
const a = { v: 1 };
const b = DataUtils.deepCopy(a);
b.v = 2;
console.log(a);
console.log(b);
```

### 树形数据转换，将扁平结构的数据转换成树型结构

扁平结构转树结构。

```javascript
const testArray = [
  { id: 1, label: "yyy" },
  { id: 2, parentId: 1, label: "aaa" },
  { id: 3, parentId: 1, label: "bbb" },
  { id: 4, parentId: 2, label: "ccc" },
  { id: 5, label: "ddd" },
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
