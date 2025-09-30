const { AttachmentAVApi, Configuration } = require('@attachmentav/virus-scan-sdk-ts');

const config = new Configuration({
  apiKey: '<API_KEY_PLACEHOLDER>'
});

const api = new AttachmentAVApi(config);

api.scanAsyncS3Post({
  asyncS3ScanRequest: {
    bucket: '<BUCKET_NAME_PLACEHOLDER>',
    key: '<OBJECT_KEY_PLACEHOLDER>',
    callbackUrl: 'https://api.yourcompany.com/attachmentav/callback'
  }
}).then(() => {
  console.log('Async S3 submitted');
});
