import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <strong>JWT</strong>
      </div>
      <ul className={styles.headerList}></ul>
    </header>
  );
}

export default Header;
