import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <NavLink to="/">
          <strong>JWT</strong>
        </NavLink>
      </div>
      <ul className={styles.headerList}>
        <NavLink to="signup" className="mr-15">
          Inscription
        </NavLink>
        <NavLink to="signin">Connexion</NavLink>
      </ul>
    </header>
  );
}

export default Header;
