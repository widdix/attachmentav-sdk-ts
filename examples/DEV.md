To run against the locally gernerated SDK, run the following commands in this folder:

```
cd ../
npm run build
cd examples/
```

And replace the following in the example:
* For ts: `import ... from '@attachmentav/virus-scan-sdk-ts'` with `import ... from '../sdk/index.mjs'`
* For mjs: `import ... from '@attachmentav/virus-scan-sdk-ts'` with `import ... from '../sdk/index.mjs'`
* For cts: `require('@attachmentav/virus-scan-sdk-ts')` with `require('../sdk/index')`
