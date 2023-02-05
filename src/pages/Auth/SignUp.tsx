// import { createUserWithEmailAndPassword } from "@firebase/auth";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/userAuthContext";

import "./SignIn.scss";
import Button from "../../components/Button";

interface IData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

type ErrorForm = {
  firstname?: string;
  lastname?: string;
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
  const {signUp} = useContext(AuthContext);

  const isValid = () => {
    let err : ErrorForm = {};
    if(signinData.firstname === ''){
      alert("erroir ")
      err.firstname = t('field required')!;  
    } 
    if(signinData.lastname === ''){
      err!.lastname = t('field required');
    }
    

    setError({...err});
    return false;
  }

  const handleChange = (e: any) => {
    setSigninData({ ...signinData, [e.target.name]: e.target.value });
  };

  const handleSubmit =  async (e: any) => {
    e.preventDefault();
    const { email, password } = signinData;
    
    try {

      if(isValid()){
        alert("valid")
        await signUp(email,password);

      }

    } catch (error: any) {
      alert("error")
      console.log(error);
      setError(error);
      // setSigninData({...data});
    }
  };

  const { firstname, lastname, email, password, confirmPassword } = signinData;

  // gestion erreurs
  // const errorMsg: string = error !== '' && <span>{error.message}</span>;

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <h2>{t('sign up')}</h2>
          <form className="row g-3" onSubmit={handleSubmit} noValidate>
            <div className="col-lg-6">
              <label htmlFor="firstname" className="form-label">
                {t("firstname")}
              </label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                value={firstname}
                required
                onChange={handleChange}
              />
              <span>{error?.firstname}</span>
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
                value={lastname}
                required
                onChange={handleChange}
              />
              <span>{error?.lastname}</span>
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
                value={email}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6">
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
            <div className="col-lg-6">
              <label htmlFor="confirmPassword" className="form-label">
                {t("confirm password")}
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                required
                onChange={handleChange}
              />
            </div>
            <Button type="submit" label={t('sign up')} />              
          </form>
          <hr className="hr-text" data-content="OR" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
