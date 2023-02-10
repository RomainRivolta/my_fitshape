import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/userAuthContext";
import Button from "../../components/Button";
import Input from "../../components/Input";

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

  const data = {
    email: "",
    password: "",
  } as IData;

  const [signupData, setSignupData] = useState(data);
  const [error, setError] = useState<ErrorForm>();
  const { signIn } = useContext(AuthContext);

  const { email, password } = signupData;


  const isValid = () => {
    let err: ErrorForm = {
      email: "",
      password: "",
    };

    if (email === '') {
      err.email = t('field required');
    }
    if (password === '') {
      err.password = t('field required');
    }  
    setError({ ...err });
    return Object.keys(error!).length;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (isValid() === 0) {
        await signIn(email, password);
      }
    } catch (error: any) {
      console.log(error);
      setError(error);
      setSignupData({ ...data });
    }
  };

  const handleChange = async (e: any) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
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
              <h3 className="card-title">{t('sign in')}</h3>
              <form onSubmit={handleSubmit} className="row g-3" noValidate>
                <div className="col-12">
                  <Input id="email" className="required" label={t("email")} name="email" type="email" onChange={handleChange} value={email} validator={error?.email} required />
                </div>
                <div className="col-12">
                  <Input id="password" className="required" label={t("password")} name="password" type="password" onChange={handleChange} value={password} validator={error?.password} required />
                </div>
                <Button type="submit" className="btn-primary">{t('sign in')}</Button>
              </form>
              <hr className="hr-text" data-content="OR" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
