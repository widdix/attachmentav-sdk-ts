const { AttachmentAVApi, Configuration } = require('@attachmentav/virus-scan-sdk-ts');

const config = new Configuration({
  apiKey: '<API_KEY_PLACEHOLDER>'
});

const api = new AttachmentAVApi(config);

api.scanSyncS3Post({
  syncS3ScanRequest: {
    bucket: '<BUCKET_NAME_PLACEHOLDER>',
    key: '<OBJECT_KEY_PLACEHOLDER>'
  }
}).then(scanResult => {
  console.log('Sync S3 scan result:', scanResult);
});
