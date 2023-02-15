import { Fragment, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
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
      <Fragment>

        <div className="nav-item d-none d-lg-block">
          {/* <Link className="btn btn-sm btn-outline-primary mx-2 " to="/signin">{t("sign in")}</Link> */}
          <Link className="btn btn-signin btn-sm mx-2 " to="/signin">{t("sign in")}</Link>
          {/* <Link className="btn btn-sm btn-primary" to="/signup">{t("sign up")}</Link> */}
          <Link className="btn btn-signup btn-sm" to="/signup">{t("sign up")}</Link>
        </div>
        <ul className="d-lg-none navbar-nav ms-auto me-lg-3">
          <li className="nav-item">
            <NavLink className="nav-link" to="signin">
              {t("sign in")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
            {t("sign up")}
            </NavLink>
          </li>
        </ul>
        
      </Fragment>

    );
};

export default AuthNav;
