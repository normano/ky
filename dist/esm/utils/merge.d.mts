import type { KyHeadersInit, Options } from '../types/options.mjs';
export declare function mergeHeaders(source1?: KyHeadersInit, source2?: KyHeadersInit): Headers;
export declare function deepMerge<T>(...sources: (Partial<T> | undefined)[]): T;
export declare function validateAndMerge(...sources: Array<Partial<Options> | undefined>): Partial<Options>;
