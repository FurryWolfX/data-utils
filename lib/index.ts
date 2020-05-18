export type KeyValue<T> = {
  [key: string]: T;
};
type FlatToTreeOption = {
  idName: string;
  pidName: string;
};

class DataUtils {
  /**
   * 将数组拆成N个一组
   * @param array
   * @param numberEveryGroup
   * @returns {Array}
   */
  static arrayToGroup(array: any[], numberEveryGroup: number): any[] {
    let result: any[] = [];
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
  static thousandNumFormat(v: any): string {
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

  static getGUID(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
      // @ts-ignore
      return (c === "x" ? (Math.random() * 16) | 0 : "r&0x3" | "0x8").toString(16);
    });
  }

  /**
   * 获取字符长度，中文记为+2
   * @param s
   * @returns {number}
   */
  static getStringLength(s: string): number {
    return s.replace(/[\u4e00-\u9fa5\uff00-\uffff]/g, "**").length;
  }

  /**
   * 树形数据转换，将扁平结构的数据转换成树型结构
   */
  static flatToTree(
    treeData: any[],
    parentId: any,
    options: FlatToTreeOption = {
      idName: "id",
      pidName: "parentId",
    },
  ): any[] {
    const treeArr: any[] = [];
    for (let i = 0; i < treeData.length; i++) {
      const node = treeData[i];
      if (node[options.pidName] === parentId) {
        const newNode: any = node;
        newNode.children = DataUtils.flatToTree(treeData, node[options.idName], options);
        treeArr.push(newNode);
      }
    }
    return treeArr;
  }

  /**
   * 深拷贝
   * @param obj
   * @param cache
   */
  static deepCopy(obj, cache: any[] = []): any {
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
   * @param {String} v1 服务端版本
   * @param {String} v2 客户端实际版本
   */
  static compareVersion(v1: string, v2: string): boolean {
    const _v1 = v1.split(".");
    const _v2 = v2.split(".");
    for (let i = 0; i < _v1.length; i++) {
      if (parseInt(_v1[i]) > parseInt(_v2[i])) return true;
      if (parseInt(_v1[i]) < parseInt(_v2[i])) return false;
    }
    return false;
  }
}

export default DataUtils;
