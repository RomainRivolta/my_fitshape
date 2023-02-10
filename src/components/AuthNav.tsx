import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AuthContext } from '../context/userAuthContext';
import Button from "./Button";
const AuthNav = () => {

    const { t } = useTranslation('menu');
    const { user } = useContext(AuthContext);

    return (
        user
            ?
            <div className="dropdown text-end">
                <a className="dropdown-toggle text-decoration-none d-block" role="button" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
                    <img className="rounded-circle" alt="user-avatar" src="https://github.com/mdo.png" width="32" height="32" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-label="dropdownUser">
                    <li>
                        <Link to="" className="dropdown-item">{t("settings")}</Link>
                    </li>
                    <li>
                        <Link to="" className="dropdown-item">{t("profile")}</Link>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <Link to="" className="dropdown-item">{t("sign out")}</Link>
                    </li>
                </ul>
            </div>
            :
            <div className="col-lg-3 text-end">
                <Button className="btn-outline-primary me-2" >{t('sign in')}</Button>
                <Button className="btn-primary" >{t('sign up')}</Button>
            </div>
    )
}

export default AuthNav;