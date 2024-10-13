import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import about_01 from "../../../public/about_01.jpg";
import about_02 from "../../../public/about_02.jpg";
import about_03 from "../../../public/about_03.jpg";
import about_04 from "../../../public/about_04.jpg";
import about_05 from "../../../public/about_05.jpg";

const About = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="p-3 pb-md-4 mx-auto text-center">
            <h1
              className={`display-6 fw-normal text-body-emphasis ${styles.section}`}
            >
              關於美亞
            </h1>
          </div>
          <section className="py-3 py-md-5">
            <div className="container overflow-hidden">
              <div className="row gy-5">
                <div className="col-12 bg-light">
                  <div className="row align-items-center gy-3 gy-md-0 gx-xl-5">
                    <div className="col-xs-12 col-md-6">
                      <div className="img-wrapper position-relative bsb-hover-push">
                        <Image
                          className={`img-fluid rounded w-100 h-100 object-fit-cover ${styles.imageConfig}`}
                          loading="lazy"
                          src={about_01}
                          alt="Travel2"
                          width={400}
                          height={300}
                        />
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      {/* start intro-1 */}
                      <div>
                        <h2 className="h1 mb-3">
                          <p className="fs-3 text-secondary mb-1 p-3">由來</p>
                        </h2>
                        <p className="mb-4 lh-lg">
                          美亞廚具（Meyer
                          Corporation）成立於1951年，起源於一間香港的小型工廠，專注於製造高品質的不黏易潔鍋具。隨著技術進步，公司逐步擴展至全球市場，成為全球領先的廚具製造商之一。美亞鍋具在創新上引入革命性的表面處理技術，使其產品不僅具備優異的不黏性能，還更耐用且易於清潔。這使其在市場上佔有很大份額，特別是在家庭烹飪領域。
                        </p>
                      </div>
                      {/* end intro-1 */}
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
                    <div className="col-xs-12 col-md-6">
                      <div className="img-wrapper position-relative bsb-hover-push">
                        <Image
                          className={`img-fluid rounded w-100 h-100 object-fit-cover ${styles.imageConfig}`}
                          loading="lazy"
                          src={about_02}
                          alt="Travel"
                          width={400}
                          height={300}
                        />
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      {/* start intro-2 */}
                      <div>
                        <h2 className="h1 mb-3">
                          <p className="fs-3 mb-1 text-white p-3">盡心</p>
                        </h2>
                        <p className="mb-4 text-white lh-lg">
                          美亞的特色之一在於其廚具設計上融入人體工學，讓使用者無論年齡，都能輕鬆操作。美亞強調企業的願景就是透過烹飪拉近人與人之間的距離，並希望每一位使用者都能感受到來自鍋具的溫暖。美亞廚具也積極回饋社會，參與多項慈善活動，並通過高品質的產品為顧客提供優越的烹飪體驗。
                        </p>
                      </div>
                      {/* start intro-2 */}
                    </div>
                  </div>
                </div>

                <div className="col-12 bg-light">
                  <div className="row align-items-center gy-3 gy-md-0 gx-xl-5">
                    <div className="col-xs-12 col-md-6">
                      <div className="img-wrapper position-relative bsb-hover-push">
                        <Image
                          className={`img-fluid rounded w-100 h-100 object-fit-cover ${styles.imageConfig}`}
                          loading="lazy"
                          src={about_03}
                          alt="Travel"
                          width={400}
                          height={300}
                        />
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      {/* start intro-3 */}
                      <div>
                        <h2 className="h1 mb-3">
                          <p className="fs-3 text-secondary mb-1 p-3">進取</p>
                        </h2>
                        <p className="mb-4 lh-lg">
                          在企業精神方面，美亞秉承精益求精的態度，致力於將創新融入產品中，同時保證每一件廚具都符合最高的質量標準。其服務宗旨為提供客戶滿意度和耐用性高的廚具，並注重售後服務。企業文化則圍繞著合作與創新，力求讓每個員工在不同崗位上發揮所長，進一步推動企業的發展。
                        </p>
                      </div>
                      {/* end intro-3 */}
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
                    <div className="col-xs-12 col-md-6">
                      <div className="img-wrapper position-relative bsb-hover-push">
                        <Image
                          className={`img-fluid rounded w-100 h-100 object-fit-cover ${styles.imageConfig}`}
                          loading="lazy"
                          src={about_04}
                          alt="Travel"
                          width={400}
                          height={300}
                        />
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      {/* start intro-4 */}
                      <div>
                        <h2 className="h1 mb-3">
                          <p className="fs-3 text-white mb-1 p-3">追求</p>
                        </h2>
                        <p className="mb-4 text-white lh-lg">
                          美亞的鍋具不僅設計簡約時尚，而且通過長期的市場調查及研究來提升烹飪體驗。這些廚具的耐用性和實用性尤其受到年長者的喜愛，他們可以輕鬆操作，並享受烹飪的樂趣。美亞相信，廚具不僅是烹飪的工具，更是將人與人聯繫起來的橋梁，通過溫馨的餐桌體驗帶給家庭更多的快樂。
                        </p>
                      </div>
                      {/* end intro-4 */}
                    </div>
                  </div>
                </div>

                <div className="col-12 bg-light">
                  <div className="row align-items-center gy-3 gy-md-0 gx-xl-5">
                    <div className="col-xs-12 col-md-6">
                      <div className="img-wrapper position-relative bsb-hover-push">
                        <Image
                          className={`img-fluid rounded w-100 h-100 object-fit-cover ${styles.imageConfig}`}
                          loading="lazy"
                          src={about_05}
                          alt="Travel"
                          width={400}
                          height={300}
                        />
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      {/* start intro-5 */}
                      <div>
                        <h2 className="h1 mb-3">
                          <p className="fs-3 text-secondary mb-1 p-3">期盼</p>
                        </h2>
                        <p className="mb-4 lh-lg">
                          美亞廚具不僅在產品技術、質量上具備領先優勢，還在企業文化、社會責任和服務宗旨上展現了持續創新的精神，將烹飪的溫暖傳遞至全球每一個家庭。
                        </p>
                      </div>
                      {/* end intro-5 */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
