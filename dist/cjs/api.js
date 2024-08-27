"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSignTransactionsResultResponseMessage = exports.toSignTransactionsParamsRequestMessage = exports.fromBase64Url = exports.toBase64URL = exports.INVALID_BASE64URL_INPUT = void 0;
var cbor_x_1 = require("cbor-x");
var request_message_js_1 = require("./models/request.message.js");
var sign_transactions_params_js_1 = require("./models/sign.transactions.params.js");
var sign_transactions_result_js_1 = require("./models/sign.transactions.result.js");
var response_message_js_1 = require("./models/response.message.js");
var LARGE_MESSAGE_SIZE = 255000;
var LARGE_MESSAGE_ERROR = "Message too large, maximum is ".concat(LARGE_MESSAGE_SIZE, " in length");
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
exports.INVALID_BASE64URL_INPUT = 'Invalid base64url input';
/**
 * Bytes to Base64URL
 * @param {Uint8Array| ArrayBuffer} arr Bytes to convert to URL safe Base64
 */
function toBase64URL(arr) {
    var bytes = arr instanceof Uint8Array ? arr : new Uint8Array(arr);
    var len = bytes.length;
    var base64 = '';
    for (var i = 0; i < len; i += 3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
        base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
        base64 += chars[bytes[i + 2] & 63];
    }
    if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1);
    }
    else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2);
    }
    return base64;
}
exports.toBase64URL = toBase64URL;
/**
 * Base64URL to Bytes
 * @param {string} base64url URL safe Base64 string
 */
function fromBase64Url(base64url) {
    if (typeof base64url !== 'string') {
        throw new Error(exports.INVALID_BASE64URL_INPUT);
    }
    return new Uint8Array(
    // TODO: Cross-platform solution since atob is deprecated in Node
    atob(base64url.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, ''))
        .split('')
        .map(function (c) { return c.charCodeAt(0); }));
}
exports.fromBase64Url = fromBase64Url;
function toSignTransactionsParamsRequestMessage(messageId, providerId, txns) {
    var signParams = new sign_transactions_params_js_1.SignTransactionsParamsBuilder()
        .addProviderId(providerId)
        .addTxns(txns)
        .get();
    var request = new request_message_js_1.RequestMessageBuilder(messageId, "arc0027:sign_transactions:request")
        .addParams(signParams)
        .get();
    var encoded = (0, cbor_x_1.encode)(request);
    if (encoded.length > LARGE_MESSAGE_SIZE) {
        throw new Error(LARGE_MESSAGE_ERROR);
    }
    return toBase64URL(encoded);
}
exports.toSignTransactionsParamsRequestMessage = toSignTransactionsParamsRequestMessage;
function toSignTransactionsResultResponseMessage(messageId, providerId, requestId, stxns) {
    var signResult = new sign_transactions_result_js_1.SignTransactionsResultBuilder()
        .addProviderId(providerId)
        .addSignedTxns(stxns)
        .get();
    var request = new response_message_js_1.ResponseMessageBuilder(messageId, requestId, "arc0027:sign_message:response")
        .addResult(signResult)
        .get();
    var encoded = (0, cbor_x_1.encode)(request);
    if (encoded.length > LARGE_MESSAGE_SIZE) {
        throw new Error(LARGE_MESSAGE_ERROR);
    }
    return toBase64URL(encoded);
}
exports.toSignTransactionsResultResponseMessage = toSignTransactionsResultResponseMessage;
//# sourceMappingURL=api.js.map