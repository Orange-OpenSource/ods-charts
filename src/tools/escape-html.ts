//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2026 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//
export function escapeHtml(unsafe: string): string {
  if (!unsafe) return '';
  const div = document.createElement('div');
  div.textContent = unsafe;
  return div.innerHTML;
}
