"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../../../../public/logos/DAS-Dev-logo02.svg";
import homeIcon from "../../../../public/images/icons/home1.svg";
import { Spin as Hamburger } from "hamburger-react";

const Navbar = () => {
  // State to manage the open/close status of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu open/close status
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navBar}>
      {/* Logo container */}
      <div className={styles.logoContainer}>
        <a href="#home">
          <Image src={logo} alt="DAS.Dev Logo" width={190} height={40} />
        </a>
      </div>

      {/* Mobile navigation container */}
      <div className={styles.mobileNavBarContainer}>
        {/* Hamburger icon for toggling mobile menu */}
        <div className={styles.hamburgerContainer}>
          <Hamburger
            toggled={isOpen}
            toggle={toggleMenu}
            rounded
            distance="md"
            size={75}
          />
        </div>

        {/* Navigation links list */}
        <ul
          className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ""}`}
        >
          <li>
            <a href="#home" onClick={toggleMenu}>
              <Image src={homeIcon} alt="Home Icon" width={25} height={25} />
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
