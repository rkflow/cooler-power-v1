import styles from "../../styles/reccard.module.css";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
export default function RecCard(props) {
  if (props.price && props.description) {
    return (
      <>
        <div className={styles.card_content_left}>
          <h3 className="cst-title-medium-bold" style={{ textAlign: "start" }}>
            {" "}
            {props.title}{" "}
          </h3>
          <span> {props.description}</span>
        </div>
        <div className={styles.card_content_right}>
          <h3 className="cst-title-medium-lite"> ${props.price}</h3>
        </div>
      </>
    );
  } else if (props.price) {
    return (
   
    <>        <div className={styles.card_content_left}>
          <h3 className="cst-title-medium-bold"> {props.title} </h3>
        </div>
        <div className={styles.card_content_right}>
          <h3 className="cst-title-medium-lite"> ${props.price}</h3>
        </div>
        </>
    
    );
  } else {
    return (
      <>
        <div className={styles.card_content_left}>
          <h3 className="cst-title-medium-bold"> product title</h3>
        </div>
      </>
    );
  }
}
