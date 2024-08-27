import { Reference } from "../types.js";
import { SignTransactionsParams } from "./sign.transactions.params.js";
export type Params = SignTransactionsParams;
/**
 * Represents a request message object.
 *
 * @class
 * @constructor
 * @param {string} id - The unique identifier of the request message.
 * @param {Reference} reference - The reference object associated with the request message.
 */
export declare class RequestMessage {
    id: string;
    reference: Reference;
    params: Params;
    constructor(id: string, reference: Reference);
}
export interface IRequestMessageBuilder {
    addParams(params: Params): IRequestMessageBuilder;
}
export declare class RequestMessageBuilder implements IRequestMessageBuilder {
    private request;
    constructor(id: string, reference: Reference);
    addParams(params: Params): RequestMessageBuilder;
    get(): RequestMessage;
}
