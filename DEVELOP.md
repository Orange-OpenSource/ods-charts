# Developer Guide

## Local Development

- Install, build and serve the library from its documentation:

```bash
npm i
npm run serve
```

The server will be available at `http://localhost:3000/`:

- Build and serve for html test

```bash
npm i
npm run serve:any
```

## Tests updated dependencies

test lib dependencies updated

```bash
npm run install:lib
```

test angular-ngs-echarts dependencies updated

```bash
npm run install:angular-ngx-echarts
```

test any dependencies updated of "_project_" from angular-ngx-echarts, angular-ng-boosted, angular-echarts, react or vue projects

```bash
npm run install:_project_
```

## Formatting

Project uses Prettier for code formatting.

Run the following command to format the code:

```bash
npm run prettier:format
```

Run the following command to check if the code is formatted:

```bash
npm run prettier:check
```

Please make sure to run the `prettier:format` command before committing your changes. As a security measure, the CI will fail if the code is not formatted.

If you are using Visual Studio Code, you can install the Prettier extension. We have included a configuration file in the project that will automatically use the project's Prettier settings. You can enable the "Format on Save" option in the settings to format the code automatically when saving a file.

## Preview

- Each PR targetting main has a preview
- The main branch can be preview on https://ods-charts.netlify.app/
