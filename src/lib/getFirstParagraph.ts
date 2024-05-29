import truncateByWords from "./truncateByWords"
function getFirstParagraph(posts:any, maxLength: number) {
  let p = {}
    posts.map((block: any) => {
      if (block.style === 'normal' && Object.keys(p).length === 0) {
        const getText = block.children.map((child: any) => child.text)
      p = truncateByWords(getText[0], maxLength)
      }
    })
  return p
}

export default getFirstParagraph