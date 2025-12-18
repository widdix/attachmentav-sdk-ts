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

api.scanAsyncDownloadPost({
  asyncDownloadScanRequest: {
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    traceId
  }
})
  .then(() => console.log('Async download submitted. Try to get scan result in 5 seconds...'))
  .then(() => sleep(5000))
  .then(() => api.scanAsyncResultGet({
      traceId
    }))
  .then((scanResult) => console.log('Async download scan result:', scanResult));
