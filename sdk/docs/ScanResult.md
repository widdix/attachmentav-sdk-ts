
# ScanResult


## Properties

Name | Type
------------ | -------------
`status` | string
`finding` | string
`size` | number
`realfiletype` | string

## Example

```typescript
import type { ScanResult } from ''

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "finding": null,
  "size": null,
  "realfiletype": null,
} satisfies ScanResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScanResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


