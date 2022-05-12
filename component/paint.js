import PaintCircle from "../component/componentMeterils/paintCircle";
import { PaintHighlight } from "../functions/paintHighlight";
import styles from "../styles/paint.module.css"
export default function Paint(props) {
    console.log("useStateData",props);
    return(
        <div className={styles.paint_comp_container} >
           { props.useStateData.productByHandle.variants.edges.map((v)=>{
               console.log(v.node.metafields.edges[0].node.value);
             return (<div onClick={(e) => {
                PaintHighlight(v.node.tags, props.dependency, e.currentTarget);
              }} style={{borderRadius:"50%"}} >{
                 <PaintCircle color={v.node.title} sku={v.node.metafields.edges[0].node.value}/>
               }
               </div>)
            })}
        </div>
    )
}