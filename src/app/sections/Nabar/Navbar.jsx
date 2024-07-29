"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../../../../public/logos/DAS-Dev-logo02.svg";
import { Spin as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <a href="#home">
          <Image src={logo} alt="DAS.Dev Logo" width={200} height={48} />
        </a>
      </div>
      <div className={styles.hamburgerContainer}>
        <Hamburger toggled={isOpen} toggle={toggleMenu} size={75} />
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ""}`}>
        <li>
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="about" onClick={toggleMenu}>
            About
          </a>
        </li>
        <li>
          <a href="project" onClick={toggleMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="contact" onClick={toggleMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
