export function PaintHighlight(tags, dependency, element) {
    [...element.parentElement.children].forEach((v) => {
      //   console.log("target", e.target);
      if (element == v) {
        console.log(`v.getAttribute("data_product")`,v.getAttribute("data-product"));
        v.querySelector('div[class*="paint_paintCirContainer"] div').style.border = "3px solid #0AA47F";
      } else {
        v.querySelector('div[class*="paint_paintCirContainer"] div').style.border = "none";
      }
    });
  if(dependency.length > 0) {
    dependency.forEach((element) => {
      let toFilter = { products: {} };
      Object.assign(toFilter.products, { ...element[0].products });
      toFilter.products.edges = toFilter.products.edges.filter((v) =>
        v.node.tags.some((e) => tags.includes(e))
      );
      let products = toFilter.products;
      element[1]({ products });
    });
  }
   
  }
  