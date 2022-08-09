import { TimeoutError } from '../errors/TimeoutError.js';

export type TimeoutOptions = {
    timeout: number;
    fetch: typeof fetch;
};

// `Promise.race()` workaround (#91)
export const timeout: (request: Request, abortController: AbortController | undefined, options: TimeoutOptions) => Promise<Response> = async (request, abortController, options) => new Promise((resolve, reject) => {
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

export const delay: (ms: number) => Promise<unknown> = async (ms) => new Promise(resolve => {
    setTimeout(resolve, ms);
});