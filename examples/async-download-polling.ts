import { AttachmentAVApi, Configuration, ResponseError } from '@attachmentav/virus-scan-sdk-ts';
import { randomUUID } from 'node:crypto';
import { exit } from 'node:process';

const config = new Configuration({
  apiKey: '<API_KEY_PLACEHOLDER>'
});

const api = new AttachmentAVApi(config);

const traceId = randomUUID();

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

await api.scanAsyncDownloadPost({
  asyncDownloadScanRequest: {
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    traceId
  }
});
console.log('Async download submitted. Start to poll for scan result...');

let i = 0;
while(true) {
  try {
    console.log('.');
    const scanResult = await api.scanAsyncResultGet({
      traceId
    });
    console.log('Async download scan result:', scanResult);
    exit(0)
  } catch (e: unknown) {
    if (e instanceof ResponseError) {
      if (e.response.status === 404) {
        i++;
        if (i < 10) {
          await sleep(500);
        } else {
          console.error('Async download scan result not found');
          exit(1);
        }
      } else {
        throw e;
      }
    } else {
      throw e;
    }
  }
}
