"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignTransactionsParamsBuilder = exports.SignTransactionsParams = void 0;
var SignTransactionsParams = /** @class */ (function () {
    function SignTransactionsParams() {
    }
    return SignTransactionsParams;
}());
exports.SignTransactionsParams = SignTransactionsParams;
var SignTransactionsParamsBuilder = /** @class */ (function () {
    function SignTransactionsParamsBuilder() {
        this.params = new SignTransactionsParams();
    }
    SignTransactionsParamsBuilder.prototype.addProviderId = function (providerId) {
        this.params.providerId = providerId;
        return this;
    };
    SignTransactionsParamsBuilder.prototype.addTxns = function (txns) {
        this.params.txns = txns;
        return this;
    };
    SignTransactionsParamsBuilder.prototype.get = function () {
        return this.params;
    };
    return SignTransactionsParamsBuilder;
}());
exports.SignTransactionsParamsBuilder = SignTransactionsParamsBuilder;
//# sourceMappingURL=sign.transactions.params.js.map