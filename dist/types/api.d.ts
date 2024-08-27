import { IARC0001Transaction } from "./types";
export declare const INVALID_BASE64URL_INPUT = "Invalid base64url input";
/**
 * Bytes to Base64URL
 * @param {Uint8Array| ArrayBuffer} arr Bytes to convert to URL safe Base64
 */
export declare function toBase64URL(arr: Uint8Array | ArrayBuffer): string;
/**
 * Base64URL to Bytes
 * @param {string} base64url URL safe Base64 string
 */
export declare function fromBase64Url(base64url: string): Uint8Array;
export declare function toSignTransactionsParamsRequestMessage(messageId: string, providerId: string, txns: IARC0001Transaction[]): string;
export declare function toSignTransactionsResultResponseMessage(messageId: string, providerId: string, requestId: string, stxns: string[]): string;
