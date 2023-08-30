/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) {
    return JSON.parse(JSON.stringify(obj, function (key, value) {
        if (value) {
            return value;
        }
    }).replace(/,null|null,|null/g,''));
};
