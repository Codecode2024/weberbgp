"use client";
import React from "react";
import styles from "../location/location.module.css";
import Accordion from "react-bootstrap/Accordion";
import { Fade } from "react-awesome-reveal";

const Location = () => {
  return (
    <div className={styles.section}>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-6 fw-normal text-body-emphasis">
              美亞廚具旗艦店位置
            </h1>
          </div>
          <Fade direction="left">
            <div className="row g-5 mt-4">
              <div className="col-lg-12">
                <p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.7590042190908!2d114.21997320183652!3d22.31447757923849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040148d091fefb%3A0x4764929bc03bac41!2z576O5Lqe5bua5YW36auU6amX5bqX!5e0!3m2!1szh-TW!2shk!4v1727640305594!5m2!1szh-TW!2shk"
                    width="100%"
                    height="450"
                    className={styles.editmap}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </p>
              </div>
            </div>
          </Fade>
          <Fade direction="right">
            <div className="row g-5 mt-4">
              <div className="col-lg-12">
                <div className="p-3 pb-md-4 mx-auto text-center">
                  <h1 className="display-6 fw-normal text-body-emphasis">
                    前往方法
                  </h1>
                </div>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>自駕</Accordion.Header>
                    <Accordion.Body>
                      九龍觀塘道382號地下 | 美亞顧客停車場位於創業街2號 -
                      創紀之城第1期側
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>地鐵或巴士</Accordion.Header>
                    <Accordion.Body>
                      地鐵: <br />
                      牛頭角港鐵站A出口 <br />
                      巴士: <br />
                      往藍田方向13D, 13M, 14B, 23M, 89, 89B, 89X, 98A,15A, 38,
                      40P, 61R, 69C, 74C, 74D, 74E,74X, 89C, 93K, 234C, 268C,
                      269C, 296A, 796S <br />
                      往九龍灣方向102, 11B, 11C, 11D, 15A
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Location;
