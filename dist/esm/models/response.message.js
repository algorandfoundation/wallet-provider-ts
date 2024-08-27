import { SignTransactionsResult } from "./sign.transactions.result.js";
export class ResponseMessage {
    id;
    reference;
    requestId;
    result;
    constructor(id, requestId, reference) {
        this.id = id;
        this.requestId = requestId;
        this.reference = reference;
    }
}
export class ResponseMessageBuilder {
    response;
    constructor(id, requestId, reference) {
        this.response = new ResponseMessage(id, requestId, reference);
    }
    addResult(result) {
        this.response.result = result;
        return this;
    }
    get() {
        return this.response;
    }
}
//# sourceMappingURL=response.message.js.map