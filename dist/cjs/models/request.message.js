"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestMessageBuilder = exports.RequestMessage = void 0;
/**
 * Represents a request message object.
 *
 * @class
 * @constructor
 * @param {string} id - The unique identifier of the request message.
 * @param {Reference} reference - The reference object associated with the request message.
 */
var RequestMessage = /** @class */ (function () {
    function RequestMessage(id, reference) {
        this.id = id;
        this.reference = reference;
    }
    return RequestMessage;
}());
exports.RequestMessage = RequestMessage;
var RequestMessageBuilder = /** @class */ (function () {
    function RequestMessageBuilder(id, reference) {
        this.request = new RequestMessage(id, reference);
    }
    RequestMessageBuilder.prototype.addParams = function (params) {
        this.request.params = params;
        return this;
    };
    RequestMessageBuilder.prototype.get = function () {
        return this.request;
    };
    return RequestMessageBuilder;
}());
exports.RequestMessageBuilder = RequestMessageBuilder;
//# sourceMappingURL=request.message.js.map