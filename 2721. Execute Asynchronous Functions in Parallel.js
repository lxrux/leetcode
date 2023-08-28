/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return new Promise((resolve, reject) => {
        let results = [], size = 0;
        for (let i = 0; i < functions.length; i++) {
            functions[i]()
            .then(value => {
                size++;
                results[i] = value;
                if (size === functions.length) {
                    resolve(results);
                }
            })
            .catch(error => reject(error))
        }
    })
};
