"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import home_pan_right_1 from "../../public/home_pan_right_1.jpg";

const Home = () => {
  return (
    <div className={styles.section}>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6">
              <h2 className="mb-4">
                美亞優質廚具 <br /> 不黏煎炒鍋，讓您的廚房生活更輕鬆！
              </h2>
              <p>
                您是否厭倦了傳統鍋具的黏鍋、難清洗和耗油等問題？ <br />
                想要一款真正能夠提升您廚藝和烹飪樂趣的鍋具？ <br />
                那麼，您絕對不能錯過美亞優質廚具的不黏煎炒鍋！
              </p>
              <button className="btn btn-outline-primary mx-1">聯絡我們</button>
            </div>
            <div className="col-md-6">
              <Image
                src={home_pan_right_1}
                width={478}
                height={400}
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
