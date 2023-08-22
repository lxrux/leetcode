/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (a) => {
            if (val === a) return true;
            else throw new Error("Not Equal")
        },
        notToBe: (b) => {
            if (val !== b) return true
            else throw new Error("Equal")
        }
    }
};
