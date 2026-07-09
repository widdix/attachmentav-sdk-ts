
# AsyncDownloadScanRequest


## Properties

Name | Type
------------ | -------------
`downloadUrl` | string
`downloadHeaders` | { [key: string]: string; }
`callbackUrl` | string
`callbackHeaders` | { [key: string]: string; }
`traceId` | string
`customData` | string

## Example

```typescript
import type { AsyncDownloadScanRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "downloadUrl": null,
  "downloadHeaders": null,
  "callbackUrl": null,
  "callbackHeaders": null,
  "traceId": null,
  "customData": null,
} satisfies AsyncDownloadScanRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AsyncDownloadScanRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


