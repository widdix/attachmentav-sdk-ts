import { AttachmentAVApi, Configuration } from '@attachmentav/virus-scan-sdk-ts';
//import { AttachmentAVApi, Configuration } from '../dist/index.mjs';
import { readFileSync } from 'node:fs';

const config = new Configuration({
  apiKey: '<API_KEY_PLACEHOLDER>'
});

const api = new AttachmentAVApi(config);

async function scanSyncS3() {
  const scanResult = await api.scanSyncS3Post({
    syncS3ScanRequest: {
      bucket: 'example-bucket',
      key: 'demo.txt',
    }
  });
  console.log('Sync S3 scan result:', scanResult);
}

async function scanSyncBinary() {
  const fileBuffer = readFileSync('./demo.txt');
  const blob = new Blob([fileBuffer]);

  const scanResult = await api.scanSyncBinaryPost({
    body: blob
  });
  console.log('Sync binary scan result:', scanResult);
}

async function scanSyncDownload() {
  const scanResult = await api.scanSyncDownloadPost({
    syncDownloadScanRequest: {
      downloadUrl: 'https://example.com/demo.txt'
    }
  });
  console.log('Sync download scan result:', scanResult);
}

async function scanAsyncS3() {
  await api.scanAsyncS3Post({
    asyncS3ScanRequest: {
      bucket: 'example-bucket',
      key: 'demo.txt',
      callbackUrl: 'https://example.com/callback'
    }
  });
  console.log('Async S3 scan request submitted');
}

async function scanAsyncDownload() {
  await api.scanAsyncDownloadPost({
    asyncDownloadScanRequest: {
      downloadUrl: 'https://example.com/demo.txt',
      callbackUrl: 'https://example.com/callback'
    }
  });
  console.log('Async download scan request submitted');
}


await scanSyncS3();
await scanSyncBinary();
await scanSyncDownload();
await scanAsyncS3();
await scanAsyncDownload();
