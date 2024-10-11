import React from "react";
import styles from "../contact/contact.module.css";
import {
  BsFillGeoFill,
  BsFillTelephoneFill,
  BsEnvelopeAt,
  BsAlarm,
  BsTelephone,
} from "react-icons/bs";

const Contact = () => {
  return (
    <div className={styles.sections}>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1
              className={`display-6 fw-normal text-body-emphasis ${styles.headerTitle}`}
            >
              聯絡我們
            </h1>
          </div>
          <section className="bg-light py-3 py-md-5">
            <div className="container">
              <div className="row gy-3 gy-md-4 gy-lg-0 align-items-md-center">
                <div className="col-12 col-lg-6">
                  <div className="row justify-content-xl-center">
                    <div className="col-12 col-xl-11">
                      <h2 className="h1 mb-3">保持聯絡</h2>
                      <p className="lead fs-4 text-secondary mb-5">
                        我們一直在尋找與新客戶的合作。如果您有興趣與我們合作，又或想更了解我們多一些，請透過以下方式之一與我們聯繫。
                      </p>
                      <div className="d-flex mb-5">
                        <div className="me-4 text-primary">
                          <BsFillGeoFill size={30} />
                        </div>
                        <div>
                          <h4 className="mb-3">旗艦店地址</h4>
                          <address className="mb-0 text-secondary">
                            九龍觀塘道382號地下
                          </address>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-12 col-sm-6">
                          <div className="d-flex mb-5 mb-sm-0">
                            <div className="me-4 text-primary">
                              <BsFillTelephoneFill size={28} />
                            </div>
                            <div>
                              <h4 className="mb-3">電話</h4>
                              <p className="mb-0">(852) 2763 9313</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="d-flex mb-0">
                            <div className="me-4 text-primary">
                              <BsEnvelopeAt size={30} />
                            </div>
                            <div>
                              <h4 className="mb-3">電郵</h4>
                              <p className="mb-0">
                                <a
                                  className="link-secondary text-decoration-none"
                                  href="mailto:myrexenquiry@meyer-mxl.com"
                                >
                                  myrexenquiry@meyer-mxl.com
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="me-4 text-primary">
                          <BsAlarm size={30} />
                        </div>
                        <div>
                          <h4 className="mb-3">營業時間</h4>
                          <div className="d-flex mb-1">
                            <p className="text-secondary fw-bold mb-0 me-5">
                              星期一至日
                            </p>
                            <p className="text-secondary mb-0">10am - 8pm</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="bg-white border rounded shadow-sm overflow-hidden">
                    <form action="#!">
                      <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                        <div className="col-12">
                          <label htmlFor="fullname" className="form-label">
                            姓名 <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullname"
                            name="fullname"
                            autoComplete="off"
                            required
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="email" className="form-label">
                            電郵 <span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-text">
                              <BsEnvelopeAt />
                            </span>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="phone" className="form-label">
                            電話
                          </label>
                          <div className="input-group">
                            <span className="input-group-text">
                              <BsTelephone />
                            </span>
                            <input
                              type="tel"
                              className="form-control"
                              id="phone"
                              autoComplete="off"
                              name="phone"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="subject" className="form-label">
                            主題 <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            name="subject"
                            autoComplete="off"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="message" className="form-label">
                            輸入訊息 <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows={3}
                            autoComplete="off"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <button
                              className="btn btn-primary btn-lg"
                              type="submit"
                            >
                              發送
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
