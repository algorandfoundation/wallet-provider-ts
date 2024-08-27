# Wallet Provider

## Motivation

This package represents ARC27 messages that can be used over an agnostic wire. 

## Goal

- Simple encoding / decoding of Provider Messages
- Builder pattern for crafting

### For whom is this package?

- Wallets that want to integrate with ARC27 message schemas

## Install
```shell
$ npm install @algorandfoundation/provider
```

or

```shell
$ git clone git@github.com:algorandfoundation/wallet-provider-ts
```

## Tests

```shell
$ npm install
$ npm build
$ npm test:cov
```


## SignTransactionsParams

```ts
import {RequestMessageBuilder, SignTransactionsParamsBuilder, toBase64URL} from '@algorandfoundation/provider'

// Provider that should sign the message
const providerId = uuidv7()
// Unique Id of the message
const messageId = uuidv7()

// A transaction to be signed
const from: string = algoEncoder.encodeAddress(Buffer.from(randomBytes(32)))
const to: string = algoEncoder.encodeAddress(Buffer.from(randomBytes(32)))
const note: string = Buffer.from(randomBytes(128)).toString("base64")
const txn = algorandCrafter
    .pay(1000, from, to)
    .addFirstValidRound(1000)
    .addLastValidRound(2000)
    .addNote(note, "base64")
    .addFee(1000)
    .get()

// Create the Sign Parameters
const signParams = new SignTransactionsParamsBuilder()
    .addProviderId(providerId)
    .addTxns([
        {
            txn: toBase64URL(txn.encode())
        }
    ])
    .get()
// Create the Request Message
const request = new RequestMessageBuilder(messageId, "arc0027:sign_transactions:request")
    .addParams(signParams)
    .get()

// Encode to CBOR
const encoded = encode(request)
// Encode CBOR to Base64URL
const messageString = toBase64URL(encoded)

```

## SignTransactionsResult

```typescript
import {ResponseMessageBuilder, SignTransactionsResultBuilder, toBase64URL} from '@algorandfoundation/provider'

// decode the txns form the params and produce an array of signatures
const txns = [/*...*/] // i.e. decode(fromBase64URL(messageString))
const stxns = txns.map(toSignature)

// Create Sign Transactions Result
 const signResult = new SignTransactionsResultBuilder()
    .addProviderId(providerId)
    .addSignedTxns(stxns)
    .get()
// Create Response Message
const request = new ResponseMessageBuilder(messageId,requestId, "arc0027:sign_message:response")
    .addResult(signResult)
    .get()

// Encode to CBOR
const encoded = encode(request)
// Encode CBOR to Base64URL
const messageString = toBase64URL(encoded)
```

