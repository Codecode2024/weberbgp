"use client";
import React from "react";
import Image from "next/image";
import styles from "./openFireStoveOnly.module.css";

const Product = ({ name, price, description, imageUrl }) => {
  return (
    <div className="col-md-4 mb-4">
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
          <p className={styles.desc}>{description}</p>
          <p className={styles.setPrice}>{price}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const products = [
    {
      name: "26CM 有蓋鑄鐵鍋",
      price: "HK$239",
      description:
        "傳熱均勻和儲熱長久 - 有良好導熱及儲熱性能用小火即可逹到良好的加熱效果，節能省時沒有添加合成塗料和化學藥品，天然健康烹飪適當開鍋，養鍋，提供天然不黏效果玻璃蓋加有矽膠蓋邊方便貼合，可讓煮食過程瞭如指掌清洗容易適用於各種爐具，包括電磁爐可放進焗爐使用，耐高溫至180°C / 350°F",
      imageUrl: "/images/openFireStoveOnly/A.png",
    },
    {
      name: "20CM 有蓋鑄鐵鍋",
      price: "HK$237",
      description:
        "傳熱均勻和儲熱長久 有良好導熱及儲熱性能用小火即可逹到良好的加熱效果，節能省時沒有添加合成塗料和化學藥品，天然健康烹飪適當開鍋，養鍋，提供天然不黏效果玻璃蓋加有矽膠蓋邊方便貼合，可讓煮食過程瞭如指掌清洗容易適用於各種爐具，包括電磁爐可放進焗爐使用，耐高溫至 180°C / 350°F",
      imageUrl: "/images/openFireStoveOnly/B.png",
    },
    {
      name: "20CM 有蓋鑄鐵鍋",
      price: "HK$199",
      description:
        "傳熱均勻和儲熱長久 有良好導熱及儲熱性能用小火即可逹到良好的加熱效果，節能省時沒有添加合成塗料和化學藥品，天然健康烹飪適當開鍋，養鍋，提供天然不黏效果玻璃蓋加有矽膠蓋邊方便貼合，可讓煮食過程瞭如指掌清洗容易適用於各種爐具，包括電磁爐可放進焗爐使用，耐高溫至 180°C / 350°F",
      imageUrl: "/images/openFireStoveOnly/C.png",
    },
    {
      name: "20CM 有蓋鑄鐵深鍋",
      price: "HK$237",
      description:
        "傳熱均勻和儲熱長久 - 有良好導熱及儲熱性能用小火即可逹到良好的加熱效果，節能省時沒有添加合成塗料和化學藥品，天然健康烹飪適當開鍋，養鍋，提供天然不黏效果玻璃蓋加有矽膠蓋邊方便貼合，可讓煮食過程瞭如指掌清洗容易適用於各種爐具，包括電磁爐可放進焗爐使用，耐高溫至180°C / 350°F",
      imageUrl: "/images/openFireStoveOnly/D.png",
    },
    {
      name: "24CM 有蓋鑄鐵深鍋",
      price: "HK$279",
      description:
        "傳熱均勻和儲熱長久 - 有良好導熱及儲熱性能用小火即可逹到良好的加熱效果，節能省時沒有添加合成塗料和化學藥品，天然健康烹飪適當開鍋，養鍋，提供天然不黏效果玻璃蓋加有矽膠蓋邊方便貼合，可讓煮食過程瞭如指掌清洗容易適用於各種爐具，包括電磁爐可放進焗爐使用，耐高溫至180°C / 350°F",
      imageUrl: "/images/openFireStoveOnly/E.png",
    },
  ];

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="p-3 pb-md-4 mx-auto text-center">
            <h1
              className={`display-6 fw-normal text-body-emphasis ${styles.section}`}
            >
              明火爐鍋
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
