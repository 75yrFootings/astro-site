import { sanityClient } from 'sanity:client';

// Function to convert into camel Case
function camelCase(str: string) {
  // Using replace method with regEx
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

async function GetNavLinks() {
  const query = `*[_type == "menu"]{
    title,
    navOrder[]->{title, "slug": slug.current},
  }`
  try {
    const data = await sanityClient.fetch(query);
    let menuItems: any = {}
    data.map((menu: any) => {
      menu.title = camelCase(menu.title)
      menu.navOrder.unshift({title: 'Home', slug: ''})
      menuItems[menu.title] = menu.navOrder
    })
    return menuItems
  } catch (error) {
    console.error(error)
  }
}


export {GetNavLinks}