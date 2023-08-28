/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length / size; i++) {
        result.push(arr.slice(i * size, (i + 1) * size));
    }

    return result;
};
