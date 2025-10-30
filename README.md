# attachmentav-sdk-ts

An SDK to integrate virus and malware scan capabilities into JavaScript / TypeScript applications. Scan files for viruses, trojans, and other kinds of malware with [attachmentAV](https://attachmentav.com) powered by Sophos.

## Getting started

First, install the module.

```sh
npm i @attachmentav/virus-scan-sdk-ts
```

Second, get an API key by [subscribing to the attachmentAV API (SaaS)](https://attachmentav.com/subscribe/api/).

Third, send a scan request. Make sure to replace the `API_KEY_PLACEHOLDER` placeholder.

```js
import { AttachmentAVApi, Configuration } from '@attachmentav/virus-scan-sdk-js';
import * as fs from 'fs';

const config = new Configuration({
  apiKey: '<API_KEY_PLACEHOLDER>'
});

const api = new AttachmentAVApi(config);

async function scanFile() {
  const fileBuffer = fs.readFileSync('./demo.txt');
  const blob = new Blob([fileBuffer]);
  const scanResult = await api.scanSyncBinaryPost({
    body: blob
  });
  console.log('Sync binary scan result:', scanResult);
}

scanFile();
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
  apiKey: '<API_KEY_PLACEHOLDER>',
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
const fileBuffer = fs.readFileSync('./README.md');
const blob = new Blob([fileBuffer]);

const scanResult = await api.scanSyncBinaryPost({
  body: blob
});
console.log('Sync binary scan result:', scanResult);
```

### Sync Scan: Download

Send a URL to the attachmentAV Virus Scan API. attachmentAV will download the file and return the scan result immediately.


See [SyncDownloadScanRequest](sdk/models/SyncDownloadScanRequest.ts) and [ScanResult](sdk/models/ScanResult.ts) for details.

The maximum file size is 10 MB. The request timeout is 60 seconds.


```javascript
const scanResult = await api.scanSyncDownloadPost({
  syncDownloadScanRequest: {
    downloadUrl: 'https://example.com/demo.txt'
  }
});
console.log('Sync download scan result:', scanResult);
```

### Sync Scan: S3

Send an S3 bucket name and object key to the attachmentAV Virus Scan API. attachmentAV will download the file and return the scan result immediately.

See [SyncS3ScanRequest](sdk/models/SyncS3ScanRequest.ts) and [ScanResult](sdk/models/ScanResult.ts) for details.

The maximum file size is 10 MB. The request timeout is 60 seconds.

> A [bucket policy](https://attachmentav.com/help/virus-malware-scan-api/setup-guide/#s3-bucket-policy) is required to grant attachmentAV access to private S3 objects.

```javascript
const scanResult = await api.scanSyncS3Post({
  syncS3ScanRequest: {
    bucket: 'example-bucket',
    key: 'demo.txt',
  }
});
console.log('Sync S3 scan result:', scanResult);
```

### Async Scan: Download

Send a URL to the attachmentAV Virus Scan API. attachmentAV will send the scan result to the callback URL. See [callback URL](https://attachmentav.com/help/virus-malware-scan-api/setup-guide/#callback-url) for details.

See [AsyncDownloadScanRequest](sdk/models/AsyncDownloadScanRequest.ts) for details.

The maximum file size is 5 GB. The request timeout is 29 seconds; the asynchronous scan job is not affected by this limit.

> Not supported by attachmentAV Virus Scan API (Self-hosted on AWS) yet. Contact [hello@attachmentav.com](hello@attachmentav.com) to let us know, in case you need this feature. 

```javascript
await api.scanAsyncDownloadPost({
  asyncDownloadScanRequest: {
    downloadUrl: 'https://example.com/demo.txt',
    callbackUrl: 'https://example.com/callback'
  }
});
console.log('Async download scan request submitted');
```

### Async Scan: S3

Send an S3 bucket name and object key to the attachmentAV Virus Scan API.  attachmentAV will send the scan result to the callback URL. See [callback URL](https://attachmentav.com/help/virus-malware-scan-api/setup-guide/#callback-url) for details.

See [AsyncS3ScanRequest](sdk/models/AsyncS3ScanRequest.ts) for details.

The maximum file size is 5 GB. The request timeout is 29 seconds; the asynchronous scan job is not affected by this limit.

> A [bucket policy](https://attachmentav.com/help/virus-malware-scan-api/setup-guide/#s3-bucket-policy) is required to grant attachmentAV access to private S3 objects.

> Not supported by attachmentAV Virus Scan API (Self-hosted on AWS) yet. Contact [hello@attachmentav.com](hello@attachmentav.com) to let us know, in case you need this feature.

```javascript
await api.scanAsyncS3Post({
  asyncS3ScanRequest: {
    bucket: 'example-bucket',
    key: 'demo.txt',
    callbackUrl: 'https://example.com/callback'
  }
});
console.log('Async S3 scan request submitted');
```

### Who AM I

Get information abour yourself.

See [Whoami](sdk/models/Whoami.ts) for details.

> Not supported by attachmentAV Virus Scan API (Self-hosted on AWS).

```javascript
const res = await api.whoamiGet();
console.log('Who Am I', res);
```

### Usage

Get remaining credits and quota.

See [Usage](sdk/models/Usage.ts) for details.

> Not supported by attachmentAV Virus Scan API (Self-hosted on AWS).

```javascript
const res = await api.whoamiGet();
console.log('Who Am I', res);
```

## Model

For more details about the data model, please refer to the following pages.

* [AsyncDownloadScanRequest](sdk/models/AsyncDownloadScanRequest.ts)
* [AsyncS3ScanRequest](sdk/models/AsyncS3ScanRequest.ts)
* [AttachmentAVApi](sdk/models/AttachmentAVApi.ts)
* [ScanResult](sdk/models/ScanResult.ts)
* [SyncDownloadScanRequest](sdk/models/SyncDownloadScanRequest.ts)
* [SyncS3ScanRequest](sdk/models/SyncS3ScanRequest.ts)
* [Whoami](sdk/models/Whoami.ts)
* [Usage](sdk/models/Usage.ts)

## Need help?

Do you need any help to get started with attachmentAV? [hello@attachmentav.com](mailto:hello@attachmentav.com).
