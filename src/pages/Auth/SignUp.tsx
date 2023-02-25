import { FormEvent, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/userAuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputGroup from "../../components/InputGroup";
import CheckList from "../../components/CheckList";
import { atLetters, passwordValidRegex } from "../../utils/validationRule";
import Account from "../../components/Account";

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

const SignUp = (props: any) => {
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

  const navigate = useNavigate();

  const { firstname, lastname, email, password, confirmPassword } = signinData;

  const validName = (value: string): boolean => {
    let regex = atLetters;
    return regex.test(value);
  };

  const isValid = () => {
    let err: ErrorForm = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (firstname === "") {
      err.firstname = t("field required");
    } else {
      if (!validName(firstname)) {
        err.firstname = t("fisrt name invalid name");
      }
    }
    if (lastname === "") {
      err.lastname = t("field required");
    } else {
      if (!validName(firstname)) {
        err.lastname = t("last name invalid name");
      }
    }
    if (email === "") {
      err.email = t("field required");
    }
    if (password === "") {
      err.password = t("field required");
    } else {
      let regex = passwordValidRegex;
      if (!regex.test(password)) {
        err.password = t("security password");
      }
    }
    if (confirmPassword === "") {
      err.confirmPassword = t("field required");
    } else {
      if (password !== confirmPassword) {
        err.confirmPassword = t("password does not match");
      }
    }

    setError({ ...err });
    return Object.keys(error!).length;
  };

  const handleChange = (e: any) => {
    setSigninData({ ...signinData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // const { email, password } = signinData;
    try {
      if (isValid() === 0) {
        alert("valid");
        await signUp(email, password);
      }
    } catch (error: any) {
      console.log(error);
      setError(error);
      setSigninData({ ...data });
    }
  };

  return (
    <Account>
      <form onSubmit={handleSubmit} noValidate>
        <h1 className="mb-2 text-center h3 ">{t("sign up")}</h1>
        <p className="mb-4 text-center">
          {t("complete the form below to get started fitshape")}.
        </p>
        <div className="col-12">
          <Input
            id="firstname"
            className="required"
            label={t("firstname")}
            name="firstname"
            type="text"
            onChange={handleChange}
            value={firstname}
            validator={error?.firstname}
            required
          />
        </div>
        <div className="col-12">
          <Input
            id="lastname"
            className="required"
            label={t("lastname")}
            name="lastname"
            type="text"
            onChange={handleChange}
            value={lastname}
            validator={error?.lastname}
            required
          />
        </div>
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
         <div className="col-12 d-none d-lg-block">
          <InputGroup
            id="password"
            className="required"
            label={t("password")}
            name="password"
            type="password"
            onChange={handleChange}
            value={password}
            validator={error?.password}
            data={password}
            required
          />
        </div>
        <div className="col-12 d-lg-none">
        <Input
            id="password"
            className="required"
            label={t("password")}
            name="password"
            type="password"
            onChange={handleChange}
            value={password}
            validator={error?.password}
            data={password}
            required
          />
        </div>
        <div className="col-12">
          <Input
            id="confirmPassword"
            className="required"
            label={t("confirm password")}
            name="confirmPassword"
            type="password"
            onChange={handleChange}
            value={confirmPassword}
            validator={error?.confirmPassword}
            required
          />
        </div>
        <div className="col-lg-6">
          {/* <CheckList value={password} /> */}
        </div>
        <div className="d-grid">
          <Button type="submit" className="btn-primary">
            {t("sign up")}
          </Button>
        </div>
      </form>
      <hr className="hr-text" data-content="OR" />
    </Account>
  );
};

export default SignUp;
