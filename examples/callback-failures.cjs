const { AttachmentAVApi, Configuration } = require('@attachmentav/virus-scan-sdk-ts');

const config = new Configuration({
  apiKey: '<API_KEY_PLACEHOLDER>'
});
const api = new AttachmentAVApi(config);

api.callbackFailuresGet({
  callbackUrl: 'https://api.yourcompany.com/attachmentav/callback'
}).then((res) => {
  console.log('Callback failures', res);
});
