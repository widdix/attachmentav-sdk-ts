const { AttachmentAVApi, Configuration, ResponseError } = require('@attachmentav/virus-scan-sdk-ts');
const { randomUUID } = require('node:crypto');
const { exit } = require('node:process');

const config = new Configuration({
  apiKey: '<API_KEY_PLACEHOLDER>'
});

const api = new AttachmentAVApi(config);

const traceId = randomUUID();

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

api.scanAsyncS3Post({
  asyncS3ScanRequest: {
    bucket: '<BUCKET_NAME_PLACEHOLDER>',
    key: '<OBJECT_KEY_PLACEHOLDER>',
    traceId
  }
})
  .then(() => console.log('Async S3 submitted. Try to get scan result in 5 seconds...'))
  .then(() => sleep(5000))
  .then(() => api.scanAsyncResultGet({
      traceId
    }))
  .then((scanResult) => console.log('Async S3 scan result:', scanResult));
