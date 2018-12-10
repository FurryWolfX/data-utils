module.exports = {
  /**
   * 将数组拆成N个一组
   * @param array
   * @param numberEveryGroup
   * @returns {Array}
   */
  arrayToGroup: function (array, numberEveryGroup) {
    let result = [];
    for (let i = 0, len = array.length; i < len; i += numberEveryGroup) {
      result.push(array.slice(i, i + numberEveryGroup));
    }
    return result;
  },
  /**
   * 金额数字格式
   * @param v
   * @returns {string}
   */
  thousandNumFormat: function (v) {
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
  },
  /**
   * queryString转Object
   * @param str
   */
  queryStringToObject: function (str) {
    str = str.replace('?', '');
    let strArray = str.split('&');
    let obj = {};
    for (let i = 0; i < strArray.length; i++) {
      let params = strArray[i].split('=');
      obj[params[0]] = params[1];
    }
    return obj;
  }
};