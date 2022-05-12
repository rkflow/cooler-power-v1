import style from "../styles/footer.module.css";
import logo from "../public/image/image 4 (2).png";
import Image from "next/image";
import Link from "next/link";
import { GetCheckOutLink } from "../functions/getCheckOutLink";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const checkOutFlow= async ()=>{

  // fetch("/api/shopify", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(["state"])
  // }).then((data) => data.json()).then((response) =>{
  //     console.log(response);
  //    })

 fetch("/api/shopify",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({"a":"state"})
  }).then((data) => data.json()).then((response) =>{
    console.log(response);
  })
  
}


export default function Footer(props) {
  console.log("selectedTubing", props);
  return (
    <div>
      <div className={style.foter_container}>
        <div className={style.left_wrapper}>
          <div className={style.image_container}>
            <div className={style.footer_image}>
              <Image
                loader={myLoader}
                src={logo}
                alt="case"
                layout="fill"
                objectFit="cover"
                width={180.42}
              />
            </div>
            <Link href={'/home'}>
            <div className={style.change_case}>Change Case</div>
            </Link>
            <div className={style.underline}></div>
          </div>
          <div className={style.case_selected}>
            <div className={style.case_title}>
              {props.selectedList.selcase.title}
            </div>
            <span className={style.case_description}>
              {props.selectedList.selcase.description}
            </span>
            <div>
              <div className={style.case_color} style={{backgroundColor:`${props.selectedList.selcase.color}`}}></div>
              <div className={style.case_color} style={{backgroundColor:`${props.selectedList.coolant.color}`}}></div>
            </div>
          </div>
        </div>
        <div className={style.selected_products_container} >
          <ul className={style.selected_products}>
            {
              Object.keys(props.selectedList).map((v)=>{if(props.selectedList[v].title)return(<li>{props.selectedList[v].title}</li>);})
            // props.selectedList.map((selected) => {
            //   if (selected.title) return <li>{selected.title}</li>;
            // })
            }
          </ul>
        </div>
        <div>
          <div className={style.right_wrapper}>
            <div className={style.total_price}>
              ${
              Object.keys(props.selectedList).reduce((t,v)=>{return(t+props.selectedList[v].price)},0).toFixed(2)
              }
            </div>
            <div className={style.review_button} onClick={checkOutFlow}>Review</div>
            <div className={style.siping_details}>
              Shiping or pick-up available in 4 - 6 weeks
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
