/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return (x) => functions.reverse().reduce((val, fun) => val = fun(val), x);
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
