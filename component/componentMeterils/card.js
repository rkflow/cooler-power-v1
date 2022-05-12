import styles from "../../styles/card.module.css"
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
export default function Card(props) {
    console.log(props);
    return(
        <>
          <div className={styles.card_image}>
          <Image
            loader={myLoader}
            src={props.src}
            alt="case"
            layout="fill"
            objectFit="cover"
            width={180.42}/>
          </div>
          <div className={`${styles.card_content} cst-title-medium-bold `}>
              {props.title}
              <div className="cst-title-medium-lite">
                 + ${props.price}
              </div>
          </div>
          
        </>
    )
}