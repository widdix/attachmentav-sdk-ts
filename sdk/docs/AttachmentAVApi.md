# AttachmentAVApi

All URIs are relative to *https://eu.developer.attachmentav.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**callbackFailuresGet**](AttachmentAVApi.md#callbackfailuresget) | **GET** /callback/failures |  |
| [**scanAsyncDownloadPost**](AttachmentAVApi.md#scanasyncdownloadpost) | **POST** /scan/async/download |  |
| [**scanAsyncResultGet**](AttachmentAVApi.md#scanasyncresultget) | **GET** /scan/async/result |  |
| [**scanAsyncS3Post**](AttachmentAVApi.md#scanasyncs3post) | **POST** /scan/async/s3 |  |
| [**scanSyncBinaryPost**](AttachmentAVApi.md#scansyncbinarypost) | **POST** /scan/sync/binary |  |
| [**scanSyncDownloadPost**](AttachmentAVApi.md#scansyncdownloadpost) | **POST** /scan/sync/download |  |
| [**scanSyncS3Post**](AttachmentAVApi.md#scansyncs3post) | **POST** /scan/sync/s3 |  |
| [**usageGet**](AttachmentAVApi.md#usageget) | **GET** /usage |  |
| [**whoamiGet**](AttachmentAVApi.md#whoamiget) | **GET** /whoami |  |



## callbackFailuresGet

> CallbackFailures callbackFailuresGet(callbackUrl, cursor)



List callback failures

### Example

```ts
import {
  Configuration,
  AttachmentAVApi,
} from '';
import type { CallbackFailuresGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AttachmentAVApi(config);

  const body = {
    // string | URL to receive the scan result via HTTPS POST
    callbackUrl: callbackUrl_example,
    // string | Use the next_cursor value from a previous response to page through failures (optional)
    cursor: cursor_example,
  } satisfies CallbackFailuresGetRequest;

  try {
    const data = await api.callbackFailuresGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **callbackUrl** | `string` | URL to receive the scan result via HTTPS POST | [Defaults to `undefined`] |
| **cursor** | `string` | Use the next_cursor value from a previous response to page through failures | [Optional] [Defaults to `undefined`] |

### Return type

[**CallbackFailures**](CallbackFailures.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scanAsyncDownloadPost

> scanAsyncDownloadPost(asyncDownloadScanRequest)



Download a file from a remote location (HTTP/HTTPS), scan the file, and post the scan result to your callback URL.

### Example

```ts
import {
  Configuration,
  AttachmentAVApi,
} from '';
import type { ScanAsyncDownloadPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AttachmentAVApi(config);

  const body = {
    // AsyncDownloadScanRequest
    asyncDownloadScanRequest: ...,
  } satisfies ScanAsyncDownloadPostRequest;

  try {
    const data = await api.scanAsyncDownloadPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **asyncDownloadScanRequest** | [AsyncDownloadScanRequest](AsyncDownloadScanRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  * Location - URL to scan result for polling <br>  |
| **204** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scanAsyncResultGet

> ScanResult scanAsyncResultGet(traceId)



Retrieve the scan result for scan job.

### Example

```ts
import {
  Configuration,
  AttachmentAVApi,
} from '';
import type { ScanAsyncResultGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AttachmentAVApi(config);

  const body = {
    // string | ID used when submitting the scan job.
    traceId: traceId_example,
  } satisfies ScanAsyncResultGetRequest;

  try {
    const data = await api.scanAsyncResultGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **traceId** | `string` | ID used when submitting the scan job. | [Defaults to `undefined`] |

### Return type

[**ScanResult**](ScanResult.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scanAsyncS3Post

> scanAsyncS3Post(asyncS3ScanRequest)



Download a file from S3, scan the file, and post the scan result to your callback URL. A bucket policy is required to grant attachmentAV access to the S3 objects.

### Example

```ts
import {
  Configuration,
  AttachmentAVApi,
} from '';
import type { ScanAsyncS3PostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AttachmentAVApi(config);

  const body = {
    // AsyncS3ScanRequest
    asyncS3ScanRequest: ...,
  } satisfies ScanAsyncS3PostRequest;

  try {
    const data = await api.scanAsyncS3Post(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **asyncS3ScanRequest** | [AsyncS3ScanRequest](AsyncS3ScanRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  * Location - URL to scan result for polling <br>  |
| **204** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scanSyncBinaryPost

> ScanResult scanSyncBinaryPost(body)



Upload a file, scan the file, and return the scan result.

### Example

```ts
import {
  Configuration,
  AttachmentAVApi,
} from '';
import type { ScanSyncBinaryPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AttachmentAVApi(config);

  const body = {
    // Blob
    body: BINARY_DATA_HERE,
  } satisfies ScanSyncBinaryPostRequest;

  try {
    const data = await api.scanSyncBinaryPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | `Blob` |  | |

### Return type

[**ScanResult**](ScanResult.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/octet-stream`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scanSyncDownloadPost

> ScanResult scanSyncDownloadPost(syncDownloadScanRequest)



Download a file from a remote location (HTTP/HTTPS), scan the file, and return the scan result.

### Example

```ts
import {
  Configuration,
  AttachmentAVApi,
} from '';
import type { ScanSyncDownloadPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AttachmentAVApi(config);

  const body = {
    // SyncDownloadScanRequest
    syncDownloadScanRequest: ...,
  } satisfies ScanSyncDownloadPostRequest;

  try {
    const data = await api.scanSyncDownloadPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **syncDownloadScanRequest** | [SyncDownloadScanRequest](SyncDownloadScanRequest.md) |  | |

### Return type

[**ScanResult**](ScanResult.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scanSyncS3Post

> ScanResult scanSyncS3Post(syncS3ScanRequest)



Download a file from S3, scan the file, and return the scan result. A bucket policy is required to grant attachmentAV access to the S3 objects.

### Example

```ts
import {
  Configuration,
  AttachmentAVApi,
} from '';
import type { ScanSyncS3PostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AttachmentAVApi(config);

  const body = {
    // SyncS3ScanRequest
    syncS3ScanRequest: ...,
  } satisfies ScanSyncS3PostRequest;

  try {
    const data = await api.scanSyncS3Post(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **syncS3ScanRequest** | [SyncS3ScanRequest](SyncS3ScanRequest.md) |  | |

### Return type

[**ScanResult**](ScanResult.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usageGet

> Usage usageGet()



Get remaining credits and quota.

### Example

```ts
import {
  Configuration,
  AttachmentAVApi,
} from '';
import type { UsageGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AttachmentAVApi(config);

  try {
    const data = await api.usageGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Usage**](Usage.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## whoamiGet

> Whoami whoamiGet()



Get information about yourself.

### Example

```ts
import {
  Configuration,
  AttachmentAVApi,
} from '';
import type { WhoamiGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AttachmentAVApi(config);

  try {
    const data = await api.whoamiGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Whoami**](Whoami.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

