const { AttachmentAVApi, Configuration } = require('@attachmentav/virus-scan-sdk-ts');

const config = new Configuration({
  apiKey: '<API_KEY_PLACEHOLDER>'
});
const api = new AttachmentAVApi(config);

api.usageGet().then(res => {
  console.log('Usage', res);
});
