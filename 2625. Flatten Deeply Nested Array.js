/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    if (!n) {
        return arr;
    }

    let result = [];
    for (let element of arr) {
        if (Array.isArray(element)) {
            element = flat(element, n-1);
            result.push(...element);
        }
        else {
            result.push(element);
        }
    }

    return result;
};
