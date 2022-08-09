"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeoutError = exports.HTTPError = void 0;
/*! MIT License © Sindre Sorhus */
const Ky_cjs_1 = require("./core/Ky.cjs");
const constants_cjs_1 = require("./core/constants.cjs");
const merge_cjs_1 = require("./utils/merge.cjs");
function createInstance(defaults) {
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    const ky = (url, options) => Ky_cjs_1.Ky.create(url, (0, merge_cjs_1.validateAndMerge)(defaults, options));
    for (const method of constants_cjs_1.requestMethods) {
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        ky[method] = (url, options) => Ky_cjs_1.Ky.create(url, (0, merge_cjs_1.validateAndMerge)(defaults, options, { method }));
    }
    ky.create = (newDefaults) => createInstance((0, merge_cjs_1.validateAndMerge)(newDefaults));
    ky.extend = (newDefaults) => createInstance((0, merge_cjs_1.validateAndMerge)(defaults, newDefaults));
    ky.stop = constants_cjs_1.stop;
    return ky;
}
;
const ky = createInstance();
exports.default = ky;
var HTTPError_cjs_1 = require("./errors/HTTPError.cjs");
Object.defineProperty(exports, "HTTPError", { enumerable: true, get: function () { return HTTPError_cjs_1.HTTPError; } });
var TimeoutError_cjs_1 = require("./errors/TimeoutError.cjs");
Object.defineProperty(exports, "TimeoutError", { enumerable: true, get: function () { return TimeoutError_cjs_1.TimeoutError; } });
//# sourceMappingURL=index.cjs.map