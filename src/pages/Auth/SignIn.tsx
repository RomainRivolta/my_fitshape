import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/userAuthContext";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import Account from "../../components/Account";

interface IData {
  email: string;
  password: string;
}

interface ErrorForm {
  email: string;
  password: string;
}

const SignIn = () => {
  const { t } = useTranslation("auth");

  const data: IData = {
    email: "",
    password: "",
  };

  const [signupData, setSignupData] = useState<IData>(data);
  const [error, setError] = useState<ErrorForm>();
  const { signIn } = useContext(AuthContext);

  const { email, password } = signupData;

  const isValid = () => {
    let err: ErrorForm = {
      email: "",
      password: "",
    };

    if (email === "") {
      err.email = t("invalid.field required");
    }
    if (password === "") {
      err.password = t("invalid.field required");
    }
    setError({ ...err });
    return Object.keys(error!).length;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (isValid() === 0) {
        await signIn(email, password);
      }
    } catch (error: any) {
      console.error(error);
      setError(error);
      setSignupData({ ...data });
    }
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  return (
    <Account>
      <form onSubmit={handleSubmit} noValidate className="row g-3">
        <h1 className="mb-2 text-center h3 ">{t("sign in")}</h1>
        <p className="mb-4 text-center">
          {t("sign in using your fitshape credentials")}.
        </p>
        <div className="col-12">
          <Input
            id="email"
            className="required"
            label={t("email")}
            name="email"
            type="email"
            onChange={handleChange}
            value={email}
            validator={error?.email}
            required
          />
        </div>
        <div className="col-12">
          <Input
            id="password"
            className="required"
            label={t("password")}
            name="password"
            type="password"
            onChange={handleChange}
            value={password}
            validator={error?.password}
            required
          />
        </div>
        <div className="d-grid">
          <Button type="submit" className="btn-primary">
            {t("sign in")}
          </Button>
        </div>
      </form>
      <div className="d-xxl-flex justify-content-between mt-4">
        <p className="font-14 mb-0 mt-0">
          <Link to="/reset-password">{t("forgot password")}</Link>
        </p>
      </div>
      <div className="d-xxl-flex justify-content-between mt-4">
        <p className="text-muted font-14 mb-0">
          {t("don't have an account")}
          <Link to="/signup" className="ps-2">
            {t("sign up")}
          </Link>
        </p>
      </div>
      <hr className="hr-text" data-content="OR" />
    </Account>
  );
};

export default SignIn;
