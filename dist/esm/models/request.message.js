import { SignTransactionsParams } from "./sign.transactions.params.js";
/**
 * Represents a request message object.
 *
 * @class
 * @constructor
 * @param {string} id - The unique identifier of the request message.
 * @param {Reference} reference - The reference object associated with the request message.
 */
export class RequestMessage {
    id;
    reference;
    params;
    constructor(id, reference) {
        this.id = id;
        this.reference = reference;
    }
}
export class RequestMessageBuilder {
    request;
    constructor(id, reference) {
        this.request = new RequestMessage(id, reference);
    }
    addParams(params) {
        this.request.params = params;
        return this;
    }
    get() {
        return this.request;
    }
}
//# sourceMappingURL=request.message.js.map