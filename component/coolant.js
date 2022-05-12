import PaintCircle from "../component/componentMeterils/paintCircle";
import styles from "../styles/coolant.module.css";
import { PaintHighlight } from "../functions/paintHighlight";
export default function Coolant(props) {
  console.log("useStateData Coolant", props);

  return (
    <div>
      {props.useStateData.products.edges.map((v) => {
        return (
          <>
            <div className={`cst-title-medium-bold ${styles.coolant_title}`} >{v.node.title}</div>
            <div className={styles.colorContainer}>
                {
                    v.node.variants.edges.map((color) =>{
                        return(
                            <>
                            <div onClick={(e) => {
                PaintHighlight(v.node.tags, props.dependency, e.currentTarget);
              }} style={{borderRadius:"50%"}}>
                             <PaintCircle color={color.node.title} sku={color.node.metafields.edges[0].node.value}/>
                             </div>
                            </>
                        )
                    })
                }
            </div>
          </>
        );
      })}
    </div>
  );
}
