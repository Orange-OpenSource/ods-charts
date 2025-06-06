//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

export const ODS_CHARTS_CONTEXT = `
.ods-charts-context, [data-bs-theme=light] .ods-charts-context, .ods-charts-context[data-bs-theme=light] {
  color-scheme: light;
  --ouds-charts-color-border: #ffffff;
  --ouds-charts-color-border-contrast: #ffffff;
  --ouds-charts-color-categorical-tier-1: #5b2f98;
  --ouds-charts-color-categorical-tier-10: #009bf0;
  --ouds-charts-color-categorical-tier-2: #3ba06e;
  --ouds-charts-color-categorical-tier-3: #b20077;
  --ouds-charts-color-categorical-tier-4: #a38200;
  --ouds-charts-color-categorical-tier-5: #007abd;
  --ouds-charts-color-categorical-tier-6: #8d60cd;
  --ouds-charts-color-categorical-tier-7: #2e7b54;
  --ouds-charts-color-categorical-tier-8: #e50099;
  --ouds-charts-color-categorical-tier-9: #665100;
  --ouds-charts-color-functional-info: #009bf0;
  --ouds-charts-color-functional-negative: #db0002;
  --ouds-charts-color-functional-positive: #17a02f;
  --ouds-charts-color-functional-warning: #a38200;
  --ouds-charts-color-gridlines: #cccccc;
  --ouds-charts-color-highlight: #f15e00;
  --ouds-charts-color-neutral: #8f8f8f;
  --ouds-charts-color-sequential-accent-1-tint-100: #d2ecf9;
  --ouds-charts-color-sequential-accent-1-tint-200: #a5daf3;
  --ouds-charts-color-sequential-accent-1-tint-300: #79c7ec;
  --ouds-charts-color-sequential-accent-1-tint-400: #4ab4e6;
  --ouds-charts-color-sequential-accent-1-tint-500: #1fa2e0;
  --ouds-charts-color-sequential-accent-1-tint-600: #1982b3;
  --ouds-charts-color-sequential-accent-1-tint-700: #136186;
  --ouds-charts-color-sequential-accent-1-tint-800: #0c415a;
  --ouds-charts-color-sequential-accent-1-tint-900: #06202d;
  --ouds-charts-color-sequential-accent-2-tint-100: #e5f5ed;
  --ouds-charts-color-sequential-accent-2-tint-200: #c0e8d4;
  --ouds-charts-color-sequential-accent-2-tint-300: #9bdaba;
  --ouds-charts-color-sequential-accent-2-tint-400: #75cca1;
  --ouds-charts-color-sequential-accent-2-tint-500: #50be87;
  --ouds-charts-color-sequential-accent-2-tint-600: #3ba06e;
  --ouds-charts-color-sequential-accent-2-tint-700: #2e7b54;
  --ouds-charts-color-sequential-accent-2-tint-800: #20563b;
  --ouds-charts-color-sequential-accent-2-tint-900: #123021;
  --ouds-charts-color-sequential-accent-3-tint-100: #ffe5f6;
  --ouds-charts-color-sequential-accent-3-tint-200: #ffb4e6;
  --ouds-charts-color-sequential-accent-3-tint-300: #ff80d4;
  --ouds-charts-color-sequential-accent-3-tint-400: #ff4dc3;
  --ouds-charts-color-sequential-accent-3-tint-500: #ff1ab2;
  --ouds-charts-color-sequential-accent-3-tint-600: #e50099;
  --ouds-charts-color-sequential-accent-3-tint-700: #b20077;
  --ouds-charts-color-sequential-accent-3-tint-800: #800055;
  --ouds-charts-color-sequential-accent-3-tint-900: #4d0033;
  --ouds-charts-color-sequential-accent-4-tint-100: #f1ecf9;
  --ouds-charts-color-sequential-accent-4-tint-200: #e0d4f2;
  --ouds-charts-color-sequential-accent-4-tint-300: #c5ade6;
  --ouds-charts-color-sequential-accent-4-tint-400: #a885d8;
  --ouds-charts-color-sequential-accent-4-tint-500: #8d60cd;
  --ouds-charts-color-sequential-accent-4-tint-600: #5b2f98;
  --ouds-charts-color-sequential-accent-4-tint-700: #432371;
  --ouds-charts-color-sequential-accent-4-tint-800: #2c174a;
  --ouds-charts-color-sequential-accent-4-tint-900: #150b23;
  --ouds-charts-color-sequential-accent-5-tint-100: #fff0cc;
  --ouds-charts-color-sequential-accent-5-tint-200: #ffe199;
  --ouds-charts-color-sequential-accent-5-tint-300: #ffd266;
  --ouds-charts-color-sequential-accent-5-tint-400: #ffc333;
  --ouds-charts-color-sequential-accent-5-tint-500: #ffb400;
  --ouds-charts-color-sequential-accent-5-tint-600: #cc9000;
  --ouds-charts-color-sequential-accent-5-tint-700: #996c00;
  --ouds-charts-color-sequential-accent-5-tint-800: #664800;
  --ouds-charts-color-sequential-accent-5-tint-900: #332400;
}

[data-bs-theme=dark] .ods-charts-context, .ods-charts-context[data-bs-theme=dark] {
  color-scheme: dark;
  --ouds-charts-color-border: #141414;
  --ouds-charts-color-border-contrast: #000000;
  --ouds-charts-color-categorical-tier-1: #a885d8;
  --ouds-charts-color-categorical-tier-10: #1fa2e0;
  --ouds-charts-color-categorical-tier-2: #50be87;
  --ouds-charts-color-categorical-tier-3: #ff80d4;
  --ouds-charts-color-categorical-tier-4: #cc9000;
  --ouds-charts-color-categorical-tier-5: #79c7ec;
  --ouds-charts-color-categorical-tier-6: #8d60cd;
  --ouds-charts-color-categorical-tier-7: #9bdaba;
  --ouds-charts-color-categorical-tier-8: #ff4dc3;
  --ouds-charts-color-categorical-tier-9: #ffd266;
  --ouds-charts-color-functional-info: #26b2ff;
  --ouds-charts-color-functional-negative: #ff4d4e;
  --ouds-charts-color-functional-positive: #1ecd3c;
  --ouds-charts-color-functional-warning: #ffd000;
  --ouds-charts-color-gridlines: #666666;
  --ouds-charts-color-highlight: #ff7900;
  --ouds-charts-color-neutral: #858585;
  --ouds-charts-color-sequential-accent-1-tint-100: #06202d;
  --ouds-charts-color-sequential-accent-1-tint-200: #0c415a;
  --ouds-charts-color-sequential-accent-1-tint-300: #136186;
  --ouds-charts-color-sequential-accent-1-tint-400: #1982b3;
  --ouds-charts-color-sequential-accent-1-tint-500: #1fa2e0;
  --ouds-charts-color-sequential-accent-1-tint-600: #4ab4e6;
  --ouds-charts-color-sequential-accent-1-tint-700: #79c7ec;
  --ouds-charts-color-sequential-accent-1-tint-800: #a5daf3;
  --ouds-charts-color-sequential-accent-1-tint-900: #d2ecf9;
  --ouds-charts-color-sequential-accent-2-tint-100: #123021;
  --ouds-charts-color-sequential-accent-2-tint-200: #20563b;
  --ouds-charts-color-sequential-accent-2-tint-300: #2e7b54;
  --ouds-charts-color-sequential-accent-2-tint-400: #3ba06e;
  --ouds-charts-color-sequential-accent-2-tint-500: #50be87;
  --ouds-charts-color-sequential-accent-2-tint-600: #75cca1;
  --ouds-charts-color-sequential-accent-2-tint-700: #9bdaba;
  --ouds-charts-color-sequential-accent-2-tint-800: #c0e8d4;
  --ouds-charts-color-sequential-accent-2-tint-900: #e5f5ed;
  --ouds-charts-color-sequential-accent-3-tint-100: #4d0033;
  --ouds-charts-color-sequential-accent-3-tint-200: #800055;
  --ouds-charts-color-sequential-accent-3-tint-300: #b20077;
  --ouds-charts-color-sequential-accent-3-tint-400: #e50099;
  --ouds-charts-color-sequential-accent-3-tint-500: #ff1ab2;
  --ouds-charts-color-sequential-accent-3-tint-600: #ff4dc3;
  --ouds-charts-color-sequential-accent-3-tint-700: #ff80d4;
  --ouds-charts-color-sequential-accent-3-tint-800: #ffb4e6;
  --ouds-charts-color-sequential-accent-3-tint-900: #ffe5f6;
  --ouds-charts-color-sequential-accent-4-tint-100: #150b23;
  --ouds-charts-color-sequential-accent-4-tint-200: #2c174a;
  --ouds-charts-color-sequential-accent-4-tint-300: #432371;
  --ouds-charts-color-sequential-accent-4-tint-400: #5b2f98;
  --ouds-charts-color-sequential-accent-4-tint-500: #8d60cd;
  --ouds-charts-color-sequential-accent-4-tint-600: #a885d8;
  --ouds-charts-color-sequential-accent-4-tint-700: #c5ade6;
  --ouds-charts-color-sequential-accent-4-tint-800: #e0d4f2;
  --ouds-charts-color-sequential-accent-4-tint-900: #f1ecf9;
  --ouds-charts-color-sequential-accent-5-tint-100: #332400;
  --ouds-charts-color-sequential-accent-5-tint-200: #664800;
  --ouds-charts-color-sequential-accent-5-tint-300: #996c00;
  --ouds-charts-color-sequential-accent-5-tint-400: #cc9000;
  --ouds-charts-color-sequential-accent-5-tint-500: #ffb400;
  --ouds-charts-color-sequential-accent-5-tint-600: #ffc333;
  --ouds-charts-color-sequential-accent-5-tint-700: #ffd266;
  --ouds-charts-color-sequential-accent-5-tint-800: #ffe199;
  --ouds-charts-color-sequential-accent-5-tint-900: #fff0cc;
}`;
