const { AttachmentAVApi, Configuration } = require('@attachmentav/virus-scan-sdk-ts');
const { readFileSync } = require('node:fs');
const { Blob } = require('node:buffer');

const config = new Configuration({
  // When using the SaaS offering
  apiKey: '<API_KEY_PLACEHOLDER>'
  // When using the self-hosted offering, replace attachmentav.yourcompany.com with the domain name of your attachmentAV API installation: https://attachmentav.com/help/virus-malware-scan-api-aws/developer/definition.html#domain-name
  //accessToken: '<API_KEY_PLACEHOLDER>',
  //basePath: 'https://attachmentav.yourcompany.com/api/v1'
});

const api = new AttachmentAVApi(config);

api.scanSyncBinaryPost({
  body: new Blob([readFileSync('/path/to/file')])
}).then(scanResult => {
  console.log('Sync binary scan result:', scanResult);
});
