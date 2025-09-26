import { AttachmentAVApi, Configuration } from '@attachmentav/virus-scan-sdk-ts';
import { readFileSync } from 'node:fs';
import { Blob } from 'node:buffer';

const config = new Configuration({
  apiKey: '<API_KEY_PLACEHOLDER>'
});

const api = new AttachmentAVApi(config);

const scanResult = await api.scanSyncBinaryPost({
  body: new Blob([readFileSync('/path/to/file')])
});
console.log('Sync binary scan result:', scanResult);
