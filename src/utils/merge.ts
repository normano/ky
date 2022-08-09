import { isObject } from './is.js';
import type { KyHeadersInit, Options } from '../types/options.js';

export function mergeHeaders(source1?: KyHeadersInit, source2?: KyHeadersInit): Headers {

    if(!source1) {
        source1 = {};
    }

    if(!source2) {
        source2 = {};
    }

    const result = new globalThis.Headers(source1 as HeadersInit);
    const isHeadersInstance = source2 instanceof globalThis.Headers;
    const source = new globalThis.Headers(source2 as HeadersInit);
    for (const [key, value] of (source as any).entries()) {
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
export function deepMerge<T>(...sources: (Partial<T> | undefined)[]): T {

    let returnValue: any = {};
    let headers: any = {};
    for (const source of sources) {
        if(!source) {
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
                    value = deepMerge(returnValue[key], value as any);
                }
                returnValue = { ...returnValue, [key]: value };
            }

            if (isObject((source as any).headers)) {
                headers = mergeHeaders(headers, (source as any).headers);
                returnValue.headers = headers;
            }
        }
    }
    return returnValue;
}

export function validateAndMerge(...sources: Array<Partial<Options> | undefined>): Partial<Options> {
    for (const source of sources) {
        if ((!isObject(source) || Array.isArray(source)) && typeof source !== 'undefined') {
            throw new TypeError('The `options` argument must be an object');
        }
    }
    return deepMerge({}, ...sources);
}
