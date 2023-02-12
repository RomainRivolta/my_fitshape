import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/userAuthContext";
const AuthNav = () => {
  const { t } = useTranslation("menu");
  const { user } = useContext(AuthContext);

  return user ? 
    <div className="dropdown text-end">
      <a
        className="dropdown-toggle text-decoration-none d-block"
        role="button"
        id="dropdownUser"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          className="rounded-circle"
          alt="user-avatar"
          src="https://github.com/mdo.png"
          width="32"
          height="32"
        />
      </a>
      <ul className="dropdown-menu dropdown-menu-end" aria-label="dropdownUser">
        <li>
          <Link to="" className="dropdown-item">
            {t("settings")}
          </Link>
        </li>
        <li>
          <Link to="" className="dropdown-item">
            {t("profile")}
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link to="" className="dropdown-item">
            {t("sign out")}
          </Link>
        </li>
      </ul>
    </div>
   : (
    <div className="nav flex-nowrap align-items-center">
      <div className="nav-item d-none d-md-block">
      {/* <a href="#" className="btn btn-sm btn-primary mb-0 mx-2">Get Quote!</a> */}
        <Link className="btn btn-sm btn-outline-primary mx-2" to="/signin">{t("sign in")}</Link>
        <Link className="btn btn-sm btn-primary" to="/signup">{t("sign up")}</Link>
      </div>
    </div>
  );
};

export default AuthNav;
