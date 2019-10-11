const DataUtils = require("../dist/DataUtils.umd");

const testArray = [
  { id: 1, parentId: null, label: "yyy" },
  { id: 2, parentId: 1, label: "aaa" },
  { id: 3, parentId: 1, label: "bbb" },
  { id: 4, parentId: 2, label: "ccc" },
  { id: 5, parentId: null, label: "ddd" },
];

console.log(
  JSON.stringify(
    DataUtils.flatToTree(testArray, null, {
      pidName: "parentId",
      idName: "id",
    }),
  ),
);

/*
[
  {
    "id": 1,
    "parentId": null,
    "label": "yyy",
    "children": [
      {
        "id": 2,
        "parentId": 1,
        "label": "aaa",
        "children": [
          {
            "id": 4,
            "parentId": 2,
            "label": "ccc",
            "children": []
          }
        ]
      },
      {
        "id": 3,
        "parentId": 1,
        "label": "bbb",
        "children": []
      }
    ]
  },
  {
    "id": 5,
    "parentId": null,
    "label": "ddd",
    "children": []
  }
]
 */
