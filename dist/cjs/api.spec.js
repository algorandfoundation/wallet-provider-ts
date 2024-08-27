"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ajv_1 = __importDefault(require("ajv"));
var uuid_1 = require("uuid");
var tweetnacl_1 = require("tweetnacl");
var cbor_x_1 = require("cbor-x");
var ajv_formats_1 = __importDefault(require("ajv-formats"));
var algo_models_1 = require("@algorandfoundation/algo-models");
var api_js_1 = require("./api.js");
var Error_json_1 = __importDefault(require("./schemas/Error.json"));
var RequestMessage_json_1 = __importDefault(require("./schemas/RequestMessage.json"));
var ResponseMessage_json_1 = __importDefault(require("./schemas/ResponseMessage.json"));
var SignTransactionsParams_json_1 = __importDefault(require("./schemas/SignTransactionsParams.json"));
var SignTransactionsResult_json_1 = __importDefault(require("./schemas/SignTransactionsResult.json"));
var msgpack = __importStar(require("algo-msgpack-with-bigint"));
// Validator
var ajv = new ajv_1.default();
(0, ajv_formats_1.default)(ajv);
ajv.addSchema(Error_json_1.default);
ajv.addSchema(SignTransactionsParams_json_1.default);
ajv.addSchema(SignTransactionsResult_json_1.default);
ajv.addSchema(RequestMessage_json_1.default);
ajv.addSchema(ResponseMessage_json_1.default);
describe('Utils', function () {
    var algorandCrafter;
    var algoEncoder;
    var genesisId = "GENESIS_ID";
    // genesis in base64
    var genesisHash = Buffer.from((0, tweetnacl_1.randomBytes)(32)).toString("base64");
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            algorandCrafter = new algo_models_1.AlgorandTransactionCrafter(genesisId, genesisHash);
            algoEncoder = new algo_models_1.AlgorandEncoder();
            return [2 /*return*/];
        });
    }); });
    afterEach(function () {
        jest.resetAllMocks();
    });
    it('should create SignTransactionsParams RequestMessage', function () {
        // Provider that should sign the message
        var providerId = (0, uuid_1.v7)();
        // Unique Id of the message
        var messageId = (0, uuid_1.v7)();
        // A transaction
        var from = algoEncoder.encodeAddress(Buffer.from((0, tweetnacl_1.randomBytes)(32)));
        var to = algoEncoder.encodeAddress(Buffer.from((0, tweetnacl_1.randomBytes)(32)));
        var note = Buffer.from((0, tweetnacl_1.randomBytes)(128)).toString("base64");
        var txn = algorandCrafter
            .pay(1000, from, to)
            .addFirstValidRound(1000)
            .addLastValidRound(2000)
            .addNote(note, "base64")
            .addFee(1000)
            .get();
        // The Request Message as a CBOR encoded Base64URL String
        var messageString = (0, api_js_1.toSignTransactionsParamsRequestMessage)(messageId, providerId, [
            {
                txn: (0, api_js_1.toBase64URL)(txn.encode())
            }
        ]);
        // Decode the bytes
        var bytes = (0, api_js_1.fromBase64Url)(messageString);
        // Decode CBOR bytes to Object
        var expectedMessage = (0, cbor_x_1.decode)(bytes);
        // Validate Schema
        var validator = ajv.compile(RequestMessage_json_1.default);
        expect(validator(expectedMessage));
        // Assert Values
        expect(expectedMessage.id).toEqual(messageId);
        expect(expectedMessage.params.providerId).toEqual(providerId);
        expect(algoEncoder.decodeTransaction((0, api_js_1.fromBase64Url)(expectedMessage.params.txns[0].txn))).toEqual(txn);
    });
    it('should create SignTransactionsResults ResponseMessage', function () {
        // Provider that should sign the message
        var providerId = (0, uuid_1.v7)();
        // Unique Id of the message
        var messageId = (0, uuid_1.v7)();
        // Message Id we are responding to
        var requestId = (0, uuid_1.v7)();
        // A transaction
        var from = algoEncoder.encodeAddress(Buffer.from((0, tweetnacl_1.randomBytes)(32)));
        var to = algoEncoder.encodeAddress(Buffer.from((0, tweetnacl_1.randomBytes)(32)));
        var note = Buffer.from((0, tweetnacl_1.randomBytes)(128)).toString("base64");
        var txn = algorandCrafter
            .pay(1000, from, to)
            .addFirstValidRound(1000)
            .addLastValidRound(2000)
            .addNote(note, "base64")
            .addFee(1000)
            .get();
        var signature = Buffer.from((0, tweetnacl_1.randomBytes)(64));
        // The Response Message as a CBOR encoded Base64URL String
        var messageString = (0, api_js_1.toSignTransactionsResultResponseMessage)(messageId, providerId, requestId, [
            (0, api_js_1.toBase64URL)(signature)
        ]);
        // Decode the bytes
        var bytes = (0, api_js_1.fromBase64Url)(messageString);
        // Decode CBOR bytes to Object
        var expectedMessage = (0, cbor_x_1.decode)(bytes);
        // Validate Schema
        var validator = ajv.compile(ResponseMessage_json_1.default);
        expect(validator(expectedMessage));
        var expectedSignature = (0, api_js_1.fromBase64Url)(expectedMessage.result.stxns[0]);
        var result = algorandCrafter.addSignature(txn.encode(), expectedSignature);
        expect(result).toBeDefined();
        var expected = {
            sig: signature,
            txn: txn,
        };
        expect(result).toEqual(msgpack.encode(expected, { sortKeys: true }));
    });
});
//# sourceMappingURL=api.spec.js.map