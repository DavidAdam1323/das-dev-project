"use client";

import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../../../../public/logos/DAS-Dev-logo2.svg";
import { Spin as Hamburger } from "hamburger-react";

const Navbar = () => {
  return (
    <nav className={styles.navBarContainer}>
      <a href="#home">
        <Image src={logo} alt="DAS.Dev Logo" width={200} height={150} />
      </a>
      <Hamburger size={75} />
    </nav>
  );
};

export default Navbar;
