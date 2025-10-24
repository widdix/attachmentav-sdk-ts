An [active subscription and API key](https://attachmentav.com/help/virus-malware-scan-api/setup-guide/#api-key) is required. Replace `<API_KEY_PLACEHOLDER>` with your API key.

## JavaScript

### ESM

```bash
npm i @attachmentav/virus-scan-sdk-ts

node sync-download.mjs
node sync-binary.mjs
node sync-s3.mjs

node async-download.mjs
node async-s3.mjs

node verify-callback.mjs # Replace <CALLBACK_URL_PLACEHOLDER> as described in the code.

node whoami.mjs
```

### CommonJS

```bash
npm i @attachmentav/virus-scan-sdk-ts

node sync-download.cjs
node sync-binary.cjs
node sync-s3.cjs

node async-download.cjs
node async-s3.cjs

node verify-callback.cjs # Replace <CALLBACK_URL_PLACEHOLDER> as described in the code.

node whoami.cjs
```

## TypeScript

```bash
npm i @attachmentav/virus-scan-sdk-ts

npx tsx sync-download.ts
npx tsx sync-binary.ts
npx tsx sync-s3.ts

npx tsx async-download.ts
npx tsx async-s3.ts

npx tsx verify-callback.ts # Replace <CALLBACK_URL_PLACEHOLDER> as described in the code.

npx tsx whoami.ts
```
