export class TimeoutError extends Error {
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
//# sourceMappingURL=TimeoutError.mjs.map