"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { Spin as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.navContainer}>
        <nav className={styles.desktopNavBar}>
          <div className={styles.logoContainer}>
            <a href="#home">
              <Image
                src="/logos/DAS-Dev-logo02.svg"
                alt="DAS.Dev Logo"
                width={190}
                height={40}
                priority
              />
            </a>
          </div>
          <ul className={styles.desktopNavLinks}>
            {["Home", "About", "Projects", "Contact"].map((text, index) => (
              <li key={index}>
                <a href={`#${text.toLowerCase()}`}>{text}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className={styles.navBar}>
          <div className={styles.logoContainer}>
            <a href="#home">
              <Image
                src="/logos/DAS-Dev-logo02.svg"
                alt="DAS.Dev Logo"
                width={190}
                height={40}
                priority
              />
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
                label="Toggle menu"
              />
            </div>
            <ul
              className={`${styles.navLinks} ${
                isOpen ? styles.navLinksOpen : ""
              }`}
            >
              <li>
                <a href="#home" onClick={handleLinkClick}>
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
                <a href="#about" onClick={handleLinkClick}>
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
                <a href="#projects" onClick={handleLinkClick}>
                  <div className={styles.navList}>
                    <Image
                      src="/images/icons/projects1.svg"
                      alt="Projects Icon"
                      width={25}
                      height={25}
                    />
                    <h1>Projects</h1>
                  </div>
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleLinkClick}>
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
      </div>
    </>
  );
};

export default Navbar;
