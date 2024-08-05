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
      {/* Logo container */}
      <div className={styles.logoContainer}>
        <a href="#home">
          <Image src={logo} alt="DAS.Dev Logo" width={190} height={40} />
        </a>
      </div>

      {/* Mobile navigation container */}
      <div className={styles.mobileNavBarContainer}>
        <div className={styles.hamburgerContainer}>
          <Hamburger
            toggled={isOpen}
            toggle={toggleMenu}
            rounded
            distance="md"
            size={75}
            label="Toggle menu"
          />
        </div>

        {/* Navigation links list */}
        <ul
          className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ""}`}
        >
          <li>
            <a href="#home" onClick={toggleMenu}>
              <div className={styles.navList}>
                <Image
                  src="/images/icons/home1.svg"
                  alt="Home Icon"
                  width={25}
                  height={25}
                />
                <h1>Home</h1>
              </div>
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              <div className={styles.navList}>
                <Image
                  src="/images/icons/about1.svg"
                  alt="About Icon"
                  width={25}
                  height={25}
                />
                <h1>About</h1>
              </div>
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              <div className={styles.navList}>
                <Image
                  src="/images/icons/project1.svg"
                  alt="Projects Icon"
                  width={25}
                  height={25}
                />
                <h1>Projects</h1>
              </div>
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              <div className={styles.navList}>
                <Image
                  src="/images/icons/contact1.svg"
                  alt="Contact Icon"
                  width={25}
                  height={25}
                />
                <h1>Contact</h1>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
