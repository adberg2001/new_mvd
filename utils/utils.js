export function formatDate(notFormattedDate, type = 'obj' || 'string') {
  const date = new Date(notFormattedDate),
    d = date.getDate(),
    m = date.getMonth() + 1,
    y = date.getFullYear();
  return type === "obj" ? {d, m, y} :
    `${d.toString().padStart(2, '0')}.${m.toString().padStart(2, '0')}.${y}`;
}
