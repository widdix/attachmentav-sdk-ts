import {AttachmentAVApi, Configuration} from '@attachmentav/virus-scan-sdk-ts';
import {createPublicKey, createVerify} from 'node:crypto';
import {createServer} from 'node:http';

const SIGNATURE_TOLERANCE_IN_MILLIS = 5 * 60 * 1000;

const API_KEY = '<API_KEY_PLACEHOLDER>';

// To make your server runmning on localhost accessible from the Internet, we recommend to use ngrok.
// 1. Install and configure it as described here: https://ngrok.com/docs/getting-started
// 2. In your terminal, run:
// ngrok http 8081
// 3. Insert the ngrok URL (e.g. https://42d3a8497f95.ngrok-free.app) below:
const CALLBACK_URL = '<CALLBACK_URL_PLACEHOLDER>';

const PUBLIC_KEY_PEM = `-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEAyLoZzjo1cQV9ZN2TH/alrxWiQ3u/ndT0HMrLMdBTVO3Tz1nUjLt6
SqKZsN8dQhvPoEjfyhCTEg7MPWopG3n0cf3NRxtoeXy/Z62b1zdUd426kMuKOQP8
Yy6cxa/RtK2tkHCnTGxjfvNmMK+m68sFmsilR88LnIN71my4cG8bIDGDftWublvK
AEOWhxSECYn1XEtyrQL5lm8HFnHdE9ys56xTJkdr5Mmkvanrnd/hXzTHzjruGcLv
bjciI82+Z335AzYgJcnmH4/zsBuyPL2FJSfQF9NsPaTJuQgkw1usAKBQcujcEriY
UDNWgTe1a+LOnCEMb+9mAYw8lMRYRd3CBwIDAQAB
-----END RSA PUBLIC KEY-----`;

const config = new Configuration({
  apiKey: API_KEY
});
const api = new AttachmentAVApi(config);

const {tenantId: TENANT_ID} = await api.whoamiGet(); // the tenantId never changes. we recommend to hard code it to avoid yet another HTTPS call.
//const TENANT_ID = '<TENANT_ID_PLACEHOLDER>';

function verify(unixtimeInMillis, publicKeyPEM, timestamp, tenantId, callbackUrl, body, signature) {
  const publicKey = createPublicKey({
    key: publicKeyPEM,
    format: 'pem',
    type: 'pkcs1'
  });
  const verify = createVerify('sha256');
  verify.update(timestamp);
  verify.update('.');
  verify.update(tenantId);
  verify.update('.');
  verify.update(callbackUrl);
  verify.update('.');
  verify.update(body);
  verify.end();
  const valid = verify.verify(publicKey, signature, 'hex');
  return valid && Math.abs(unixtimeInMillis-parseInt(timestamp, 10)) <= SIGNATURE_TOLERANCE_IN_MILLIS;
}

const server = createServer((req, res) => {
  const chunks = [];
  req.on('data', (chunk) => {
    chunks.push(chunk);
  });
  req.on('end', () => {
    const body = Buffer.concat(chunks).toString();
    if (verify(Date.now(), PUBLIC_KEY_PEM, req.headers['x-timestamp'], TENANT_ID, CALLBACK_URL, body, req.headers['x-signature'])) {
      res.writeHead(204);
      res.end();
      console.log('Received valid callback', body);
    } else {
      res.writeHead(403);
      res.end();
      console.error('Received invalid callback', body);
    }
    server.close();
  });

});
server.listen(8081);

await api.scanAsyncDownloadPost({
  asyncDownloadScanRequest: {
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    callbackUrl: CALLBACK_URL
  }
});
console.log('Async download submitted');
