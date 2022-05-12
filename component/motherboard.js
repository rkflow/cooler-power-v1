import RecCard from "./componentMeterils/reactCard";
import styles from "../styles/reccard.module.css";
import { ProductFilter } from "../functions/productFilter";
export default function Motherboard(props) {
  console.log("selectedWaterBlock", props);
  return (
    // <>
    //   <div className={styles.motherboard}>
    //     {props.useStateData.products.edges.map((v) => {
    //       return (
    //         <div
    //           data-product={v.node.variants.edges[0].node.id}
    //           onClick={(e) => {
    //             ProductFilter(v.node.tags, props.dependency, e.currentTarget);
    //           }}
    //         >
    //           <RecCard
    //             src={v.node.images.edges[0].node.originalSrc}
    //             title={v.node.title}
    //             price={v.node.priceRange.minVariantPrice.amount}
    //           />
    //         </div>
    //       );
    //     })}
    //   </div>

    <>
      <div>
        {props.useStateData.products.edges.map((v) => {
          return (
            <div
              className={styles.rec_card}
              data-product={v.node.variants.edges[0].node.id}
              onClick={(e) => {let details = {
                motherboard: {
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
                details
              );
              }}
            >
              <RecCard
                price={v.node.priceRange.minVariantPrice.amount}
                title={v.node.title}
                // description={v.node.description}
              />
            </div>
          );
        })}
      </div>
    </>
    // </>
  );
}
