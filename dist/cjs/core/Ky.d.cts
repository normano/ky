import { Input, Options, InternalOptions } from '../types/options.cjs';
export declare class Ky {
    request: Request;
    protected abortController?: AbortController;
    protected _retryCount: number;
    protected _input: Input;
    protected _options: InternalOptions;
    constructor(input: Input, options?: Options);
    static create(input: Input, options: Options): Promise<Response> | Promise<void | Promise<Response>>;
    _calculateRetryDelay(error: unknown): number;
    _decorateResponse(response: Response): Response;
    _retry<T extends (...args: any) => Promise<any>>(fn: T): Promise<ReturnType<T> | void>;
    _fetch(): Promise<Response>;
    _stream(response: Response, onDownloadProgress: Options['onDownloadProgress']): Response;
}
