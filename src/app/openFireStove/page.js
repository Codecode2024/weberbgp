"use client";
import React from "react";
import Image from "next/image";
import styles from "./openFireStove.module.css";

const Product = ({ name, price, description, imageUrl }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className={`${styles.card} h-100`}>
        <Image
          src={imageUrl}
          alt={name}
          className={`card-img-top img-fluid ${styles.imgTop}`}
          width={300}
          height={200}
        />
        <div className="card-body">
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.setPrice}>{price}</p>
          <p className={styles.desc}>{description}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const products = [
    {
      name: "35CM 有蓋不黏中式鑊",
      price: "HK$179",
      description:
        "優質不黏塗層， 煮食更健康,不含 PFOA 等有害物質, 耐熱舒適手柄,安全可靠,鋁製鍋身令導熱更迅速均勻,不銹鋼鍋蓋, 可以放進焗爐使用，耐高溫至180°C / 350°F, 任何爐具均適用,包括電磁爐",
      imageUrl: "/images/openFireStove/A.png",
    },
    {
      name: "有蓋不黏中式鑊",
      price: "HK$319",
      description:
        "厚鋁板鍋身讓導熱更均勻, 平坦不銹鋼鍋底讓鍋具與爐具保持最佳的接觸, 不黏外層, 使用後易於清潔, 符合人體工程學設計的柔軟手柄, 手感舒適便於握持, 不銹鋼鍋蓋, 適用於洗碗碟機, 可以放進焗爐使用，耐高溫至180°C / 350°F,電磁爐適用",
      imageUrl: "/images/openFireStove/B.png",
    },
    {
      name: "有蓋不銹鋼中式鑊",
      price: "HK$189",
      description:
        "食用級不銹鋼製造, 鋁芯底部確保導熱均勻和快速加熱, 三層特厚堅固底部, 增強耐用性, 防滴漏卷邊鍋身設計,內外鍋身經精心打磨，更耐磨防劃花, 鈎孔手柄，節省廚具空間, 耐熱電木把手, 防滑防燙, 所有爐具適用(包括電磁爐), 適用於洗碗碟機",
      imageUrl: "/images/openFireStove/C.png",
    },
    {
      name: "36CM 有蓋陽極氧化不黏中式鑊",
      price: "HK$239",
      description:
        "安全-保證不含特氟龍 (PFOA), 鉛 (Lead)及鎘 (Cadmium) 等有害物質, 省時節能, 特製不銹鋼鍋底, 傳熱迅速,    讓你以較少能源和時間烹調, 可放進焗爐使用, 耐高溫至240°C / 475°F F, 任何爐具均適用, 包括電磁爐, 耐用的不銹鋼手柄, 適用於洗碗碟機",
      imageUrl: "/images/openFireStove/D.png",
    },
    {
      name: "32CM 有蓋陽極氧化不黏深炒鍋",
      price: "HK$209",
      description:
        "超光滑不黏鍋, 清潔更輕鬆自如, 不含PFOA等有害物質, 防滴漏邊設計可流暢地倒出, 強化玻璃蓋讓煮食過程瞭如指掌, 符合人體工程學的手柄提供舒適握感, 適合所有爐具, 包括電磁爐",
      imageUrl: "/images/openFireStove/E.png",
    },
    {
      name: "有蓋陽極氧化不黏西式鑊",
      price: "HK$149",
      description:
        "Total® 高低坑紋不黏系統提供出色的不黏性能, 陽極氧化鋁合金鍋身導熱均勻, 手柄手感舒適便於握持, 可以放進焗爐使用, 耐高溫至180°C / 350°F, 適用於所有爐具包括電磁爐, 適用於洗碗碟機",
      imageUrl: "/images/openFireStove/F.png",
    },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="p-3 pb-md-4 mx-auto text-center">
          <h1
            className={`display-6 fw-normal text-body-emphasis ${styles.section}`}
          >
            明火爐及電磁爐鍋皆宜
          </h1>
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
    </div>
  );
};

export default App;
