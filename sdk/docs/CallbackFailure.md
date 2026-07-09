
# CallbackFailure


## Properties

Name | Type
------------ | -------------
`id` | string
`time` | Date
`downloadUrl` | string
`callbackUrl` | string
`errorJson` | string

## Example

```typescript
import type { CallbackFailure } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "time": null,
  "downloadUrl": null,
  "callbackUrl": null,
  "errorJson": null,
} satisfies CallbackFailure

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CallbackFailure
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


