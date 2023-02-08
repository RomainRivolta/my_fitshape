// import { createUserWithEmailAndPassword } from "@firebase/auth";
import React, { FormEvent, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/userAuthContext";

import Button from "../../components/Button";
import Input from "../../components/Input";
import CheckList from "../../components/CheckList";
import {atLetters, passwordValidRegex} from "../../utils/validationRule";

interface IData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ErrorForm {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const { t } = useTranslation("auth");
  const data = {
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    confirmPassword: "",
  } as IData;

  const [signinData, setSigninData] = useState(data);
  const [error, setError] = useState<ErrorForm>();
  const { signUp } = useContext(AuthContext);

  const { firstname, lastname, email, password, confirmPassword } = signinData;

  const validName = (value: string): boolean => {
    let regex = atLetters;
    return regex.test(value);
  }

  const isValid = () => {
    let err: ErrorForm = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: ""
    };

    if (firstname === '') {
      err.firstname = t('field required');
    } else {
      if (!validName(firstname)) {
        err.firstname = t('fisrt name invalid name');
      }
    }
    if (lastname === '') {
      err.lastname = t('field required');
    } else {
      if (!validName(firstname)) {
        err.lastname = t('last name invalid name');
      }
    }
    if (email === '') {
      err.email = t('field required');
    }
    if (password === '') {
      err.password = t('field required');
    } else {
      let regex = passwordValidRegex;
      if (regex.test(password)) {
        err.password = t('');
      }
    }
    if (confirmPassword === '') {
      err.confirmPassword = t('field required');
    } else {
      if (password !== confirmPassword) {
        err.confirmPassword = t('password does not match');
      }
    }
    setError({ ...err });
    console.log(err);
    return false;
  }

  const handleChange = (e: any) => {
    setSigninData({ ...signinData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = signinData;

    try {

      if (isValid()) {
        alert("valid")
        await signUp(email, password);

      }

    } catch (error: any) {
      alert("error")
      console.log(error);
      setError(error);
      setSigninData({ ...data });
    }
  };


  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col"></div>
        <div className="col">
        <i className="bi bi-0-circle"></i>Home<i className="bi bi-x-circle"></i>
          <h2>{t('sign up')}</h2>
          <form onSubmit={handleSubmit} className="row g-3" noValidate>
            <div className="col-lg-6 col-sm-12">
              <Input id="firstname" className="required" label={t("firstname")} name="firstname" type="text" onChange={handleChange} value={firstname} validator={error?.firstname} required />
            </div>
            <div className="col-lg-6 col-sm-12">
              <Input id="lastname" className="required" label={t("lastname")} name="lastname" type="text" onChange={handleChange} value={lastname} required />
            </div>
            <div className="col-12">
              <Input id="email" className="required" label={t("email")} name="email" type="email" onChange={handleChange} value={email} required />
            </div>
            <div className="col-lg-6 col-sm-12">
              <Input id="password" className="required" label={t("password")} name="password" type="password" onChange={handleChange} value={password} required />
            </div>
            <div className="col-lg-6 col-sm-12">
              <Input id="confirmPassword" className="required" label={t("confirm password")} name="confirmPassword" type="password" onChange={handleChange} value={confirmPassword} required />
            </div>
            <CheckList value={password} />

            <Button type="submit">{t('sign up')}</Button>
          </form>
          <hr className="hr-text" data-content="OR" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
