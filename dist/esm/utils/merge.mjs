import { isObject } from './is.mjs';
export function mergeHeaders(source1, source2) {
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
// TODO: Make this strongly-typed (no `any`).
export function deepMerge(...sources) {
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
        else if (isObject(source)) {
            for (let [key, value] of Object.entries(source)) {
                if (isObject(value) && key in returnValue) {
                    value = deepMerge(returnValue[key], value);
                }
                returnValue = { ...returnValue, [key]: value };
            }
            if (isObject(source.headers)) {
                headers = mergeHeaders(headers, source.headers);
                returnValue.headers = headers;
            }
        }
    }
    return returnValue;
}
export function validateAndMerge(...sources) {
    for (const source of sources) {
        if ((!isObject(source) || Array.isArray(source)) && typeof source !== 'undefined') {
            throw new TypeError('The `options` argument must be an object');
        }
    }
    return deepMerge({}, ...sources);
}
//# sourceMappingURL=merge.mjs.map