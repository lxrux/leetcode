/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArray = [];
    for (let index = 0; index < arr.length; index++) {
        newArray[index] = fn(arr[index], index);
    }

    return newArray;
};
