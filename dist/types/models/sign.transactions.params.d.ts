import { IARC0001Transaction } from "../types.js";
export declare class SignTransactionsParams {
    providerId: string;
    txns: IARC0001Transaction[];
}
export interface ISignTransactionsParamsBuilder {
    addProviderId(providerId: string): ISignTransactionsParamsBuilder;
    addTxns(txns: IARC0001Transaction[]): ISignTransactionsParamsBuilder;
}
export declare class SignTransactionsParamsBuilder implements ISignTransactionsParamsBuilder {
    private params;
    constructor();
    addProviderId(providerId: string): SignTransactionsParamsBuilder;
    addTxns(txns: IARC0001Transaction[]): SignTransactionsParamsBuilder;
    get(): SignTransactionsParams;
}
