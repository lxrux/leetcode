/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    let obj = {};
    this.forEach(element => {
        let key = fn(element);
        let arr = obj[key] || [];
        arr.push(element);
        obj[key] = arr;
    })
    
    return obj;
};
