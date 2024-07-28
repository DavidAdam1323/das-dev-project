import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../../../../public/logos/DAS-Dev-logo2.svg";

const Navbar = () => {
  return (
    <nav className={styles.navBarContainer}>
      <a href="#home">
        <Image src={logo} alt="DAS.Dev Logo" width={150} height={100} />
      </a>
    </nav>
  );
};

export default Navbar;
