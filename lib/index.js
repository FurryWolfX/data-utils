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

  static queryStringToObject() {
    console.error("Function queryStringToObject has been removed from new version. Please use qs module instead.");
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

  /**
   * 深拷贝
   * @param obj
   * @param cache
   * @returns {*}
   */
  static deepCopy(obj, cache = []) {
    // just return if obj is immutable value
    if (obj === null || typeof obj !== "object") {
      return obj;
    }

    // if obj is hit, it is in circular structure
    const hit = cache.find(c => c.original === obj);
    if (hit) {
      return hit.copy;
    }

    const copy = Array.isArray(obj) ? [] : {};
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
      original: obj,
      copy,
    });

    Object.keys(obj).forEach(key => {
      copy[key] = DataUtils.deepCopy(obj[key], cache);
    });

    return copy;
  }
  /**
   * 比较版本号，如果v1>v2则返回true，否则false
   * @param {Object} v1 服务端版本
   * @param {Object} v2 客户端实际版本
   * @returns {boolean}
   */
  static compareVersion(v1, v2) {
    v1 = v1.split(".");
    v2 = v2.split(".");
    for (let i = 0; i < v1.length; i++) {
      if (parseInt(v1[i]) > parseInt(v2[i])) return true;
      if (parseInt(v1[i]) < parseInt(v2[i])) return false;
    }
  }
}

module.exports = DataUtils;
