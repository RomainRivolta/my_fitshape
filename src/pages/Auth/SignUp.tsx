// import { createUserWithEmailAndPassword } from "@firebase/auth";
import { FormEvent, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/userAuthContext";

import Button from "../../components/Button";
import Input from "../../components/Input";
import CheckList from "../../components/CheckList";
import { atLetters, passwordValidRegex } from "../../utils/validationRule";

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

  const { firstname, lastname, email, password, confirmPassword} = signinData;

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
      confirmPassword: "",
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
      if (!regex.test(password)) {
        err.password = t('security password');
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
    return Object.keys(error!).length;
  }

  const handleChange = (e: any) => {
    setSigninData({ ...signinData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // const { email, password } = signinData;
    try {
      if (isValid() === 0) {
        alert("valid")
        await signUp(email, password);
      }
    } catch (error: any) {
      console.log(error);
      setError(error);
      setSigninData({ ...data });
    }
  };


  return (
    <div className="container pt-3">
      <div className="card mb-3 shadow-lg border-0">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGZpdG5lc3MlMjBlcXVpcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8 ps-4">
            <div className="card-body">
              <h3 className="card-title">{t('sign up')}</h3>
              <form onSubmit={handleSubmit} className="row g-3" noValidate>
                <div className="col-lg-6 col-sm-12">
                  <Input id="firstname" className="required" label={t("firstname")} name="firstname" type="text" onChange={handleChange} value={firstname} validator={error?.firstname} required />
                </div>
                <div className="col-lg-6 col-sm-12">
                  <Input id="lastname" className="required" label={t("lastname")} name="lastname" type="text" onChange={handleChange} value={lastname} validator={error?.lastname} required />
                </div>
                <div className="col-12">
                  <Input id="email" className="required" label={t("email")} name="email" type="email" onChange={handleChange} value={email} validator={error?.email} required />
                </div>
                <div className="col-lg-6 col-sm-12">
                  <Input id="password" className="required" label={t("password")} name="password" type="password" onChange={handleChange} value={password} validator={error?.password} required />
                </div>
                <div className="col-lg-6 col-sm-12">
                  <Input id="confirmPassword" className="required" label={t("confirm password")} name="confirmPassword" type="password" onChange={handleChange} value={confirmPassword} validator={error?.confirmPassword} required />
                </div>
                <div className="col-lg-6">
                  <CheckList value={password} />
                </div>
                <Button type="submit" className="btn-primary">{t('sign up')}</Button>
              </form>
              <hr className="hr-text" data-content="OR" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
