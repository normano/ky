"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAndMerge = exports.deepMerge = exports.mergeHeaders = void 0;
const is_cjs_1 = require("./is.cjs");
function mergeHeaders(source1, source2) {
    if (!source1) {
        source1 = {};
    }
    if (!source2) {
        source2 = {};
    }
    const result = new globalThis.Headers(source1);
    const isHeadersInstance = source2 instanceof globalThis.Headers;
    const source = new globalThis.Headers(source2);
    for (const [key, value] of source.entries()) {
        if ((isHeadersInstance && value === 'undefined') || value === undefined) {
            result.delete(key);
        }
        else {
            result.set(key, value);
        }
    }
    return result;
}
exports.mergeHeaders = mergeHeaders;
// TODO: Make this strongly-typed (no `any`).
function deepMerge(...sources) {
    let returnValue = {};
    let headers = {};
    for (const source of sources) {
        if (!source) {
            continue;
        }
        if (Array.isArray(source)) {
            if (!Array.isArray(returnValue)) {
                returnValue = [];
            }
            returnValue = [...returnValue, ...source];
        }
        else if ((0, is_cjs_1.isObject)(source)) {
            for (let [key, value] of Object.entries(source)) {
                if ((0, is_cjs_1.isObject)(value) && key in returnValue) {
                    value = deepMerge(returnValue[key], value);
                }
                returnValue = { ...returnValue, [key]: value };
            }
            if ((0, is_cjs_1.isObject)(source.headers)) {
                headers = mergeHeaders(headers, source.headers);
                returnValue.headers = headers;
            }
        }
    }
    return returnValue;
}
exports.deepMerge = deepMerge;
function validateAndMerge(...sources) {
    for (const source of sources) {
        if ((!(0, is_cjs_1.isObject)(source) || Array.isArray(source)) && typeof source !== 'undefined') {
            throw new TypeError('The `options` argument must be an object');
        }
    }
    return deepMerge({}, ...sources);
}
exports.validateAndMerge = validateAndMerge;
//# sourceMappingURL=merge.cjs.map