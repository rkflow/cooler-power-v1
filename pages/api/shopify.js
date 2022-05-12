import {getAllProducts} from '../../lib/shopify'

// async function ShopifyData(query,variables) {
//     const URL = `https://${domain}/api/2021-07/graphql.json`
  
//     const options = {
//       endpoint: URL,
//       method: "POST",
//       headers: {
//         "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ query,variables })
//     }
  
//     try {
//       const data = await fetch(URL, options).then(response => {
//         return response.json()
//       })
  
//       return data
//     } catch (error) {    
//       //  throw new Error("Products not fetched", error)
//     }
//   }
  
//  async function getAllProducts(query, variables) {
  
//     const response = await ShopifyData(query, variables)
//   console.log(response);
//     const allProducts = response ? response.data : []
  
//     return allProducts
//   }
  
export default async function handler(req, res) {
    let Porducts = req.body;
// if(method === 'POST'){
    const check= await getAllProducts(`{
        productByHandle(handle:"singularity") {
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
    res.status(200).json(  {Porducts:Porducts} )
// }
  }
  