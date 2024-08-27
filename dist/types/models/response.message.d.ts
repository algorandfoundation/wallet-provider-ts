import { Reference } from "../types.js";
import { SignTransactionsResult } from "./sign.transactions.result.js";
export type Results = SignTransactionsResult;
export declare class ResponseMessage {
    id: string;
    reference: Reference;
    requestId: string;
    result: Results;
    constructor(id: string, requestId: string, reference: Reference);
}
export interface IResponseMessageBuilder {
    addResult(result: Results): IResponseMessageBuilder;
}
export declare class ResponseMessageBuilder implements IResponseMessageBuilder {
    private response;
    constructor(id: string, requestId: string, reference: Reference);
    addResult(result: Results): ResponseMessageBuilder;
    get(): ResponseMessage;
}
