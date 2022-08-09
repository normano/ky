import type { RetryOptions } from '../types/retry.mjs';
export declare function normalizeRequestMethod(input: string): string;
export declare function normalizeRetryOptions(retry?: number | RetryOptions): Required<RetryOptions>;
