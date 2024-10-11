"use client";
import styles from "../wok/wok.module.css";

import { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const WokPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const categories = ["所有尺寸", "26cm", "27cm", "28cm", "32cm"];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/wok_data.json");
      const data = await response.json();
      setProducts(data.images);
      setFilteredProducts(data.images); // 預設顯示所有產品
    };
    fetchData();
  }, []);

  const filterProducts = (category) => {
    if (category === "所有尺寸") {
      setFilteredProducts(products); // 顯示所有產品
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered); // 顯示過濾後的產品
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="p-3 pb-md-4 mx-auto text-center">
          <h1
            className={`display-6 fw-normal text-body-emphasis ${styles.headerTitle}`}
          >
            炒鍋
          </h1>
          <div className="container overflow-hidden">
            <div className="row gy-5">
              <div className="mb-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="btn btn-outline-light me-2 my-2"
                    onClick={() => filterProducts(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="row mt-5">
              {filteredProducts.map((product) => (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 mb-4"
                  key={product.src}
                >
                  <div className="card">
                    <img
                      src={`/images/wok/${product.src}`}
                      className="card-img-top"
                      alt={product.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text text-danger">{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WokPage;
