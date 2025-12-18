# attachmentav-sdk-ts

An SDK to integrate virus and malware scan capabilities into JavaScript / TypeScript applications. Scan files for viruses, trojans, and other kinds of malware with [attachmentAV](https://attachmentav.com) powered by Sophos.

## Getting started

First, install the module.

```bash
npm i @attachmentav/virus-scan-sdk-ts
```

Second, get an API key by [subscribing to the attachmentAV API (SaaS)](https://attachmentav.com/subscribe/api/).

Third, send a scan request. Make sure to replace the `API_KEY_PLACEHOLDER` placeholder.

```javascript
import { AttachmentAVApi, Configuration } from '@attachmentav/virus-scan-sdk-ts';
import { readFileSync } from 'node:fs';
import { Blob } from 'node:buffer';

const config = new Configuration({
  // When using the SaaS offering
  apiKey: '<API_KEY_PLACEHOLDER>'
  // When using the self-hosted offering, replace attachmentav.yourcompany.com with the domain name of your attachmentAV API installation: https://attachmentav.com/help/virus-malware-scan-api-aws/developer/definition.html#domain-name
  //accessToken: '<API_KEY_PLACEHOLDER>',
  //basePath: 'https://attachmentav.yourcompany.com/api/v1'
});

const api = new AttachmentAVApi(config);

const scanResult = await api.scanSyncBinaryPost({
  body: new Blob([readFileSync('/path/to/file')])
});
console.log('Sync binary scan result:', scanResult);
```

The request returns a scan result similar to the following example.

```
Sync binary scan result: {
  status: 'clean',
  finding: undefined,
  size: 8100,
  realfiletype: 'ASCII text / 8-bit Unicode Transformation Format'
}
```

## What is attachmentAV?

[attachmentAV](https://attachmentav.com) offers antivirus for SaaS and cloud platforms. Scan your files and attachments stored in the cloud for viruses, worms, and trojans. attachmentAV detects malware in real-time. Supports Amazon S3, Atlassian, Cloudflare R2, Salesforce, WordPress, and more.

The [attachmentAV Virus and Malware Scan API](https://attachmentav.com/solution/virus-malware-scan-api/) provides a REST API that allows you to integrate malware scans into your application. The solution comes in two variants:

* [attachmentAV Virus Scan API (SaaS)](https://attachmentav.com/help/virus-malware-scan-api/setup-guide/): Get started quickly with a fully managed service.
* [attachmentAV Virus Scan API (self-hosted on AWS)](https://attachmentav.com/help/virus-malware-scan-api-aws/setup-guide/): Deploy the production-ready API on AWS.

attachmentAV raises the bar for information security. Our solution is ISO 27001 certified and GDPR compliant. We are establishing, implementing, maintaining, and continually improving an information security management system (ISMS). Sensitive data is encrypted in transit as well as at rest and deleted immediately after processing. More than 1,000 customers trust our malware protection technology.

## Install SDK

```sh
npm i @attachmentav/virus-scan-sdk-ts
```

## Configure SDK

### Configure SDK (SaaS)

An [active subscription and API key](https://attachmentav.com/help/virus-malware-scan-api/setup-guide/#api-key) are required. Replace `<API_KEY_PLACEHOLDER>` with the API key.

```javascript
import { AttachmentAVApi, Configuration } from '@attachmentav/virus-scan-sdk-ts';

const config = new Configuration({
  apiKey: '<API_KEY_PLACEHOLDER>',
});

const api = new AttachmentAVApi(config);
```

### Configure SDK (self-hosted on AWS)

When following the setup guide, you specified the `ApiKeys` parameter for the CloudFormation stack. Replace `<API_KEY_PLACEHOLDER>` with one of those keys. 

```javascript
import { AttachmentAVApi, Configuration } from '@attachmentav/virus-scan-sdk-ts';

const config = new Configuration({
  accessToken: '<API_KEY_PLACEHOLDER>',
  basePath: 'https://example.com/api/v1'
});

const api = new AttachmentAVApi(config);
```

## Examples


### Sync Scan: File

Send a file to the attachmentAV Virus Scan API and process the scan result.

See [ScanResult](sdk/models/ScanResult.ts) for details.

The maximum file size is 10 MB. The request timeout is 60 seconds.

```javascript
const scanResult = await api.scanSyncBinaryPost({
  body: new Blob([readFileSync('/path/to/file')])
});
console.log('Sync binary scan result:', scanResult);
```

Find full example: [ts](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/sync-binary.ts), [mjs](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/sync-binary.mjs), [cjs](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/sync-binary.cjs)

### Sync Scan: Download

Send a URL to the attachmentAV Virus Scan API. attachmentAV will download the file and return the scan result immediately.


See [SyncDownloadScanRequest](sdk/models/SyncDownloadScanRequest.ts) and [ScanResult](sdk/models/ScanResult.ts) for details.

The maximum file size is 10 MB. The request timeout is 60 seconds.

```javascript
const scanResult = await api.scanSyncDownloadPost({
  syncDownloadScanRequest: {
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  }
});
console.log('Sync download scan result:', scanResult);
```

Find full example: [ts](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/sync-download.ts), [mjs](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/sync-download.mjs), [cjs](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/sync-download.cjs)

### Sync Scan: S3

Send an S3 bucket name and object key to the attachmentAV Virus Scan API. attachmentAV will download the file and return the scan result immediately.

See [SyncS3ScanRequest](sdk/models/SyncS3ScanRequest.ts) and [ScanResult](sdk/models/ScanResult.ts) for details.

The maximum file size is 10 MB. The request timeout is 60 seconds.

> A [bucket policy](https://attachmentav.com/help/virus-malware-scan-api/setup-guide/#s3-bucket-policy) is required to grant attachmentAV access to private S3 objects.

```javascript
const scanResult = await api.scanSyncS3Post({
  syncS3ScanRequest: {
    bucket: '<BUCKET_NAME_PLACEHOLDER>',
    key: '<OBJECT_KEY_PLACEHOLDER>'
  }
});
console.log('Sync S3 scan result:', scanResult);
```

Find full example: [ts](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/sync-s3.ts), [mjs](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/sync-s3.mjs), [cjs](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/sync-s3.cjs)

### Async Scan: Download (callback)

Send a URL to the attachmentAV Virus Scan API. attachmentAV will download the file and send the scan result to the [callback](https://attachmentav.com/help/virus-malware-scan-api/developer/definition.html#callback).

See [AsyncDownloadScanRequest](sdk/models/AsyncDownloadScanRequest.ts) for details.

The maximum file size is 5 GB. The request timeout is 29 seconds; the asynchronous scan job is not affected by this limit.

> Not supported by attachmentAV Virus Scan API (Self-hosted on AWS) yet. Contact [hello@attachmentav.com](hello@attachmentav.com) to let us know, in case you need this feature. 

```javascript
await api.scanAsyncDownloadPost({
  asyncDownloadScanRequest: {
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    callbackUrl: 'https://api.yourcompany.com/attachmentav/callback'
  }
});
console.log('Async download submitted');
```

Find full example: [ts](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/async-download.ts), [mjs](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/async-download.mjs), [cjs](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/async-download.cjs)

### Async Scan: Download (polling)

Send a URL to the attachmentAV Virus Scan API. attachmentAV will download the file and store the scan result for 24 hours.

See [AsyncDownloadScanRequest](sdk/models/AsyncDownloadScanRequest.ts) for details.

The maximum file size is 5 GB. The request timeout is 29 seconds; the asynchronous scan job is not affected by this limit.

> Not supported by attachmentAV Virus Scan API (Self-hosted on AWS) yet. Contact [hello@attachmentav.com](hello@attachmentav.com) to let us know, in case you need this feature. 

```javascript
const traceId = crypto.randomUUID();

await api.scanAsyncDownloadPost({
  asyncDownloadScanRequest: {
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    traceId
  }
});
console.log('Async download submitted.');

// wait some time...

const scanResult = await api.scanAsyncResultGet({
  traceId
});
console.log('Async download scan result:', scanResult);
```

Find full example: [ts](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/async-download-polling.ts), [mjs](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/async-download-polling.mjs), [cjs](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/async-download-polling.cjs)

### Async Scan: S3 (callback)

Send an S3 bucket name and object key to the attachmentAV Virus Scan API. attachmentAV will download the file and send the scan result to the [callback](https://attachmentav.com/help/virus-malware-scan-api/developer/definition.html#callback).

See [AsyncS3ScanRequest](sdk/models/AsyncS3ScanRequest.ts) for details.

The maximum file size is 5 GB. The request timeout is 29 seconds; the asynchronous scan job is not affected by this limit.

> A [bucket policy](https://attachmentav.com/help/virus-malware-scan-api/setup-guide/#s3-bucket-policy) is required to grant attachmentAV access to private S3 objects.

> Not supported by attachmentAV Virus Scan API (Self-hosted on AWS) yet. Contact [hello@attachmentav.com](hello@attachmentav.com) to let us know, in case you need this feature.

```javascript
await api.scanAsyncS3Post({
  asyncS3ScanRequest: {
    bucket: '<BUCKET_NAME_PLACEHOLDER>',
    key: '<OBJECT_KEY_PLACEHOLDER>',
    callbackUrl: 'https://api.yourcompany.com/attachmentav/callback'
  }
});
console.log('Async S3 submitted');
```

Find full example: [ts](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/async-s3.ts), [mjs](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/async-s3.mjs), [cjs](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/async-s3.cjs)

### Async Scan: S3 (polling)


Send an S3 bucket name and object key to the attachmentAV Virus Scan API. attachmentAV will download the file and store the scan result for 24 hours.

See [AsyncS3ScanRequest](sdk/models/AsyncS3ScanRequest.ts) for details.

The maximum file size is 5 GB. The request timeout is 29 seconds; the asynchronous scan job is not affected by this limit.

> A [bucket policy](https://attachmentav.com/help/virus-malware-scan-api/setup-guide/#s3-bucket-policy) is required to grant attachmentAV access to private S3 objects.

> Not supported by attachmentAV Virus Scan API (Self-hosted on AWS) yet. Contact [hello@attachmentav.com](hello@attachmentav.com) to let us know, in case you need this feature.

```javascript
const traceId = crypto.randomUUID();

await api.scanAsyncS3Post({
  asyncS3ScanRequest: {
    bucket: '<BUCKET_NAME_PLACEHOLDER>',
    key: '<OBJECT_KEY_PLACEHOLDER>',
    traceId
  }
});
console.log('Async S3 submitted.');

// wait some time...

const scanResult = await api.scanAsyncResultGet({
  traceId
});
console.log('Async download scan result:', scanResult);
```

Find full example: [ts](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/async-s3-polling.ts), [mjs](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/async-s3-polling.mjs), [cjs](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/async-s3-polling.cjs)


### Who AM I

Get information abour yourself.

See [Whoami](sdk/models/Whoami.ts) for details.

> Not supported by attachmentAV Virus Scan API (Self-hosted on AWS).

```javascript
const res = await api.whoamiGet();
console.log('Who am I?', res);
```

Find full example: [ts](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/whoami.ts), [mjs](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/whoami.mjs), [cjs](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/whoami.cjs)

### Usage

Get remaining credits and quota.

See [Usage](sdk/models/Usage.ts) for details.

> Not supported by attachmentAV Virus Scan API (Self-hosted on AWS).

```javascript
const res = await api.usageGet();
console.log('Usage', res);
```

Find full example: [ts](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/usage.ts), [mjs](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/usage.mjs), [cjs](https://github.com/widdix/attachmentav-sdk-ts/blob/main/examples/usage.cjs)

## Model

For more details about the data model, please refer to the following pages.

* [AsyncDownloadScanRequest](sdk/models/AsyncDownloadScanRequest.ts)
* [AsyncS3ScanRequest](sdk/models/AsyncS3ScanRequest.ts)
* [ScanResult](sdk/models/ScanResult.ts)
* [SyncDownloadScanRequest](sdk/models/SyncDownloadScanRequest.ts)
* [SyncS3ScanRequest](sdk/models/SyncS3ScanRequest.ts)
* [Usage](sdk/models/Usage.ts)
* [Whoami](sdk/models/Whoami.ts)
* [AttachmentAVApi](sdk/apis/AttachmentAVApi.ts)

## Need help?

Do you need any help to get started with attachmentAV? [hello@attachmentav.com](mailto:hello@attachmentav.com).
