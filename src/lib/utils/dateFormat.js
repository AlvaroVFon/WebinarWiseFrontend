export function dateFormat(originalDate) {
  const date = originalDate.split('T')[0].split('-').reverse().join('-')
  const hour = originalDate
    .split('T')[1]
    .split('.')[0]
    .split(':')
    .slice(0, 2)
    .join(':')
  return { date, hour }
}
