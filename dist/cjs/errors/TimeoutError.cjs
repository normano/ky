"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeoutError = void 0;
class TimeoutError extends Error {
    request;
    constructor(request) {
        super('Request timed out');
        Object.defineProperty(this, "request", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = 'TimeoutError';
        this.request = request;
    }
}
exports.TimeoutError = TimeoutError;
//# sourceMappingURL=TimeoutError.cjs.map