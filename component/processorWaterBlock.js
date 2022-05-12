import styles from "../styles/card.module.css";
import Card from "./componentMeterils/card";
import { ProductFilter } from "../functions/productFilter";
export default function WaterBlock(props) {
  console.log("selectedWaterBlock", props);
  return (
    <>
      <div className={styles.card_wrapper}>
        {props.useStateData.products.edges.map((v) => {
          // let details={, price:}
          return (
            <div
              className={styles.card_container}
              data-product={v.node.variants.edges[0].node.id}
              onClick={(e) => {
                let waterBlock = {
                  waterBlock: {
                    title: v.node.title,
                    variantId: e.currentTarget.getAttribute("data-product"),
                    price: Number(v.node.priceRange.minVariantPrice.amount),
                  },
                };
                ProductFilter(
                  v.node.tags,
                  props.dependency,
                  e.currentTarget,
                  props.selecteItem,
                  waterBlock
                );
              }}
            >
              <Card
                key={v.node.id}
                src={v.node.images.edges[0].node.originalSrc}
                title={v.node.title}
                price={v.node.priceRange.minVariantPrice.amount}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
