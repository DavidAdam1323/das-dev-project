import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../../../assets/images/DAS.Dev-logo2.svg";

const Navbar = () => {
  return (
    <nav className={styles.mobileNavBar}>
      <a href="#home">
        <Image src={logo} alt="DAS.Dev Logo" width={400} height={200} />
      </a>
    </nav>
  );
};

export default Navbar;
