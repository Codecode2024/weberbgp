"use client";
import React, { useState } from "react";
import Image from "next/image";
import imgA from "../../../public/images/dishwasher/dashwasher_01.jpg";
import imgB from "../../../public/images/dishwasher/dashwasher_02.jpg";
import imgC from "../../../public/images/dishwasher/dashwasher_03.jpg";
import imgD from "../../../public/images/dishwasher/dashwasher_04.jpg";
import imgE from "../../../public/images/dishwasher/dashwasher_05.jpg";
import imgF from "../../../public/images/dishwasher/dashwasher_06.jpg";
import imgG from "../../../public/images/dishwasher/dashwasher_07.jpg";
import imgH from "../../../public/images/dishwasher/dashwasher_08.jpg";
import imgI from "../../../public/images/dishwasher/dashwasher_09.jpg";

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedPrice, setSelectedPrice] = useState(
    "BOSCH洗碗機擁有歐系品牌少見的中式碗籃設計，能輕鬆放入台灣人習慣使用的飯碗。可調整的支架設計與碗籃高度調整系統Rackmatic，可作各種彈性組合，可輕鬆放入碗公、炒鍋、湯鍋等大型鍋具，連刀具、砧板也可輕鬆置入，餐後請將所有餐具都交給洗碗機處理吧！"
  );
  const [productName, setProductName] = useState("洗碗機");
  const [productImage, setProductImage] = useState("/new-image/5.jpg");

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    if (e.target.value === "S") {
      setSelectedPrice(
        "BOSCH洗碗機擁有歐系品牌少見的中式碗籃設計，能輕鬆放入台灣人習慣使用的飯碗。可調整的支架設計與碗籃高度調整系統Rackmatic，可作各種彈性組合，可輕鬆放入碗公、炒鍋、湯鍋等大型鍋具，連刀具、砧板也可輕鬆置入，餐後請將所有餐具都交給洗碗機處理吧！"
      );
      setProductName("洗碗機");
      setProductImage("/new-image/5.jpg");
    } else if (e.target.value === "M") {
      setSelectedPrice(
        "多士爐主要功能是為麵包進行加熱，但優質的多士爐卻可以使用多重烘烤功能使麵包更好吃。建議大家選購帶有解凍功能、加熱停止功能以及再加熱功能的多士爐。"
      );
      setProductName("多士爐");
      setProductImage("/new-image/7.jpg");
    } else if (e.target.value === "L") {
      setSelectedPrice(
        "用途廣泛的微波爐，已成為現代家庭中不可或缺的廚房電器之一。除了常見的加熱、解凍功能，近年來也出現具備多種烹調功能的機型，像是烘烤微波爐、水波爐等，讓人們能夠製作出更多樣化的料理。然而，各大品牌如 SHARP夏普、SAMPO聲寶、Panasonic國際牌等，皆紛紛推出多款特色產品，究竟該如何選購才好呢？"
      );
      setProductName("微波爐");
      setProductImage("/new-image/3.jpg");
    }
  };

  return (
    <>
      <section style={{ marginTop: "64px" }}>
        {/* -- Carousel -- */}
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          {/* -- The slideshow/carousel -- */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                src={imgA}
                alt="..."
                className="d-block w-100"
                width={1288}
                height={350}
              />
            </div>
            <div className="carousel-item">
              <Image
                src={imgB}
                alt="..."
                className="d-block w-100"
                width={1288}
                height={350}
              />
            </div>
            <div className="carousel-item">
              <Image
                src={imgC}
                alt="..."
                className="d-block w-100"
                width={1288}
                height={350}
              />
            </div>
            <div className="carousel-item">
              <Image
                src={imgD}
                alt="..."
                className="d-block w-100"
                width={1288}
                height={350}
              />
            </div>
            <div className="carousel-item">
              <Image
                src={imgE}
                alt="..."
                className="d-block w-100"
                width={1288}
                height={350}
              />
            </div>
            <div className="carousel-item">
              <Image
                src={imgF}
                alt="..."
                className="d-block w-100"
                width={1288}
                height={350}
              />
            </div>
            <div className="carousel-item">
              <Image
                src={imgG}
                alt="..."
                className="d-block w-100"
                width={1288}
                height={350}
              />
            </div>
            <div className="carousel-item">
              <Image
                src={imgH}
                alt="..."
                className="d-block w-100"
                width={1288}
                height={350}
              />
            </div>
            <div className="carousel-item">
              <Image
                src={imgI}
                alt="..."
                className="d-block w-100"
                width={1288}
                height={350}
              />
            </div>
          </div>

          {/* -- Left and right controls/icons -- */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section>
        <div className="product-page">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 my-5">
                <h1 className="text-light pb-3">{productName}</h1>
                <p className="text-light">產品介紹: ${selectedPrice}</p>

                <label htmlFor="size-select" className="text-light pe-3">
                  種類:
                </label>

                <select
                  id="size-select"
                  value={selectedSize}
                  onChange={handleSizeChange}
                >
                  <option value="S">洗碗機</option>
                  <option value="M">多士爐</option>
                  <option value="L">微波爐</option>
                </select>
              </div>
              <div className="col-md-6 my-5">
                <Image
                  src={productImage}
                  alt="Product Image"
                  className="img-fluid rounded"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>

          {/* <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image
                  src={imgA}
                  className="d-block w-100 img-fluid"
                  alt="..."
                  width={600}
                  height={400}
                />
              </div>
              <div className="carousel-item">
                <Image
                  src={imgB}
                  className="d-block w-100"
                  alt="..."
                  width={600}
                  height={400}
                />
              </div>
              <div className="carousel-item">
                <Image
                  src={imgC}
                  className="d-block w-100"
                  alt="..."
                  width={600}
                  height={300}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ProductPage;
