import React, { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "./Input";

interface IObjective {
  name: string;
  value: string;
}

interface IPhysicalActivity {
  name: string;
  value: number | string;
}

interface IData {
  gender: string;
  age: number;
  size: number;
  weight: number;
  objective: string;
  physicalActivity: string;
}

interface ErrorForm {
  gender: string;
  age: string;
  size: string;
  weight: string;
  objective: string;
  physicalActivity: string;
}

const FormCalorieCalculation = () => {
  const data: IData = {
    age: 0,
    gender: "",
    objective: "",
    physicalActivity: "",
    size: 0,
    weight: 0,
  };

  const { t } = useTranslation("calorie_calculator");
  const [calorieCalculator, setCalorieCalculator] = useState<IData>(data);
  const [error, setError] = useState<ErrorForm>();
  const [isLoading, setIsLoading] = useState(true);

  const selectObjective: IObjective[] = [
    {
      name: `--${t("form.select")}--`,
      value: "",
    },
    {
      name: t("form.weightloss"),
      value: "weightloss",
    },
    {
      name: t("form.maintenance"),
      value: "maintenance",
    },
    {
      name: t("form.muscle gain"),
      value: "muscle gain",
    },
  ];

  const selectPhysicalActivity: IPhysicalActivity[] = [
    {
      name: `--${t("form.select")}--`,
      value: "",
    },
    {
      name: t("form.sedentary"),
      value: 1.1,
    },
    {
      name: t("form.light"),
      value: 1.2,
    },
    {
      name: t("form.moderate"),
      value: 1.3,
    },
    {
      name: t("form.daily moderate"),
      value: 1.4,
    },
    {
      name: t("form.intense"),
      value: 1.5,
    },
  ];

  const { age, gender, objective, physicalActivity, size, weight } =
    calorieCalculator;

  const isValid = () => {
    const err: ErrorForm = {
      age: "",
      gender: "",
      objective: "",
      physicalActivity: "",
      size: "",
      weight: "",
    };

    if (gender === "") {
      err.gender = t("invalid.field required");
      alert("error")
    }
    // if (age) {
    //   err.age = t("invalid.field required");
    // } else {
    // }
    // if (size) {
    //   err.size = t("invalid.field required");
    // } else {
    // }
    // if (weight) {
    //   err.weight = t("invalid.field required");
    // } else {
    // }
    // if (objective === "") {
    //   err.objective = t("invalid.field required");
    // } else {
    // }
    // if (physicalActivity === "") {
    //   err.physicalActivity = t("invalid.field required");
    // } else {
    // }

    setError({ ...err });
    return Object.keys(error!).length;
  };

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setCalorieCalculator({ ...calorieCalculator, [name]: value });
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("calorieCalculator >>> ", calorieCalculator);
      if (isValid() === 0) {
        setIsLoading(true);
        const res: Response = await fetch(
          `${process.env.REACT_APP_BACK_END_API}/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(calorieCalculator),
          }
        );
        setIsLoading(false);
      }
    } catch (error: any) {
      console.error(error);
      setError(error);
    }
  };

  return (
    <form className="row g-3 px-3 py-3" noValidate onSubmit={handleOnSubmit}>
      <h2>{t("title.calorie calculator")}</h2>
      <div className="col-12">
        <label htmlFor="gender" className="form-label required gender">
          {t("form.gender")}
        </label>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio_gender"
            id="btnradio_male"
            autoComplete="off"
            checked
            onChange={handleOnChange}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio_male">
            {t("form.male")}
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio_gender"
            id="btnradio_female"
            autoComplete="off"
            onChange={handleOnChange}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio_female">
            {t("female")}
          </label>
          {error?.gender && <div className="invalid-feedback">{error.gender}</div>}
        </div>
      </div>
      <div className="col-md-4">
        <Input
          type="number"
          name="size"
          label={t("form.size")}
          id="size"
          className="required"
          onChange={handleOnChange}
          validator={error?.size}
          required
        />
      </div>
      <div className="col-md-4">
        <Input
          type="number"
          name="weight"
          label={t("form.weight")}
          id="weight"
          className="required"
          onChange={handleOnChange}
          validator={error?.weight}
          required
        />
      </div>
      <div className="col-md-4">
        <Input
          type="number"
          name="age"
          label={t("form.age")}
          id="age"
          className="required"
          onChange={handleOnChange}
          validator={error?.age}
          required
        />
      </div>
      <div className="col-md-6">
        <label className="form-label required">{t("form.objective")}</label>
        <select
          className="form-select"
          aria-label=".form-select"
          value={calorieCalculator.objective}
          onChange={handleOnChange}
          autoFocus={true}
          name="objective"
        >
          {selectObjective.map(({ name, value }, index) => (
            <option value={value} key={index}>
              {name}
            </option>
          ))}
        </select>
        {error?.objective && <div className="invalid-feedback">{error.objective}</div>}
      </div>
      <div className="col-md-6">
        <label className="form-label required">
          {t("form.physical activity")}
        </label>
        <select
          className="form-select"
          aria-label=".form-select"
          value={calorieCalculator.physicalActivity}
          onChange={handleOnChange}
          autoFocus={true}
          name="physicalActivity"
        >
          {selectPhysicalActivity.map(({ name, value }, index) => (
            <option value={value} key={index}>
              {name}
            </option>
          ))}
        </select>
        {error?.physicalActivity && <div className="invalid-feedback">{error.physicalActivity}</div>}
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          {t("form.calculate")}
        </button>
      </div>
    </form>
  );
};

export default FormCalorieCalculation;
