import React from "react";
import Image from "next/image";
import stlyes from "./inductionCookerWok.module.css";

const Product = ({ name, price, description, imageUrl }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className={`${stlyes.card} h-100`}>
        <Image
          src={imageUrl}
          alt={name}
          className={`card-img-top img-fluid ${stlyes.imgTop}`}
          width={300}
          height={200}
        />
        <div className="card-body">
          <h2 className={stlyes.title}>{name}</h2>
          <p className={stlyes.desc}>{description}</p>
          <p className={stlyes.setPrice}>{price}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const products = [
    {
      name: "28cm易清潔深煎鍋",
      price: "HK$229",
      description:
        "28CM採用優質鋁壓鑄件製成，擁有6層不沾陶瓷塗層和耐熱塗層。 易於清潔，適用洗碗機清洗",
      imageUrl: "/images/inductionCookerWok/A.jpg",
    },
    {
      name: "20cm易清潔煎鍋",
      price: "HK$429",
      description:
        "不黏塗層，容易清洗, 不含PFOA, 安全可靠, 舒適隔热手柄, 適用於電磁爐",
      imageUrl: "/images/inductionCookerWok/B.jpg",
    },
    {
      name: "22cm韓式含蓋煎鍋",
      price: "HK$259",
      description: "韓國材質, 主體/高級合金+陶瓷不沾塗層、把手/原木重量：695g",
      imageUrl: "/images/inductionCookerWok/C.jpg",
    },
    {
      name: "24cm易清潔煎鍋",
      price: "HK$289",
      description:
        "鍋身底部附設獨特金屬圓碟，適用於各種爐具，包括電磁爐。不黏易潔塗層，具有超卓的抗刮和耐磨性能，且方便清洗",
      imageUrl: "/images/inductionCookerWok/D.jpg",
    },
    {
      name: "26cm易潔炒鍋",
      price: "HK$549",
      description:
        "炒鍋有深度的流線形設計，炒菜、製作炸物、或烹煮一大鍋的香辣菜式或咖哩，都非常合適",
      imageUrl: "/images/inductionCookerWok/E.jpg",
    },
    {
      name: "26cm高效能防刮易清洗深煎鍋",
      price: "HK$309",
      description:
        "TITANIUM不沾塗層配方，添加鈦合金粒子，抗磨耐刮性最為優異，較一般不沾鍋更耐用，不沾效果佳又好清洗",
      imageUrl: "/images/inductionCookerWok/F.jpg",
    },
  ];

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="p-3 pb-md-4 mx-auto text-center">
            <h1
              className={`display-6 fw-normal text-body-emphasis ${stlyes.section}`}
            >
              電磁爐鍋
            </h1>
          </div>
          <div className="row g-5 mt-4">
            {products.map((product, index) => (
              <Product
                key={index}
                name={product.name}
                price={product.price}
                description={product.description}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
