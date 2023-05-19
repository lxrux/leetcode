/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let used = false;
    return function(...args){
        if (used) {
            return undefined;
        }
        else {
            used = true;
            return fn(...args);
        }
    }
};
