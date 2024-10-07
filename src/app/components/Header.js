"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

const Header = () => {
  return (
    <Navbar
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary fixed-top"
    >
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" href="/">
            美亞廚具-旗艦店
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" href="/">
              Home
            </Link>
            <Link className="nav-link" href="#link">
              Link
            </Link>
            <NavDropdown title="優質煎炒鍋" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link className="nav-link" href="/products">
                  新品上架
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link" href="/fryingpan">
                  煎鍋
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link" href="/wok">
                  炒鍋
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link" href="#">
                  煎炒鍋皆宜
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link" href="#">
                  明火爐鍋
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link" href="#">
                  電磁爐鍋
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link" href="#">
                  明火爐及電磁爐鍋皆宜
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="關於美亞" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link className="nav-link" href="/about">
                  關於美亞
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link" href="/location">
                  旗艦店位置
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link" href="/distribution">
                  分銷店位置
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link className="nav-link" href="/contact">
              聯絡我們
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
