import styles from "./Navbar.module.scss";
import linkTitles from "../../content/navbar.json";
import routesNames from "../../content/routesNames.json";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link
        to={routesNames.home}
        className={styles.logoLink}
        aria-label={linkTitles.home}
      >
        <img className={styles.logo} src={logo} alt="UniWebCourse logo" />
      </Link>
      <ul>
        <li>
          <Link to={routesNames.home}>{linkTitles.home}</Link>
        </li>
        <li>
          <Link to={routesNames.additionalResources}>
            {linkTitles.additionalResources}
          </Link>
        </li>
        <li>
          <Link to={routesNames.professors}>{linkTitles.professors}</Link>
        </li>
      </ul>
    </nav>
  );
}
