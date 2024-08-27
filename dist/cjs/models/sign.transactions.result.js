"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignTransactionsResultBuilder = exports.SignTransactionsResult = void 0;
var SignTransactionsResult = /** @class */ (function () {
    function SignTransactionsResult() {
    }
    return SignTransactionsResult;
}());
exports.SignTransactionsResult = SignTransactionsResult;
var SignTransactionsResultBuilder = /** @class */ (function () {
    function SignTransactionsResultBuilder() {
        this.result = new SignTransactionsResult();
    }
    SignTransactionsResultBuilder.prototype.addProviderId = function (providerId) {
        this.result.providerId = providerId;
        return this;
    };
    SignTransactionsResultBuilder.prototype.addSignedTxns = function (stxns) {
        this.result.stxns = stxns;
        return this;
    };
    SignTransactionsResultBuilder.prototype.get = function () {
        return this.result;
    };
    return SignTransactionsResultBuilder;
}());
exports.SignTransactionsResultBuilder = SignTransactionsResultBuilder;
//# sourceMappingURL=sign.transactions.result.js.map