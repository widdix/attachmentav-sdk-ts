const { AttachmentAVApi, Configuration } = require('@attachmentav/virus-scan-sdk-ts');
const { readFileSync } = require('node:fs');
const { Blob } = require('node:buffer');

const config = new Configuration({
  apiKey: '<API_KEY_PLACEHOLDER>'
});

const api = new AttachmentAVApi(config);

api.scanSyncBinaryPost({
  body: new Blob([readFileSync('/path/to/file')])
}).then(scanResult => {
  console.log('Sync binary scan result:', scanResult);
});
