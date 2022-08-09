/*! MIT License © Sindre Sorhus */
import { Ky } from './core/Ky.mjs';
import { requestMethods, stop } from './core/constants.mjs';
import { validateAndMerge } from './utils/merge.mjs';
function createInstance(defaults) {
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    const ky = (url, options) => Ky.create(url, validateAndMerge(defaults, options));
    for (const method of requestMethods) {
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        ky[method] = (url, options) => Ky.create(url, validateAndMerge(defaults, options, { method }));
    }
    ky.create = (newDefaults) => createInstance(validateAndMerge(newDefaults));
    ky.extend = (newDefaults) => createInstance(validateAndMerge(defaults, newDefaults));
    ky.stop = stop;
    return ky;
}
;
const ky = createInstance();
export default ky;
export { HTTPError } from './errors/HTTPError.mjs';
export { TimeoutError } from './errors/TimeoutError.mjs';
//# sourceMappingURL=index.mjs.map