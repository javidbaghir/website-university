import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { Menu } from "lucide-react";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(true);

  const openMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`header container ${sticky ? "dark-nav" : ""}`}>
      <p className="logo">University Logo</p>

      <ul className={` ${open ? "" : "hide-mobile-menu"}`}>
        <li>
          <Link to="hero" smooth={true} offset={-260} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-260} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <button className="btn">
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              Contact us
            </Link>
          </button>
        </li>
      </ul>
      <span className="menu-icon" onClick={openMenu}>
        <Menu />
      </span>
    </nav>
  );
};

export default Header;
