import styles from "../../styles/paint.module.css";
export default function PaintCircle(props) {
  let color = props.color;
  let sku = props.sku;
  let colorStyle = {
    background: createColor(sku),
  };
  if (
    color.includes("White") ||
    color.includes("white") ||
    sku.includes("#ffffff") ||
    color.includes("Clear")
  ) {
    colorStyle.border = "2px solid #CECECE";
  }
  return (
    <>
      <div className={styles.paintCirContainer}>
        <div className={styles.paintCir_borderHighlight}>
        <div style={colorStyle} className={styles.paintCir}></div>
        </div>
        <div className={styles.painTitle}>{color}</div>
      </div>
    </>
  );
}

function createColor(sku) {
  let array = sku.split(",");
  if (array.length == 1) {
    return array[0];
  } else {
    let per = 100 / array.length;
    return `linear-gradient(-45deg, ${array[0]} ${per}%, ${array[1]} ${per}%)`;
  }
}
