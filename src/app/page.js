"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import VideoSection from "./Videosection";
import HotSellProducts from "./HotSellProducts";
import ProductCategories from "./ProductCategories";

const Home = () => {
  const [hotProducts, setHotProducts] = useState([]);

  useEffect(() => {
    const fetchHotProducts = async () => {
      const response = await fetch("/api/hotproducts.json");
      const data = await response.json();
      setHotProducts(data);
    };

    fetchHotProducts();
  }, []);

  return (
    <>
      {/* Start Video */}
      <section className="mt-4">
        <VideoSection />
      </section>
      {/* End Video */}

      {/* Start Hero */}
      <section>
        <div className={`bg-gradient ${styles.heroContainer}`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12 mb-4 mb-lg-0">
                <h1
                  className={`fw-semibold text-center text-lg ${styles.heroTitle}`}
                >
                  美亞廚具 · 國際鍋具品牌
                </h1>
                <p className={`text-center ${styles.heroSubtitle}`}>
                  不斷創新，將驚喜產品帶入鍋具世界
                </p>

                <div className="d-flex justify-content-center py-3">
                  <Link
                    href="/products"
                    className={`btn btn-outline-primary ${styles.heroBtn}`}
                  >
                    了解更多
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-12">
                <div className="position-relative">
                  <Image
                    src="/images/mainpage/hero-section.png"
                    alt="img"
                    className="img-fluid d-flex justify-content-center align-items-center"
                    width={700}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}

      {/* Start Hot Sell Product */}
      <HotSellProducts />
      {/* End Hot Sell Product */}

      {/* Start Product Category*/}
      <ProductCategories />
      {/* End Product Category */}

      {/* Start Hero */}
      <section>
        <div className={`bg-gradient ${styles.heroContainer}`}>
          <div className="container mt-4">
            <h1 className={styles.hotProducts}>關於我們</h1>
            <div className="row align-items-center">
              <div className="col-lg-6 col-12 mb-4 mb-lg-0">
                <div className="position-relative">
                  <Image
                    src="/images/mainpage/main-about-us.jpg"
                    alt="img"
                    className="img-fluid rounded d-flex justify-content-center align-items-center"
                    width={700}
                    height={500}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-12">
                <div style={{ marginBottom: "150px" }}>
                  <h1
                    className={`fw-semibold text-center text-lg ${styles.heroTitle}`}
                  >
                    與Meyer Labs 繼續展開里程碑
                  </h1>
                  <p className={`text-center ${styles.heroSubtitle}`}>
                    我們的核心一直秉持著對美食的熱愛及設計的熱誠，並希望為您的廚具及廚房帶來一點活力及火花
                  </p>
                  <div className="d-flex justify-content-center py-3">
                    <Link
                      href="/about"
                      className={`btn btn-outline-primary ${styles.heroBtn}`}
                    >
                      了解更多
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
    </>
  );
};

export default Home;
