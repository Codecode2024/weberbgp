import React from "react";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import { GiSaucepan } from "react-icons/gi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            href="/"
            className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1"
          >
            <GiSaucepan width={24} height={24} />
            <span className="text-white mb-3 ms-1 mb-md-0">
              © 2024 MEYER-旗艦店
            </span>
          </Link>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <Link
              className="text-white"
              href="https://twitter.com"
              target="_blank"
            >
              <BsTwitterX width={24} height={24} />
            </Link>
          </li>
          <li className="ms-3">
            <Link
              className="text-white"
              href="https://www.facebook.com"
              target="_blank"
            >
              <BsFacebook width={24} height={24} />
            </Link>
          </li>
          <li className="ms-3">
            <Link
              className="text-white"
              href="https://www.instagram.com"
              target="_blank"
            >
              <BsInstagram width={24} height={24} />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
