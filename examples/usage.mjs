import {AttachmentAVApi, Configuration} from '@attachmentav/virus-scan-sdk-ts';

const config = new Configuration({
  apiKey: '<API_KEY_PLACEHOLDER>'
});
const api = new AttachmentAVApi(config);

const res = await api.usageGet();
console.log('Usage', res);

