import {AttachmentAVApi, Configuration} from '@attachmentav/virus-scan-sdk-ts';

const config = new Configuration({
  apiKey: '<API_KEY_PLACEHOLDER>'
});
const api = new AttachmentAVApi(config);

const res = await api.callbackFailuresGet({
  callbackUrl: 'https://api.yourcompany.com/attachmentav/callback'
});
console.log('Callback failures', res);
