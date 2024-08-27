export class SignTransactionsResult {
    providerId;
    stxns;
}
export class SignTransactionsResultBuilder {
    result;
    constructor() {
        this.result = new SignTransactionsResult();
    }
    addProviderId(providerId) {
        this.result.providerId = providerId;
        return this;
    }
    addSignedTxns(stxns) {
        this.result.stxns = stxns;
        return this;
    }
    get() {
        return this.result;
    }
}
//# sourceMappingURL=sign.transactions.result.js.map