# Spec #16 - Minified bundle alias and license header

## Context

This specification addresses issue `#16`: https://github.com/Orange-OpenSource/ods-charts/issues/16

The library already publishes minified JS bundles (Webpack production mode), but without a `.min.js` suffix in npm artifacts.
Some CDN/documentation usages rely on a `ods-charts.min.js` URL.

This spec describes:

1. Providing a `dist/ods-charts.min.js` file (UMD bundle alias).
2. Adding a standard license header to distributed JS files.
3. Creating an npm script to verify and update the header across all source files.
4. Creating an npm script to detect and list source files that are missing the license header entirely (year-agnostic check).

## Objectives

- Provide a physical `dist/ods-charts.min.js` artifact in the published package.
- Ensure a legal header is present at the top of distributed JS files.
- Make the ending year dynamic (current year at build/release time).
- Ensure a consistent source header maintained automatically through a script declared in `package.json`.
- Provide a lightweight audit script that flags source files with no header at all, without touching the ending year.

## Out of Scope

- Adding `.min` variants for `cjs` and `esm` (not required in this scope).
- Changing the library public API.

## Functional Requirements

### 1) Distributed minified file

- The build must produce (or copy) `dist/ods-charts.min.js`.
- Its content may be identical to `dist/ods-charts.js` if that file is already minified.
- The file must be included in the npm package through `files` (already `dist/**/*`).

### 2) Distributed legal header

- Distributed JS files must start with the following header:

```js
/*!
 * Software Name: Orange Design System Charts
 * SPDX-FileCopyrightText: Copyright (c) 2023 - ${CURRENT_YEAR} Orange SA
 * SPDX-License-Identifier: MIT
 *
 * This software is distributed under the MIT license.
 */
```

- `${CURRENT_YEAR}` must be resolved automatically to the current year during build/release.
- Expected example in 2026:

```js
/*!
 * Software Name: Orange Design System Charts
 * SPDX-FileCopyrightText: Copyright (c) 2023 - 2026 Orange SA
 * SPDX-License-Identifier: MIT
 *
 * This software is distributed under the MIT license.
 */
```

### 3) npm script for source header verification/update

- A dedicated script must be added in `package.json` (example name: `headers:source`).
- This script must scan all targeted source files and:
  - verify that the expected header is present;
  - automatically update the header when it is missing, incomplete, or has an outdated ending year.
- The ending year must be computed dynamically from the current year (`new Date().getFullYear()`).
- The expected header for source files is exactly:

```ts
//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - ${CURRENT_YEAR} Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//
```

- Expected example in 2026:

```ts
//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2026 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//
```

### 4) npm script for source header presence check

- A dedicated script must be added in `package.json` (example name: `headers:check`).
- This script scans all targeted source files and:
  - detects files where the license header block (`Software Name`, `SPDX-FileCopyrightText`, `SPDX-License-Identifier`) is **entirely absent**;
  - lists each non-compliant file path to stdout;
  - exits with a non-zero status code when at least one file is missing a header, so it can be used in CI.
- The check is **year-agnostic**: any year value in the copyright line is accepted as long as the header block is present.
- The check is **read-only**: it must never modify any file.

## File Scope

- Mandatory minimum target:
  - `dist/ods-charts.js`
  - `dist/ods-charts.min.js`
- Recommended target (distribution consistency):
  - `dist/ods-charts.esm.js`
  - `dist/ods-charts.cjs.js`
- Source target for the npm scripts (`headers:source` and `headers:check`):
  - all source files in the project (at least `src/**/*`), according to an extension list defined in the scripts.

## Technical Proposal

1. Keep the Webpack build unchanged (still in production mode).
2. Add a post-build step that:
   - copies `dist/ods-charts.js` to `dist/ods-charts.min.js`;
   - prepends the legal header to targeted JS files;
   - injects the current year via `new Date().getFullYear()`.
3. Add a Node script (example: `build/sync-source-headers.mjs`) and declare it in `package.json` (example: `"headers:source": "node build/sync-source-headers.mjs"`).
4. The source script must be idempotent: no header duplication, only insertion/update when needed.
5. Add a separate read-only Node script (example: `build/check-source-headers.mjs`) and declare it in `package.json` (example: `"headers:check": "node build/check-source-headers.mjs"`).
6. Preserve existing source maps.

## Acceptance Criteria

- `npm run build` creates `dist/ods-charts.min.js`.
- Each targeted JS file starts exactly with the legal header using the current year.
- `package.json` exposes a dedicated npm script for source headers (`headers:source`).
- `package.json` exposes a dedicated read-only audit script (`headers:check`).
- Running `headers:source` brings all targeted source files into compliance with the `//` header format and current year.
- Running `headers:check` on a fully compliant codebase exits with code `0` and prints no file paths.
- Running `headers:check` on a codebase with missing headers exits with a non-zero code and lists the offending files.
- `npm pack` includes `dist/ods-charts.min.js`.
- Existing tests/consumers (html, react, vue, angular samples) continue to work.

## Verification

- Verify the file presence in `dist/`.
- Verify the first lines of bundles to confirm the header.
- Run `headers:source` and verify that non-compliant source files are fixed.
- Run `headers:source` again to validate idempotence (no additional changes expected).
- Run `headers:check` on the updated codebase and verify it exits with code `0`.
- Introduce a file without a header, run `headers:check`, and verify it exits with a non-zero code and lists that file.
- Test npm import (`module`, `main`, `unpkg`) and UMD script usage.

## Risks

- Duplicate header insertion if the script runs without proper safeguards.
- Source map desynchronization if header prepending is not handled correctly.

## Mitigations

- Make the script idempotent (detect an already present header).
- Apply prepending deterministically and validate `.map` files if needed.

## Definition of Done

- Spec approved.
- Build/release pipeline updated.
- Artifacts verified locally and via `npm pack`.
