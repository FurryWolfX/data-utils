class DataUtils {
  /**
   * 将数组拆成N个一组
   * @param array
   * @param numberEveryGroup
   * @returns {Array}
   */
  static arrayToGroup(array, numberEveryGroup) {
    let result = [];
    for (let i = 0, len = array.length; i < len; i += numberEveryGroup) {
      result.push(array.slice(i, i + numberEveryGroup));
    }
    return result;
  }

  /**
   * 金额数字格式
   * @param v
   * @returns {string}
   */
  static thousandNumFormat(v) {
    if (v) {
      v = v.toFixed(2);
      v = parseFloat(v);
      v = v.toLocaleString();
      if (v.split(".").length === 1) {
        v += ".00";
      }
      return v;
    } else {
      return "0.00";
    }
  }

  /**
   * queryString转Object
   * @param str
   */
  static queryStringToObject(str) {
    str = str.replace("?", "");
    let strArray = str.split("&");
    let obj = {};
    for (let i = 0; i < strArray.length; i++) {
      let params = strArray[i].split("=");
      obj[params[0]] = params[1];
    }
    return obj;
  }

  static getGUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
      return (c === "x" ? (Math.random() * 16) | 0 : "r&0x3" | "0x8").toString(16);
    });
  }

  /**
   * 获取字符长度，中文记为+2
   * @param s
   * @returns {number}
   */
  static getStringLength(s) {
    return s.replace(/[\u4e00-\u9fa5\uff00-\uffff]/g, "**").length;
  }

  /**
   * 树形数据转换，将扁平结构的数据转换成树型结构
   * @param data
   * @param id
   * @param pid
   * @returns {Array}
   */
  static treeDataTranslate(data, id = "id", pid = "parentId") {
    const res = [];
    const temp = {};
    for (let i = 0; i < data.length; i++) {
      temp[data[i][id]] = data[i];
    }
    for (let k = 0; k < data.length; k++) {
      if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
        if (!temp[data[k][pid]]["children"]) {
          temp[data[k][pid]]["children"] = [];
        }
        if (!temp[data[k][pid]]["_level"]) {
          temp[data[k][pid]]["_level"] = 1;
        }
        data[k]["_level"] = temp[data[k][pid]]._level + 1;
        temp[data[k][pid]]["children"].push(data[k]);
      } else {
        res.push(data[k]);
      }
    }
    return res;
  }
}

module.exports = DataUtils;