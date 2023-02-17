import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ButtonAuth = () => {
    const { t } = useTranslation("menu");

    return(
        <div className="nav-item d-none d-lg-block">
        <Link className="btn btn-signin btn-sm mx-2 " to="/signin">{t("sign in")}</Link>
        <Link className="btn btn-signup btn-sm" to="/signup">{t("sign up")}</Link>
      </div>
    )
}

export default ButtonAuth