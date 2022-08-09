import { TimeoutError } from '../errors/TimeoutError.mjs';
// `Promise.race()` workaround (#91)
export const timeout = async (request, abortController, options) => new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
        if (abortController) {
            abortController.abort();
        }
        reject(new TimeoutError(request));
    }, options.timeout);
    void options
        .fetch(request)
        .then(resolve)
        .catch(reject)
        .then(() => {
        clearTimeout(timeoutId);
    });
});
export const delay = async (ms) => new Promise(resolve => {
    setTimeout(resolve, ms);
});
//# sourceMappingURL=time.mjs.map