import React from "react";
import { useTranslation } from "react-i18next";
import './SignIn.scss';

const SignIn = () => {
  const { t } = useTranslation("auth");

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <form className="row g-3">
            <div className="col-lg-6">
              <label htmlFor="firstname" className="form-label">
                {t("firstname")}
              </label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="lastname" className="form-label">
                {t("lastname")}
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
              />
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">
                {t("email")}
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
              />
              </div>
              <div className="col-lg-6">
                <label htmlFor="password" className="form-label">{t("password")}</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="confirm-password" className="form-label">{t("confirm password")}</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password"
                  name="confirm-password"
                />
              </div>
          </form>
          <hr className="hr-text" data-content="OR"/>   
        </div>
      </div>
    </div>
  );
};

export default SignIn;
