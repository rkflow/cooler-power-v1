import { useRouter } from "next/router";
import style from "../../styles/customizer.module.css";
import { getAllProducts } from "../../lib/shopify";
import Image from "next/image";
import fixedImage from "../../public/image/Blog Img.png";
import logo from "../../public/image/Logo.png";
import PaintCom from "../../component/paint";
import React, { useState } from "react";
import Coolant from "../../component/coolant";
import WaterBlock from "../../component/processorWaterBlock";
import Tubing from "../../component/tubing";
import Processor from "../../component/processor";
import Motherboard from "../../component/motherboard";
import VideoCard from "../../component/videocard";
import Footer from "../../component/footer";
import PowerSupply from "../../component/powerSupply";
import Memory from "../../component/memory";
import PrimarySSD from "../../component/primarySSD";
import SecondarySSD from "../../component/secondarySSD";
import OtherStorage from "../../component/otherStorage";
import OperatingSystemn from "../../component/operatingSystem";
import Warranty from "../../component/warranty";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function Customizer(props) {
  console.log(props);

  const [paintvariants, setpaintvariants] = useState(props.selectedCase);
  const paintvariantBsckup = { ...props.selectedCase };

  const [selectedCoolant, setselectedCoolant] = useState(props.selectedCoolant);
  const selectedCoolantBsckup = { ...props.selectedCoolant };

  const [selectedWaterBlock, setselectedWaterBlock] = useState(
    props.selectedWaterBlock
  );
  const selectedWaterBlockBsckup = { ...props.selectedTubing };

  const [selectedTubing, setselectedTubing] = useState(props.selectedTubing);
  const selectedTubingBsckup = { ...props.selectedTubing };

  const [selectedProcessor, setselectedProcessor] = useState(
    props.selectedProcessor
  );
  const selectedProcessorBsckup = { ...props.selectedProcessor };

  const [selectedMotherboard, setselectedMotherboard] = useState(
    props.selectedMotherboard
  );
  const selectedMotherboardBsckup = { ...props.selectedMotherboard };

  const [selectedVideoCard, setselectedVideoCard] = useState(
    props.selectedVideoCard
  );
  const selectedVideoCardBsckup = { ...props.selectedVideoCard };

  const [selectedPowerSupply, setselectedPowerSupply] = useState(
    props.selectedPowerSupply
  );
  const selectedPowerSupplyBsckup = { ...props.selectedPowerSupply };

  const [selectedMemory, setselectedMemory] = useState(props.selectedMemory);
  const selectedMemoryBsckup = { ...props.selectedMemory };

  const [selectedPrimarySSD, setselectedPrimarySSD] = useState(
    props.selectedPrimarySSD
  );
  const selectedPrimarySSDBsckup = { ...props.selectedPrimarySSD };

  const [selectedSecondarySSD, setselectedSecondarySSD] = useState(
    props.selectedSecondarySSD
  );
  const selectedSecondarySSDBsckup = { ...props.selectedSecondarySSD };

  const [selectedOtherStorage, setselectedOtherStorage] = useState(
    props.selectedOtherStorage
  );
  const selectedOtherStorageBsckup = { ...props.selectedOtherStorage };

  const [selectedOperatingsystem, setselectedOperatingsystem] = useState(
    props.selectedOperatingsystem
  );
  const selectedOperatingsystemBsckup = { ...props.selectedOperatingsystem };

  const [selectedWarranty, setselectedWarranty] = useState(
    props.selectedWarranty
  );
  const selectedWarrantyBsckup = { ...props.selectedOperatingsystem };

  const [selectedcheckout, setselectedcheckout] = useState([
    {
      variantId: "gid://shopify/ProductVariant/42829275758845",
      quantity: 2,
    },
  ]);

  
  let selcase = {
    title: props.paramsId,
    description: paintvariants.productByHandle.description,
    variantId: "",
    price: 0,
    color: "#0849A6",
    image: "",
  };
  let coolant = {
    title: "",
    variantId: "",
    price: 0,
    color: "#0849A6",
    image: "",
  };
  let tubing = {
    title: "",
    variantId: "",
    price: 0,
    color: "",
    image: "",
  };
  let waterBlock = {
    title: "",
    variantId: "",
    price: 0,
    color: "",
    image: "",
  };
  let processor = {
    title: "",
    variantId: "",
    price: 0,
    color: "",
    image: "",
  };
  let motherboard = {
    title: "",
    variantId: "",
    price: 0,
    color: "",
    image: "",
  };
  let videocard = {
    title: "",
    variantId: "",
    price: 0,
    color: "",
    image: "",
  };
  let powerSupply = {
    title: "",
    variantId: "",
    price: 0,
    color: "",
    image: "",
  };
  let memory = {
    title: "",
    variantId: "",
    price: 0,
    color: "",
    image: "",
  };
  let primarySSD = {
    title: "",
    variantId: "",
    price: 0,
    color: "",
    image: "",
  };
  let secondarySSD = {
    title: "",
    variantId: "",
    price: 0,
    color: "",
    image: "",
  };
  let otherStorage = {
    title: "",
    variantId: "",
    price: 0,
    color: "",
    image: "",
  };
  let operatingSystemn = {
    title: "",
    variantId: "",
    price: 0,
    color: "",
    image: "",
  };
  let warranty = {
    title: "",
    variantId: "",
    price: 0,
    color: "",
    image: "",
  };
  const selctedListObj = {
    selcase,
    coolant,
    tubing,
    waterBlock,
    processor,
    motherboard,
    videocard,
    powerSupply,
    memory,
    primarySSD,
    secondarySSD,
    otherStorage,
    operatingSystemn,
    warranty,
  };
  const [selectedList, setselectedList] = useState(selctedListObj);

  return (
    <div className={style.cotainer}>
      <div className={style.home_wraper}>
        <div className={style.logo_container}>
          <Image
            loader={myLoader}
            src={logo}
            alt="case"
            layout="fill"
            objectFit="cover"
            width={180.42}
          />
        </div>
        <div className={style.image_container}>
          <Image
            loader={myLoader}
            src={fixedImage}
            alt="case"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={style.panal_cotainer}>
        <div className={style.custom_elements}>
          <div
            className={style.section_container}
            style={{ paddingBottom: "49px" }}
          >
            <div className={style.right_wrapper}></div>
            <div className={style.left_wrapper}>
              <h1 className="cst-headding">Customize your LOOP</h1>
            </div>
          </div>
          <div>
            <div className={style.section_container}>
              <div className={style.right_wrapper}></div>
              <div className={style.left_wrapper}>
                <h2 className="cst-headding-larg">Paint</h2>
                <p className="cst-headding-medium">Exterior case colour</p>
                <div className={style.paint}>
                  <PaintCom
                    useStateData={paintvariants}
                    dependency={[]}
                    selecteItem={[selectedList.selcase, setselectedList]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.section_container}>
              <div className={style.right_wrapper}></div>
              <div className={style.left_wrapper}>
                <h2 className="cst-headding-larg">Coolant</h2>
                <p className="cst-headding-medium">
                  Liquid cooling fluid colour
                </p>
                <div>
                  <Coolant useStateData={selectedCoolant} dependency={[]} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.section_container}>
              <div className={style.right_wrapper}></div>
              <div className={style.left_wrapper}>
                <h2
                  className={`cst-headding-larg ${style.heading_only_margin}`}
                >
                  Tubing
                </h2>
                <div>
                  <Tubing
                    useStateData={selectedTubing}
                    dependency={[]}
                    selecteItem={[selectedList.tubing, setselectedList]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style.water_block}>
            <div className={style.section_container}>
              <div className={style.right_wrapper}>
                <div>
                  <Image
                    loader={myLoader}
                    src={
                      "https://storage-asset.msi.com/global/picture/image/feature/mb/Z690/mag_z690_edge_wifi/msi-z690-edge-with-msi-case.png"
                    }
                    alt="case"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={style.left_wrapper}>
                <h2
                  className={`cst-headding-larg ${style.heading_only_margin}`}
                >
                  Processor Water Block
                </h2>
                <div>
                  <WaterBlock
                    useStateData={selectedWaterBlock}
                    dependency={[
                      [selectedProcessorBsckup, setselectedProcessor],
                    ]}
                    selecteItem={[selectedList.waterBlock, setselectedList]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.section_container}>
              <div className={style.right_wrapper}></div>
              <div className={style.left_wrapper}>
                <h2
                  className={`cst-headding-larg ${style.heading_only_margin}`}
                >
                  Processor
                </h2>
                <div>
                  <Processor
                    useStateData={selectedProcessor}
                    dependency={[
                      [selectedMotherboardBsckup, setselectedMotherboard],
                    ]}
                    selecteItem={[selectedList.processor, setselectedList]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.section_container}>
              <div className={style.right_wrapper}>Image</div>
              <div className={style.left_wrapper}>
                <h2
                  className={`cst-headding-larg ${style.heading_only_margin}`}
                >
                  Motherboard
                </h2>
                <div>
                  <Motherboard
                    useStateData={selectedMotherboard}
                    dependency={[[selectedMemoryBsckup, setselectedMemory]]}
                    selecteItem={[selectedList.motherboard, setselectedList]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.section_container}>
              <div className={style.right_wrapper}>Image</div>
              <div className={style.left_wrapper}>
                <h2
                  className={`cst-headding-larg ${style.heading_only_margin}`}
                >
                  Video card
                </h2>
                <div>
                  <VideoCard
                    useStateData={selectedVideoCard}
                    dependency={[]}
                    selecteItem={[selectedList.videocard, setselectedList]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.section_container}>
              <div className={style.right_wrapper}>Image</div>
              <div className={style.left_wrapper}>
                <h2
                  className={`cst-headding-larg ${style.heading_only_margin}`}
                >
                  Power Supply
                </h2>
                <div>
                  <PowerSupply
                    useStateData={selectedPowerSupply}
                    dependency={[]}
                    selecteItem={[selectedList.powerSupply, setselectedList]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.section_container}>
              <div className={style.right_wrapper}>Image</div>
              <div className={style.left_wrapper}>
                <h2
                  className={`cst-headding-larg ${style.heading_only_margin}`}
                >
                  Memory
                </h2>
                <div>
                  <Memory
                    useStateData={selectedMemory}
                    dependency={[]}
                    selecteItem={[selectedList.memory, setselectedList]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.section_container}>
              <div className={style.right_wrapper}>Image</div>
              <div className={style.left_wrapper}>
                <h2
                  className={`cst-headding-larg ${style.heading_only_margin}`}
                >
                  Primary storage
                </h2>
                <div>
                  <PrimarySSD
                    useStateData={selectedPrimarySSD}
                    dependency={[]}
                    selecteItem={[selectedList.primarySSD, setselectedList]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.section_container}>
              <div className={style.right_wrapper}>Image</div>
              <div className={style.left_wrapper}>
                <h2
                  className={`cst-headding-larg ${style.heading_only_margin}`}
                >
                  Secondary storage (optional)
                </h2>
                <div>
                  <SecondarySSD
                    useStateData={selectedSecondarySSD}
                    dependency={[]}
                    selecteItem={[selectedList.secondarySSD, setselectedList]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.section_container}>
              <div className={style.right_wrapper}>Image</div>
              <div className={style.left_wrapper}>
                <h2
                  className={`cst-headding-larg ${style.heading_only_margin}`}
                >
                  other storage(optional)
                </h2>
                <div>
                  <OtherStorage
                    useStateData={selectedOtherStorage}
                    dependency={[]}
                    selecteItem={[selectedList.otherStorage, setselectedList]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.section_container}>
              <div className={style.right_wrapper}>Image</div>
              <div className={style.left_wrapper}>
                <h2
                  className={`cst-headding-larg ${style.heading_only_margin}`}
                >
                  Operating system
                </h2>
                <div>
                  <OperatingSystemn
                    useStateData={selectedOperatingsystem}
                    dependency={[]}
                    selecteItem={[
                      selectedList.operatingSystemn,
                      setselectedList,
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.section_container}>
              <div className={style.right_wrapper}>Image</div>
              <div className={style.left_wrapper}>
                <h2
                  className={`cst-headding-larg ${style.heading_only_margin}`}
                >
                  Warranty
                </h2>
                <div>
                  <Warranty
                    useStateData={selectedWarranty}
                    dependency={[]}
                    selecteItem={[selectedList.warranty, setselectedList]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.section_container}>
              <div className={style.right_wrapper}>Image</div>
              <div className={style.left_wrapper}>
                <div className={style.content_buttom}>
                  All PCs are custom built to your specifications and include a
                  fully water tight and quality tested custom liquid cooling
                  loop. Prior to shipping, the liquid cooling loop is drained of
                  fluid for safety purposes. Prior to first time start up,
                  please follow the included setup instructions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer selectedList={selectedList} checkout={props.checkout} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  let v = "gid://shopify/ProductVariant/42825952755965";
  let mutationQuery = `mutation CheckoutCreate($input: CheckoutCreateInput!){
checkoutCreate(input:$input)
  { 
checkout{
      webUrl
      id
    }
  }
}`;

  let check = await getAllProducts(mutationQuery, {
    input: {
      lineItems: [
        {
          variantId: `${v}`,
          quantity: 2,
        },
        {
          variantId: "gid://shopify/ProductVariant/42829275758845",
          quantity: 2,
        },
      ],
    },
  });
  let handle = context.params.slug;
  let caseQuery = `{
  productByHandle(handle: "${handle}") {
    title
    tags
    description
    variants(first: 20) {
      edges {
        node {
          title
          id
          metafields(first: 5) {
            edges {
              node {
                namespace
                key
                value
              }
            }
          }
        }
      }
    }
  }
}
`;
  const selectedCase = await getAllProducts(caseQuery);
  let motherboardTags = selectedCase.productByHandle.tags.filter((f) =>
    f.includes("Motherboard")
  );
  let otherStorageTags = selectedCase.productByHandle.tags.filter((f) =>
    f.includes("HDD")
  );
  let powerSupplyTags = selectedCase.productByHandle.tags.filter((f) =>
    f.includes("Power Supply")
  );

  let CoolantQuery = `
{
    products(first: 10, query: "((product_type:Coolant))") {
      edges {
        node {
          title
          productType
          tags
          handle
          id
          priceRange {
            minVariantPrice {
              amount
            }
          }
          variants(first:10){
            edges{
              node{
                id
                title
                 metafields(first: 5) {
            edges {
              node {
                namespace
                key
                value
              }
            }
          }
              }
            }
          }
          images(first: 10) {
            edges {
              node {
                originalSrc
                altText
              }
            }
          }
        }
      }
  } 
}`;

  let tubingQuery = `{
    products(first: 50, query: "((product_type:Tubing))") {
        edges {
          node {
            title
            productType
            tags
            handle
            id
            priceRange {
              minVariantPrice {
                amount
              }
            }
            variants(first:1){
              edges{
                node{
                  id
                }
              }
            }
          }
        }
    } 
  }`;
  let powerSupplyQuery = `{
    products(first: 50, query: "((product_type:Power Supply))") {
        edges {
          node {
            title
            productType
            tags
            handle
            description
            id
            priceRange {
              minVariantPrice {
                amount
              }
            }
            variants(first:1){
              edges{
                node{
                  id
                }
              }
            }
          }
        }
    } 
  }`;
  let processorQuery = `{
    products(first: 50, query: "((product_type:Processor))") {
        edges {
          node {
            title
            productType
            tags
            handle
            description
            id
            priceRange {
              minVariantPrice {
                amount
              }
            }
            variants(first:1){
              edges{
                node{
                  id
                }
              }
            }
          }
        }
    } 
  }`;

  const selectedCoolant = await getAllProducts(CoolantQuery);
  const selectedWaterBlock = await getAllProducts(
    productTypeQuery("Processor Water Block")
  );
  const selectedVideoCard = await getAllProducts(
    productTypeQuery("Video Card")
  );
  const selectedTubing = await getAllProducts(tubingQuery);
  const selectedProcessor = await getAllProducts(processorQuery);
  const selectedPowerSupply = await getAllProducts(
    caseFilteredQuery("Power Supply", powerSupplyTags)
  );

  const selectedMotherboard = await getAllProducts(
    // productTypeQuery("Motherboard")
    caseFilteredQuery("Motherboard", motherboardTags)
  );

  const selectedMemory = await getAllProducts(productTypeQuery("Memory"));
  console.log(
    "caseFilteredQuery(Other Storage, otherStorageTags)",
    caseFilteredQuery("Other Storage", otherStorageTags)
  );
  const selectedOtherStorage = await getAllProducts(
    caseFilteredQuery("Other Storage", otherStorageTags)
  );
  const selectedSecondarySSD = await getAllProducts(
    productTypeQuery("Secondary SSD")
  );
  const selectedPrimarySSD = await getAllProducts(
    productTypeQuery("primary SSD")
  );
  const selectedOperatingsystem = await getAllProducts(
    productTypeQuery("Operating system")
  );
  const selectedWarranty = await getAllProducts(productTypeQuery("Warranty"));
 
  const test=await getAllProducts(`{
    productByHandle(handle:"loop") {  
          title
          productType
          tags
          handle
      variants(first:10){
        edges{
          node{
            title
          }
        }
      }
       
    }
  }
  `)
  return {
    props: {
      paramsId: handle,
      check: check,
      selectedCase: selectedCase,
      selectedCoolant: selectedCoolant,
      selectedWaterBlock: selectedWaterBlock,
      selectedTubing: selectedTubing,
      selectedProcessor: selectedProcessor,
      selectedMotherboard: selectedMotherboard,
      selectedVideoCard: selectedVideoCard,
      selectedPowerSupply: selectedPowerSupply,
      selectedMemory: selectedMemory,
      selectedPrimarySSD: selectedPrimarySSD,
      selectedSecondarySSD: selectedSecondarySSD,
      selectedOtherStorage: selectedOtherStorage,
      selectedOperatingsystem: selectedOperatingsystem,
      selectedWarranty: selectedWarranty,
      test:test,
    },
  };
};

function productTypeQuery(type) {
  const query = `{
    products(first: 50, query: "((product_type:'${type}'))") {
      edges {
        node {
          title
          productType
          tags
          handle
          description
          id
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 5) {
            edges {
              node {
                originalSrc
                altText
              }
            }
          }
          variants(first:5){
            edges{
              node{
                id
              }
            }
          }
        }
      }
  } 
}
`;
  return query;
}

function caseFilteredQuery(type, tags) {
  let tagvariable =
    tags.length > 0 ? tags.map((v) => `(tag:'${v}')`).join(" OR ") : "NULL";
  console.log("tagvariable", tagvariable);
  return `{
      products(first: 50, query: "((product_type:'${type}') AND (${tagvariable})") {
          edges {
            node {
              title
              productType
              tags
              description
              handle
              id
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first:2){
                edges{
                  node{
                    originalSrc
                    altText
                  }
                }
              }
              variants(first:1){
                edges{
                  node{
                    id
                  }
                }
              }
            }
          }
      } 
    }`;
}
