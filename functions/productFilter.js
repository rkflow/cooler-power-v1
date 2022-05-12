export function ProductFilter(tags, dependency, element, selctionObj, details) {
  let [selectionValue, setselectionValue] = selctionObj;
  [...element.parentElement.children].forEach((v) => {
    //   console.log("target", e.target);
    if (element == v) {
      console.log(`v.getAttribute("data_product")`, selctionObj);
      v.style.border = "3px solid #0AA47F";
      setselectionValue((value) => ({
        ...value,
        ...details,
      }));

    } else {
      v.style.border = "1px solid #DDDDDD";
    }
  });
  if (dependency.length > 0) {
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
