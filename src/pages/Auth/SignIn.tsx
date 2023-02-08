import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button";

interface IData {
  email: string;
  password: string;
}

const SignIn = () => {
  const { t } = useTranslation("auth");

  const data = {
    email: "",
    password: "",
  } as IData;

  const [signupData, setSignupData] = useState(data);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  const handleChange = async (e: any) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const { email, password } = signupData;

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <h2>{t("sign in")}</h2>
          <form className="row g-3" onSubmit={handleSubmit} noValidate>
            <div className="col-12">
              <label htmlFor="email" className="form-label">
                {t("email")}
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label htmlFor="password" className="form-label">
                {t("password")}
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                required
                onChange={handleChange}
              />
            </div>
            <Button type="submit">{t("sign in")}</Button>
          </form>
          <hr className="hr-text" data-content="OR" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
