import React from "react";
import Link from "next/link";
import styles from "./header.module.css";
const Header = () => {
  return (
    <>
      <section>
        <nav className={`navbar navbar-expand-lg fixed-top ${styles.header}`}>
          <div className="container">
            <Link
              className={`navbar-brand fw-bold fs-2 ${styles.link_text}`}
              href="/"
            >
              MEYER
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link active fs-5 ${styles.link_text}`}
                    aria-current="page"
                    href="/"
                  >
                    主頁
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link fs-5 ${styles.link_text}`}
                    href="/blogpost"
                  >
                    小技巧
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link fs-5 ${styles.link_text}`}
                    href="/recentnews"
                  >
                    最新資訊
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className={`nav-link fs-5 ${styles.link_text}`}
                    href="/maintenance"
                  >
                    保養條款
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className={`nav-link fs-5 dropdown-toggle ${styles.link_text}`}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    優質煎炒鍋
                  </Link>
                  <ul className={`dropdown-menu ${styles.dropdown_background}`}>
                    <li>
                      <Link
                        className={`nav-link fs-5 ${styles.link_text}`}
                        href="/products"
                      >
                        新品上架
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link fs-5 ${styles.link_text}`}
                        href="/fryingpan"
                      >
                        煎鍋
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link fs-5 ${styles.link_text}`}
                        href="/wok"
                      >
                        炒鍋
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link fs-5 ${styles.link_text}`}
                        href="/new"
                      >
                        洗碗碟機適用系列
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link fs-5 ${styles.link_text}`}
                        href="#"
                      >
                        明火爐鍋
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link fs-5 ${styles.link_text}`}
                        href="#"
                      >
                        電磁爐鍋
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link fs-5 ${styles.link_text}`}
                        href="#"
                      >
                        明火爐及電磁爐鍋皆宜
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className={`nav-link fs-5 dropdown-toggle ${styles.link_text}`}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    關於我們
                  </Link>
                  <ul className={`dropdown-menu ${styles.dropdown_background}`}>
                    <li>
                      <Link
                        className={`nav-link fs-5 ${styles.link_text}`}
                        href="/about"
                      >
                        關於美亞
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link fs-5 ${styles.link_text}`}
                        href="/location"
                      >
                        旗艦店位置
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link fs-5 ${styles.link_text}`}
                        href="/distribution"
                      >
                        分銷店位置
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link fs-5 ${styles.link_text}`}
                    href="/contact"
                  >
                    聯絡我們
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
