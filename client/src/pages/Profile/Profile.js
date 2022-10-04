import styles from "./Profile.module.scss";

function Profile() {
  return (
    <div className="flex-fill d-flex justify-content-center align-items-center">
      <div className={`${styles.profileContainer} card p-20`}>
        <ul>
          <li>Nom : </li>
          <li>Email : </li>
          <li>Password : </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
