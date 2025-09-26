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

## Publish

Use the following commands to publish a new version to the NPM registry.

```bash
npm run build
npm version minor
git push
npm publish --access public
```