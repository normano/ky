import type { NormalizedOptions } from '../types/options.cjs';
export declare class HTTPError extends Error {
    response: Response;
    request: Request;
    options: NormalizedOptions;
    constructor(response: Response, request: Request, options: NormalizedOptions);
}
