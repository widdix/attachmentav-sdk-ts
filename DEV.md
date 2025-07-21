# Development

## Generate SDK

To generate the SDK use the following command.

```
openapi-generator generate -i api.yml -g typescript-fetch -o ./sdk
```

It might be necessary to re-generate the `sdk` from time to time.

```
rm -fR sdk
```

After doing so, make sure to add the `sdk/package.json` afterwards.

```json
{
  "name": "@attachmentav/virus-scan-sdk-ts",
  "version": "0.1.0",
  "description": "An SDK to integrate virus and malware scan capabilities into TypeScript applications. Scan files for viruses, trojans, and other kinds of malware with attachmentAV powered by Sophos.",
  "main": "index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/widdix/attachmentav-sdk-ts.git"
  },
  "keywords": [
    "virus",
    "malware",
    "scan",
    "attachment",
    "scanner",
    "sdk",
    "typescript"
  ],
  "author": "Andreas Wittig",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/widdix/attachmentav-sdk-ts/issues"
  },
  "homepage": "https://github.com/widdix/attachmentav-sdk-ts#readme"
}
```



## Publish

Use the following commands to publis a new version to the NPM registry.

```
cd sdk
cp ../README.md .
npm publish --access public
```