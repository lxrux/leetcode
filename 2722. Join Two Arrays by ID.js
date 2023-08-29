/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let result = {};
    arr1.concat(arr2).forEach(element => {
        result[element.id] = Object.assign(result[element.id] || {}, element);
    })

    return Object.values(result);
};
