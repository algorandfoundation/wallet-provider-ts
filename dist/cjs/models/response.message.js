"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseMessageBuilder = exports.ResponseMessage = void 0;
var ResponseMessage = /** @class */ (function () {
    function ResponseMessage(id, requestId, reference) {
        this.id = id;
        this.requestId = requestId;
        this.reference = reference;
    }
    return ResponseMessage;
}());
exports.ResponseMessage = ResponseMessage;
var ResponseMessageBuilder = /** @class */ (function () {
    function ResponseMessageBuilder(id, requestId, reference) {
        this.response = new ResponseMessage(id, requestId, reference);
    }
    ResponseMessageBuilder.prototype.addResult = function (result) {
        this.response.result = result;
        return this;
    };
    ResponseMessageBuilder.prototype.get = function () {
        return this.response;
    };
    return ResponseMessageBuilder;
}());
exports.ResponseMessageBuilder = ResponseMessageBuilder;
//# sourceMappingURL=response.message.js.map