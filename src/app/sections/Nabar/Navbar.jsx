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
    <nav className={styles.navBar}>
      <div className={styles.logoContainer}>
        <a href="#home">
          <Image src={logo} alt="DAS.Dev Logo" width={190} height={40} />
        </a>
      </div>
      <div className={styles.mobileNavBarContainer}>
        <div className={styles.hamburgerContainer}>
          <Hamburger
            toggled={isOpen}
            toggle={toggleMenu}
            rounded
            distance="md"
            size={75}
          />
        </div>
        <div
          className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ""}`}
          onClick={toggleMenu}
        ></div>
        <ul
          className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ""}`}
        >
          <li>
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
