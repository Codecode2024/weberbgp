"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import VideoSection from "./Videosection";
import HotSellProducts from "./HotSellProducts";
import ProductCategories from "./ProductCategories";

const Home = () => {
  return (
    <>
      {/* Start Video */}
      <section className="mt-4">
        <VideoSection />
      </section>
      {/* End Video */}

      {/* Start Hero */}
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="text-center col-lg-6 col-md-12">
              <h1 className={`fw-semibold text-lg ${styles.heroTitle}`}>
                美亞廚具 · 國際鍋具品牌
              </h1>
              <p className={styles.heroSubtitle}>
                不斷創新，將驚喜產品帶入鍋具世界
              </p>

              <div className="col-md-12 col-lg-6 d-flex justify-content-center py-3">
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
      </section>
      {/* End Hero */}

      {/* Start Hot Sell Product */}
      <HotSellProducts />
      {/* End Hot Sell Product */}

      {/* Start Product Category*/}
      <ProductCategories />
      {/* End Product Category */}

      {/* Start MainAboutUs */}
      <section>
        <div className="container">
          <h1 className={styles.hotProducts}>關於我們</h1>
          <div className="row w-100">
            <div className="text-center col-md-12 col-lg-6 order-md-1 order-2">
              <Image
                src="/images/mainpage/main-about-us.jpg"
                width={700}
                height={500}
                alt="img"
                className={`img-fluid ${styles.mainAboutUs}`}
              />
            </div>
            <div className="col-md-12 col-lg-6 order-md-2 order-1 text-center d-flex justify-content-center flex-column align-items-center">
              <h1 className={`fw-semibold text-lg ${styles.mainAboutTitle}`}>
                與Meyer Labs 繼續展開里程碑
              </h1>
              <p className={styles.heroSubtitle}>
                我們的核心一直秉持著對美食的熱愛及設計的熱誠，並希望為您的廚具及廚房帶來一點活力及火花
              </p>
              <Link
                href="/about"
                className={`mt-3 mb-5 btn btn-outline-primary ${styles.heroBtn}`}
              >
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* End MainAboutUs */}
    </>
  );
};

export default Home;
