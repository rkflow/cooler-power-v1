import RecCard from "./componentMeterils/reactCard";
import styles from "../styles/reccard.module.css";
import { ProductFilter } from "../functions/productFilter";
export default function Tubing(props) {
  console.log("selectedTubing", props);
  return (
    <>
      <div>
        {props.useStateData.products.edges.map((v) => {
          return (
            <div
              className={styles.rec_card}
              data-product={v.node.variants.edges[0].node.id}
              onClick={(e) => {
                let waterBlock = {
                  tubing: {
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
              <RecCard
                price={v.node.priceRange.minVariantPrice.amount}
                title={v.node.title}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
