import { requestMethods } from '../core/constants.js';
export function normalizeRequestMethod(input) {
    return requestMethods.includes(input) ? input.toUpperCase() : input;
}
const retryMethods = ['get', 'put', 'head', 'delete', 'options', 'trace'];
const retryStatusCodes = [408, 413, 429, 500, 502, 503, 504];
const retryAfterStatusCodes = [413, 429, 503];
const defaultRetryOptions = {
    limit: 2,
    methods: retryMethods,
    statusCodes: retryStatusCodes,
    afterStatusCodes: retryAfterStatusCodes,
    maxRetryAfter: Number.POSITIVE_INFINITY,
};
export function normalizeRetryOptions(retry) {
    if (retry === undefined) {
        retry = {};
    }
    if (typeof retry === 'number') {
        return Object.assign(Object.assign({}, defaultRetryOptions), { limit: retry });
    }
    if (retry.methods && !Array.isArray(retry.methods)) {
        throw new Error('retry.methods must be an array');
    }
    if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
        throw new Error('retry.statusCodes must be an array');
    }
    return Object.assign(Object.assign(Object.assign({}, defaultRetryOptions), retry), { afterStatusCodes: retryAfterStatusCodes });
}
//# sourceMappingURL=normalize.js.map