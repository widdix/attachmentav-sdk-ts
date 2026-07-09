
# AsyncS3ScanRequest


## Properties

Name | Type
------------ | -------------
`bucket` | string
`key` | string
`version` | string
`callbackUrl` | string
`callbackHeaders` | { [key: string]: string; }
`traceId` | string
`customData` | string

## Example

```typescript
import type { AsyncS3ScanRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "bucket": null,
  "key": null,
  "version": null,
  "callbackUrl": null,
  "callbackHeaders": null,
  "traceId": null,
  "customData": null,
} satisfies AsyncS3ScanRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AsyncS3ScanRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


