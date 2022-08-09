"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseTypes = exports.requestMethods = exports.supportsFormData = exports.supportsStreams = exports.supportsAbortController = exports.stop = exports.maxSafeTimeout = void 0;
// The maximum value of a 32bit int (see issue #117)
exports.maxSafeTimeout = 2147483647;
exports.stop = Symbol('stop');
exports.supportsAbortController = typeof globalThis.AbortController === 'function';
exports.supportsStreams = typeof globalThis.ReadableStream === 'function';
exports.supportsFormData = typeof globalThis.FormData === 'function';
exports.requestMethods = ['get', 'post', 'put', 'patch', 'head', 'delete'];
const validate = () => undefined;
validate();
exports.responseTypes = {
    json: 'application/json',
    text: 'text/*',
    formData: 'multipart/form-data',
    arrayBuffer: '*/*',
    blob: '*/*',
};
//# sourceMappingURL=constants.cjs.map