export declare class SignTransactionsResult {
    providerId: string;
    stxns: string[];
}
export interface ISignTransactionsResultBuilder {
    addProviderId(providerId: string): ISignTransactionsResultBuilder;
    addSignedTxns(stxns: string[]): ISignTransactionsResultBuilder;
}
export declare class SignTransactionsResultBuilder implements ISignTransactionsResultBuilder {
    private result;
    constructor();
    addProviderId(providerId: string): SignTransactionsResultBuilder;
    addSignedTxns(stxns: string[]): SignTransactionsResultBuilder;
    get(): SignTransactionsResult;
}
