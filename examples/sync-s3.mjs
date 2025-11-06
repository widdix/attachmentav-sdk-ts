import { AttachmentAVApi, Configuration } from '@attachmentav/virus-scan-sdk-ts';

const config = new Configuration({
  // When using the SaaS offering
  apiKey: '<API_KEY_PLACEHOLDER>'
  // When using the self-hosted offering, replace attachmentav.yourcompany.com with the domain name of your attachmentAV API installation: https://attachmentav.com/help/virus-malware-scan-api-aws/developer/definition.html#domain-name
  //accessToken: '<API_KEY_PLACEHOLDER>',
  //basePath: 'https://attachmentav.yourcompany.com/api/v1'
});

const api = new AttachmentAVApi(config);

const scanResult = await api.scanSyncS3Post({
  syncS3ScanRequest: {
    bucket: '<BUCKET_NAME_PLACEHOLDER>',
    key: '<OBJECT_KEY_PLACEHOLDER>'
  }
});
console.log('Sync S3 scan result:', scanResult);
