/**
 * @param {Function} fn
 */
function memoize(fn) {
    let cache = new Map();
    return function(...args) {
        let key = args.join('&');
        if (!cache.has(key)) {
            cache.set(key, fn(...args));
        }
        return cache.get(key);
    }
}
