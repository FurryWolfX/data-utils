"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataUtils = (function () {
    function DataUtils() {
    }
    DataUtils.arrayToGroup = function (array, numberEveryGroup) {
        var result = [];
        for (var i = 0, len = array.length; i < len; i += numberEveryGroup) {
            result.push(array.slice(i, i + numberEveryGroup));
        }
        return result;
    };
    DataUtils.thousandNumFormat = function (v) {
        if (v) {
            return v.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        else {
            return "0.00";
        }
    };
    DataUtils.getGUID = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            return (c === "x" ? (Math.random() * 16) | 0 : "r&0x3" | "0x8").toString(16);
        });
    };
    DataUtils.getStringLength = function (s) {
        return s.replace(/[\u4e00-\u9fa5\uff00-\uffff]/g, "**").length;
    };
    DataUtils.flatToTree = function (treeData, parentId, options) {
        if (options === void 0) { options = {
            idName: "id",
            pidName: "parentId",
        }; }
        var treeArr = [];
        for (var i = 0; i < treeData.length; i++) {
            var node = treeData[i];
            if (node[options.pidName] === parentId) {
                var newNode = node;
                newNode.children = DataUtils.flatToTree(treeData, node[options.idName], options);
                treeArr.push(newNode);
            }
        }
        return treeArr;
    };
    DataUtils.compareVersion = function (v1, v2) {
        var _v1 = v1.split(".");
        var _v2 = v2.split(".");
        for (var i = 0; i < _v1.length; i++) {
            if (parseInt(_v1[i]) > parseInt(_v2[i]))
                return true;
            if (parseInt(_v1[i]) < parseInt(_v2[i]))
                return false;
        }
        return false;
    };
    return DataUtils;
}());
var SafeArray = (function (_super) {
    __extends(SafeArray, _super);
    function SafeArray(data) {
        var _this = _super.call(this) || this;
        if (Array.isArray(data)) {
            return data;
        }
        else if (typeof data === "string" && data !== "") {
            if (data.length > 0 && data[0] === "[") {
                return JSON.parse(data);
            }
            else if (data.length > 0) {
                return data.split(",");
            }
            else {
                return [];
            }
        }
        else {
            return [];
        }
    }
    return SafeArray;
}(Array));
exports.SafeArray = SafeArray;
exports.default = DataUtils;
//# sourceMappingURL=index.js.map