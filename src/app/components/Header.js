"use client";
import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  const handleNavLinkClick = () => {
    const navbarCollapse = document.querySelector("#navbarNavDropdown");
    if (navbarCollapse && window.bootstrap) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse);
      if (navbarCollapse.classList.contains("show")) {
        bsCollapse.hide();
      }
    } else {
      console.error("Bootstrap is not loaded or navbarCollapse is undefined.");
    }
  };
  return (
    <>
      <section>
        <nav className={`navbar navbar-expand-lg fixed-top ${styles.header}`}>
          <div className="container">
            <Link
              className={`navbar-brand fw-bold fs-2 ${styles.link_text}`}
              href="/"
              onClick={handleNavLinkClick}
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
                    onClick={handleNavLinkClick}
                  >
                    主頁
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link fs-5 ${styles.link_text}`}
                    href="/blogpost"
                    onClick={handleNavLinkClick}
                  >
                    小技巧
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link fs-5 ${styles.link_text}`}
                    href="/recentnews"
                    onClick={handleNavLinkClick}
                  >
                    最新資訊
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className={`nav-link fs-5 ${styles.link_text}`}
                    href="/maintenance"
                    onClick={handleNavLinkClick}
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
                        onClick={handleNavLinkClick}
                      >
                        新品上架
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link fs-5 ${styles.link_text}`}
                        href="/fryingpan"
                        onClick={handleNavLinkClick}
                      >
                        煎鍋
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link fs-5 ${styles.link_text}`}
                        href="/wok"
                        onClick={handleNavLinkClick}
                      >
                        炒鍋
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link fs-5 ${styles.link_text}`}
                        href="/new"
                        onClick={handleNavLinkClick}
                      >
                        洗碗碟機適用系列
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link fs-5 ${styles.link_text}`}
                        href="/openFireStoveOnly"
                        onClick={handleNavLinkClick}
                      >
                        明火爐鍋
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link fs-5 ${styles.link_text}`}
                        href="/inductionCookerWok"
                        onClick={handleNavLinkClick}
                      >
                        電磁爐鍋
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link fs-5 ${styles.link_text}`}
                        href="/openFireStove"
                        onClick={handleNavLinkClick}
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
                        onClick={handleNavLinkClick}
                      >
                        關於美亞
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link fs-5 ${styles.link_text}`}
                        href="/location"
                        onClick={handleNavLinkClick}
                      >
                        旗艦店位置
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link fs-5 ${styles.link_text}`}
                        href="/distribution"
                        onClick={handleNavLinkClick}
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
                    onClick={handleNavLinkClick}
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
