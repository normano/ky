/*! MIT License © Sindre Sorhus */
import { Ky } from './core/Ky.js';
import { requestMethods, stop } from './core/constants.js';
import type { KyInstance } from './types/ky.js';
import { validateAndMerge } from './utils/merge.js';
import { Input, Options } from './types/options.js';

function createInstance(defaults?: Options): KyInstance {
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    const ky: any = (url: Input, options: Options) => Ky.create(url, validateAndMerge(defaults, options));

    for (const method of requestMethods) {
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        (ky as any)[method] = (url: Input, options: Options) => Ky.create(url, validateAndMerge(defaults, options, { method }));
    }

    ky.create = (newDefaults: Options) => createInstance(validateAndMerge(newDefaults));
    ky.extend = (newDefaults: Options) => createInstance(validateAndMerge(defaults, newDefaults));
    (ky as any).stop = stop;

    return ky;
};
const ky = createInstance();

export default ky;
export { HTTPError } from './errors/HTTPError.js';
export { TimeoutError } from './errors/TimeoutError.js';
export type { Options, NormalizedOptions, RetryOptions, SearchParamsOption, DownloadProgress, } from './types/options.js';
export type { Hooks, BeforeRequestHook, BeforeRetryHook, BeforeRetryState, BeforeErrorHook, AfterResponseHook, } from './types/hooks.js';
export type { ResponsePromise } from './types/ResponsePromise.js';
export type { KyResponse } from './types/response.js';