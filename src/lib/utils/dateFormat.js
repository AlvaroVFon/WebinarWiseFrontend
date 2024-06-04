export function dateFormat(date) {
  return date.split('T')[0].split('-').reverse().join('-')
}
