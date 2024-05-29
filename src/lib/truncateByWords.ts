function truncateByWords(str: string, maxLength: number) {
  const words = str.split(" ")
  if (words.length > maxLength) {
    return str.split(" ").splice(0, maxLength).join(" ") + '...'
  }
  return str
}
export default truncateByWords