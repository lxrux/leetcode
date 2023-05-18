/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result = [];
    let size = 0;
    for (let idx = 0; idx < arr.length; idx++) {
        if (fn(arr[idx], idx)) {
            result[size++] = arr[idx];
        }
    }

    return result;
};
