"use client";
import React from "react";
import styles from "./distribution.module.css";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Loading = dynamic(() => import("./loading"));

const ProductDistribution = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="p-3 pb-md-4 mx-auto text-center">
            <h1 className={`display-6 fw-normal text-light ${styles.section}`}>
              分銷店位置
            </h1>
          </div>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"></div>
              <div className="border border-light p-3 rounded">
                <h3 className="fs-1 text-light text-center mb-4">香港區</h3>
                <div className="text-start">
                  <p className="fs-3 text-light">永安百貨 - 上環</p>
                  <p className="fs-5 pb-5 text-light">
                    上環德輔道中211號永安中心
                  </p>
                  <p className="fs-3 text-light">Mono Mono - 銅鑼灣</p>
                  <p className="fs-5 pb-5 text-light">
                    香港銅鑼灣Fashion Walk 京士頓街9號C鋪地下及1樓
                  </p>
                  <p className="fs-4 text-light">新都城百貨 - 北角</p>
                  <p className="fs-5 pb-5 text-light">
                    北角英皇道416-438號新都城大廈
                  </p>
                  <p className="fs-4 text-light">永旺百貨 - 康怡</p>
                  <p className="fs-5 pb-5 text-light">康山道2號康怡廣場南</p>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"></div>
              <div className="border border-light p-3 rounded">
                <h3 className="fs-2 text-light text-center mb-4">九龍區</h3>
                <div className="text-start">
                  <p className="fs-4 text-light">永旺百貨 - 九龍灣</p>
                  <p className="fs-5 pb-5 text-light">
                    九龍灣宏照道38號企業廣場5期MegaBox 2樓
                  </p>
                  <p className="fs-4 text-light">永旺百貨 - 九龍城</p>
                  <p className="fs-5 pb-5 text-light">
                    九龍城賈炳達道128號九龍城廣場1樓部分、2樓及3樓
                  </p>
                  <p className="fs-4 text-light">UNY - 樂富</p>
                  <p className="fs-5 pb-5 text-light">橫頭磡樂富廣場2樓</p>
                  <p className="fs-4 text-light">永旺百貨 - 黃埔</p>
                  <p className="fs-5 pb-5 text-light">
                    黃埔花園第5及6期地下及地庫1層
                  </p>
                  <p className="fs-4 text-light">百佳超級廣場 - 黃埔</p>
                  <p className="fs-5 pb-5 text-light">
                    九龍紅磡黃埔花園第3期地下1A號鋪
                  </p>
                  <p className="fs-4 text-light">永安百貨 - 彌敦道</p>
                  <p className="fs-5 pb-5 text-light">
                    佐敦彌敦道345號永安九龍中心
                  </p>
                  <p className="fs-4 text-light">永安百貨 - 尖東</p>
                  <p className="fs-5 pb-5 text-light">
                    尖沙咀東部麼地道62號永安廣場
                  </p>
                  <p className="fs-4 text-light">先施百貨 - 旺角</p>
                  <p className="fs-5 pb-5 text-light">
                    旺角彌敦道628號瓊華中心3樓
                  </p>
                  <p className="fs-4 text-light">先施百貨 - 深水埗</p>
                  <p className="fs-5 pb-5 text-light">
                    深水埗欽州街37K西九龍中心3樓
                  </p>
                  <p className="fs-4 text-light">永旺百貨 - 荔枝角</p>
                  <p className="fs-5 pb-5 text-light">
                    荔枝角深盛路8號碧海藍天
                  </p>
                  <p className="fs-4 text-light">Fusion - 觀塘</p>
                  <p className="fs-5 pb-5 text-light">
                    九龍茶果嶺道麗港城第一期商場地下
                  </p>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"></div>
              <div className="border border-light p-3 rounded">
                <h3 className="fs-2 text-light text-center mb-4">新界區</h3>
                <div className="text-start">
                  <p className="fs-4 text-light">一田百貨 - 大埔</p>
                  <p className="fs-5 pb-5 text-light">
                    大埔安邦路8號大埔超級城B區1至2樓
                  </p>
                  <p className="fs-4 text-light">一田百貨 - 沙田</p>
                  <p className="fs-5 pb-5 text-light">
                    沙田正街2號新城市廣場3期
                  </p>
                  <p className="fs-4 text-light">千色店 - 馬鞍山</p>
                  <p className="fs-5 pb-5 text-light">
                    沙田馬鞍山鞍祿街18號新港城中心三樓
                  </p>
                  <p className="fs-4 text-light">百佳超級市場 - 馬鞍山</p>
                  <p className="fs-5 pb-5 text-light">
                    新界沙田馬鞍山西沙路608號馬鞍山廣場3樓343-363號鋪
                  </p>
                  <p className="fs-4 text-light">千色店 - 元朗</p>
                  <p className="fs-5 pb-5 text-light">
                    元朗教育路1號元朗千色匯3至4樓
                  </p>
                  <p className="fs-4 text-light">百佳超級市場 - 天水圍</p>
                  <p className="fs-5 pb-5 text-light">
                    天水圍天恩路12-18號嘉湖銀座一期2樓全層 2/F
                  </p>
                  <p className="fs-4 text-light">千色店 - 屯門</p>
                  <p className="fs-5 pb-5 text-light">屯門時代廣場北翼3樓</p>
                  <p className="fs-4 text-light">永旺百貨 - 屯門</p>
                  <p className="fs-5 pb-5 text-light">
                    新界屯門屯順街 1 號屯門市廣場 1 期地面高層
                  </p>
                  <p className="fs-4 text-light">永旺百貨 - 荃灣</p>
                  <p className="fs-5 pb-5 text-light">
                    荃灣大河道88號灣景廣場地下至3樓全層
                  </p>
                  <p className="fs-4 text-light">千色店 - 荃灣</p>
                  <p className="fs-5 pb-5 text-light">
                    荃灣地段301號荃灣城市中心II期
                  </p>
                  <p className="fs-4 text-light">一田百貨 - 荃灣</p>
                  <p className="fs-5 pb-5 text-light">
                    荃灣大壩街4號荃灣廣場2樓至4樓
                  </p>

                  <p className="fs-4 text-light">永旺百貨 - 大窩口</p>
                  <p className="fs-5 pb-5 text-light">荃灣荃華街3號悅來坊B3</p>
                  <p className="fs-4 text-light">永旺百貨 - 將軍澳</p>
                  <p className="fs-5 pb-5 text-light">
                    唐德街1號將軍澳廣場2樓2-021至2-066號舖
                  </p>
                  <p className="fs-4 text-light">千色店 - 將軍澳</p>
                  <p className="fs-5 pb-5 text-light">
                    將軍澳新都城中心商場2期2樓
                  </p>
                  <p className="fs-4 text-light">百佳超級市場 - 將軍澳</p>
                  <p className="fs-5 pb-5 text-light">
                    將軍澳厚德邨厚德商場2樓
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDistribution;
