import { AttachmentAVApi, Configuration } from '@attachmentav/virus-scan-sdk-ts';

const config = new Configuration({
  apiKey: '<API_KEY_PLACEHOLDER>'
});

const api = new AttachmentAVApi(config);

const scanResult = await api.scanSyncDownloadPost({
  syncDownloadScanRequest: {
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  }
});
console.log('Sync download scan result:', scanResult);
