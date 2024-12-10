import { ODSChartsCSSThemesNames } from '../css-themes/css-themes';

const BOOSTED5_VARIABLE = `
.ods-charts-context {
  color-scheme: light;
  --bs-black: #000;
  --bs-white: #fff;
  --bs-gray-500: #ccc;
  --bs-gray-700: #666;
  --bs-gray-950: #141414;
  --bs-body-color: #000;
  --bs-body-color-rgb: 0, 0, 0;
  --bs-body-bg: #fff;
  --bs-body-bg-rgb: 255, 255, 255;
  --bs-link-color: #000;
  --bs-border-width: 0.125rem;
  --bs-border-color: #000;
  --bs-border-color-subtle: #ccc;
}

[data-bs-theme=dark] .ods-charts-context {
  color-scheme: dark;
  --bs-body-color: #fff;
  --bs-body-color-rgb: 255, 255, 255;
  --bs-body-bg: #141414;
  --bs-body-bg-rgb: 20, 20, 20;
  --bs-link-color: #fff;
  --bs-border-color: #fff;
  --bs-border-color-subtle: #666;
}


[data-bs-theme] .ods-charts-context {
    color: var(--bs-body-color);
    background-color: var(--bs-body-bg);
}


[data-bs-theme] .ods-charts-context a {
    color: var(--bs-link-color);
}
`;

const NON_BOOSTED5_VARIABLE = `
.ods-charts-context {
  --ods-yellow-100: #fff6b6;
  --ods-yellow-200: #ffe45b;
  --ods-yellow-300: #ffd200;
  --ods-yellow-400: #ffb400;
  --ods-yellow-500: #b98f11;
  --ods-yellow-600: #9d6e06;

  --ods-yellow-1: var(--ods-yellow-600);
  --ods-yellow-2: var(--ods-yellow-500);
  --ods-yellow-3: var(--ods-yellow-400);
  --ods-yellow-4: var(--ods-yellow-300);
  --ods-yellow-5: var(--ods-yellow-200);
  --ods-yellow-6: var(--ods-yellow-100);
}
  
[data-bs-theme=dark] .ods-charts-context {
  --ods-yellow-1: var(--ods-yellow-100);
  --ods-yellow-1: var(--ods-yellow-100);
  --ods-yellow-3: var(--ods-yellow-300);
  --ods-yellow-4: var(--ods-yellow-400);
  --ods-yellow-5: var(--ods-yellow-500);
  --ods-yellow-6: var(--ods-yellow-600);
}
`;

export const ODS_CHARTS_CSS_VARIABLES: { [theme in ODSChartsCSSThemesNames]: string } = {
  BOOSTED4: `
  ${BOOSTED5_VARIABLE}
  ${NON_BOOSTED5_VARIABLE}
  `,
  BOOSTED5: `
  ${NON_BOOSTED5_VARIABLE}  
  `,
  CUSTOM: `
  ${BOOSTED5_VARIABLE}
  ${NON_BOOSTED5_VARIABLE}
  `,
  NONE: `
  ${BOOSTED5_VARIABLE}
  ${NON_BOOSTED5_VARIABLE}
  `,
};
