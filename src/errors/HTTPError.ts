import type { NormalizedOptions } from '../types/options.js';

export class HTTPError extends Error {
    response: Response;
    request: Request;
    options: NormalizedOptions;

    constructor(response: Response, request: Request, options: NormalizedOptions) {
        const code = (response.status || response.status === 0) ? response.status : '';
        const title = response.statusText || '';
        const status = `${code} ${title}`.trim();
        const reason = status ? `status code ${status}` : 'an unknown error';
        super(`Request failed with ${reason}`);
        Object.defineProperty(this, "response", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "request", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = 'HTTPError';
        this.response = response;
        this.request = request;
        this.options = options;
    }
}