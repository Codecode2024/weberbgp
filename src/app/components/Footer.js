import React from "react";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { GiSaucepan } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <GiSaucepan width={24} height={24} />
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2024 美亞廚具-旗艦店
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://twitter.com"
              target="_blank"
            >
              <BsTwitter width={24} height={24} />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://www.facebook.com"
              target="_blank"
            >
              <BsFacebook width={24} height={24} />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://www.instagram.com"
              target="_blank"
            >
              <BsInstagram width={24} height={24} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
