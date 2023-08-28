var TimeLimitedCache = function() {
    this.valuesMap = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let timeoutId, status = false;
    if (this.valuesMap.has(key)) {
        let mapValue = this.valuesMap.get(key);
        clearTimeout(mapValue.timeoutId)
        status = true;
    }
    
    timeoutId = setTimeout(() => this.valuesMap.delete(key), duration);
    this.valuesMap.set(key, {value, timeoutId});

    return status;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const mapValue = this.valuesMap.get(key);
    if (mapValue === undefined) {
        return -1;
    }
    
    return mapValue.value;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.valuesMap.size;
};
