const DataUtils = require("../lib/index");

const testArray = [
  { id: 1, label: "yyy" },
  { id: 2, parentId: 1, label: "aaa" },
  { id: 3, parentId: 1, label: "bbb" },
  { id: 4, parentId: 2, label: "ccc" },
  { id: 5, label: "ddd" },
];
console.log(JSON.stringify(DataUtils.treeDataTranslate(testArray)));

/*
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
 */
