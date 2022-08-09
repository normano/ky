import type { KyInstance } from './types/ky.cjs';
declare const ky: KyInstance;
export default ky;
export { HTTPError } from './errors/HTTPError.cjs';
export { TimeoutError } from './errors/TimeoutError.cjs';
export type { Options, NormalizedOptions, RetryOptions, SearchParamsOption, DownloadProgress, } from './types/options.cjs';
export type { Hooks, BeforeRequestHook, BeforeRetryHook, BeforeRetryState, BeforeErrorHook, AfterResponseHook, } from './types/hooks.cjs';
export type { ResponsePromise } from './types/ResponsePromise.cjs';
export type { KyResponse } from './types/response.cjs';
