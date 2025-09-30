import { AttachmentAVApi, Configuration } from '@attachmentav/virus-scan-sdk-ts';

const config = new Configuration({
  apiKey: '<API_KEY_PLACEHOLDER>'
});

const api = new AttachmentAVApi(config);

await api.scanAsyncDownloadPost({
  asyncDownloadScanRequest: {
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    callbackUrl: 'https://api.yourcompany.com/attachmentav/callback'
  }
});
console.log('Async download submitted');
