import type { KyInstance } from './types/ky.mjs';
declare const ky: KyInstance;
export default ky;
export { HTTPError } from './errors/HTTPError.mjs';
export { TimeoutError } from './errors/TimeoutError.mjs';
export type { Options, NormalizedOptions, RetryOptions, SearchParamsOption, DownloadProgress, } from './types/options.mjs';
export type { Hooks, BeforeRequestHook, BeforeRetryHook, BeforeRetryState, BeforeErrorHook, AfterResponseHook, } from './types/hooks.mjs';
export type { ResponsePromise } from './types/ResponsePromise.mjs';
export type { KyResponse } from './types/response.mjs';
