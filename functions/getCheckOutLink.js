// import { getAllProducts } from "../lib/shopify";
// const domain = process.env.SHOPIFY_STORE_DOMAIN
// const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN


async function ShopifyData(query,variables) {
  const URL = `https://coolerpower.myshopify.com/api/2021-07/graphql.json`

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": '31b8b4a48caaab784da7b6aeaad34b46',
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query,variables })
  }

  try {
    const data = await fetch(URL, options).then(response => {
      return response.json()
    })

    return data
  } catch (error) {    
    //  throw new Error("Products not fetched", error)
  }
}

export async function getAllProducts(query, variables) {

  const response = await ShopifyData(query, variables)
console.log(response);
  const allProducts = response ? response.data : []

  return allProducts
}







export async function GetCheckOutLink() {
   const check= await getAllProducts(`{
        productByHandle(handle:"loop") {
          
              title
              productType
              tags
              handle
          variants(first:10){
            edges{
              node{
                title
              }
            }
          }
           
        }
      }
      `)
      console.log("check out0", check);
}
  
