"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = exports.timeout = void 0;
const TimeoutError_cjs_1 = require("../errors/TimeoutError.cjs");
// `Promise.race()` workaround (#91)
const timeout = async (request, abortController, options) => new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
        if (abortController) {
            abortController.abort();
        }
        reject(new TimeoutError_cjs_1.TimeoutError(request));
    }, options.timeout);
    void options
        .fetch(request)
        .then(resolve)
        .catch(reject)
        .then(() => {
        clearTimeout(timeoutId);
    });
});
exports.timeout = timeout;
const delay = async (ms) => new Promise(resolve => {
    setTimeout(resolve, ms);
});
exports.delay = delay;
//# sourceMappingURL=time.cjs.map