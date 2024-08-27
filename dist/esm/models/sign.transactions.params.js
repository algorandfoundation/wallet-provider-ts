export class SignTransactionsParams {
    providerId;
    txns;
}
export class SignTransactionsParamsBuilder {
    params;
    constructor() {
        this.params = new SignTransactionsParams();
    }
    addProviderId(providerId) {
        this.params.providerId = providerId;
        return this;
    }
    addTxns(txns) {
        this.params.txns = txns;
        return this;
    }
    get() {
        return this.params;
    }
}
//# sourceMappingURL=sign.transactions.params.js.map