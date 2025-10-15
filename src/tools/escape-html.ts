export function escapeHtml(unsafe: string): string {
  if (!unsafe) return '';
  const div = document.createElement('div');
  div.textContent = unsafe;
  return div.innerHTML;
}
