export function formatDate(notFormattedDate) {
  const date = new Date(notFormattedDate),
    d = date.getDate(),
    m = date.getMonth(),
    y = date.getFullYear();
  return `${d.toString().padStart(2, '0')}.${m
    .toString()
    .padStart(2, '0')}.${y}`;
}
