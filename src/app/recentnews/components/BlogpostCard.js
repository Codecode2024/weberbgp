"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogpostCard = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="col-lg-8">
          <div className="card mb-4">
            <Link href="#">
              <Image
                className="card-img-top img-fluid"
                src="/recentnews1.jpg"
                alt="熟悉廚具與善用空間技巧"
                width={900}
                height={400}
              />
            </Link>
            <div className="card-body">
              <div className="small text-body-secondary">2024年10月8號</div>
              <h2 className="card-title">熟悉廚具與善用空間技巧</h2>
              <p className="card-text">
                廚房是現代家庭中最頻繁利用的空間之一，它的主要性不但表現在人們平時的飲食生活中，還表現在情感交換和家庭溝通上...
              </p>
              <Link className="btn btn-primary" href="#">
                閱讀更多
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="card mb-4">
                <Link href="#">
                  <Image
                    className="card-img-top img-fluid"
                    src="/recentnews2.jpg"
                    alt="白米變可口大法"
                    width={700}
                    height={350}
                  />
                </Link>
                <div className="card-body">
                  <div className="small text-body-secondary">2024年10月8號</div>
                  <h2 className="card-title h4">白米變可口大法</h2>
                  <p className="card-text">
                    白米煮出來時會比較乾鬆味道不盡如人意，但要解決這個問題一點也不困難...
                  </p>
                  <Link className="btn btn-primary" href="#">
                    閱讀更多
                  </Link>
                </div>
              </div>
              <div className="card mb-4">
                <Link href="#">
                  <Image
                    className="card-img-top img-fluid"
                    src="/recentnews3.jpg"
                    alt="蛋尖的部分應如何擺放?"
                    width={700}
                    height={350}
                  />
                </Link>
                <div className="card-body">
                  <div className="small text-body-secondary">2024年10月8號</div>
                  <h2 className="card-title h4">蛋尖的部分應如何擺放?</h2>
                  <p className="card-text">
                    大家把蛋放在冰箱的時候，相信十個媽媽九個都會把尖的一端朝...
                  </p>
                  <Link className="btn btn-primary" href="#">
                    閱讀更多
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card mb-4">
                <Link href="#">
                  <Image
                    className="card-img-top img-fluid"
                    src="/recentnews4.jpg"
                    alt="如何延長豆腐保存期?"
                    width={700}
                    height={350}
                  />
                </Link>
                <div className="card-body">
                  <div className="small text-body-secondary">2024年10月8號</div>
                  <h2 className="card-title h4">如何延長豆腐保存期?</h2>
                  <p className="card-text">
                    豆腐出了名是有效食用期短的食材，吃剩的豆腐放在冰箱數天一忘記了就變壞了...
                  </p>
                  <Link className="btn btn-primary" href="#">
                    閱讀更多
                  </Link>
                </div>
              </div>
              <div className="card mb-4">
                <Link href="#">
                  <Image
                    className="card-img-top img-fluid"
                    src="/recentnews5.jpg"
                    alt="雞肉不宜直接放冰箱保存"
                    width={700}
                    height={350}
                  />
                </Link>
                <div className="card-body">
                  <div className="small text-body-secondary">2024年10月8號</div>
                  <h2 className="card-title h4">雞肉不宜直接放冰箱保存</h2>
                  <p className="card-text">
                    雞肉含有大量水份，意味著雞肉是非常易壞的食材，因此雞肉宜先經過調味...
                  </p>
                  <Link className="btn btn-primary" href="#">
                    閱讀更多
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogpostCard;
