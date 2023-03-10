import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface IBtnGroupData{
  label: string;
  value: string;
}

interface IButtonGroup {
  perPage: number;
  total: number;
  btnGroupData?: IBtnGroupData[];
  // perPageClick: number;
  onPerPageClick(num:number): void;
}

const ButtonGroup = (props: IButtonGroup) => {
  const { t } = useTranslation("main");
  const data: IBtnGroupData[] = props.btnGroupData || [
    {
      value:process.env.REACT_APP_LIMIT_PER_PAGE as string,
      label:process.env.REACT_APP_LIMIT_PER_PAGE as string,
    },
    {
      value: process.env.REACT_APP_INCREASE_PER_PAGE as string,
      label:process.env.REACT_APP_INCREASE_PER_PAGE as string,
    },
    {
      value:props.total.toString(),
      label:t("all"),
    }
  ]
 
  const btnGroup: IButtonGroup = {
    btnGroupData: data,
    perPage: props.perPage,
    total: props.total,
    // perPageClick: props.
    onPerPageClick: props.onPerPageClick
  };

  const { perPage, btnGroupData, onPerPageClick } = btnGroup;
  // const [clickedBtn, setClickedBtn] = useState(perPage);

  const handlePerPage = (num: number) => {
    onPerPageClick(num);
    // setClickedBtn(num);
  };

  return (
    <div className="btn-group btn-group-sm" role="group">
      {btnGroupData!.map(({ value, label}, index) => (
        <button
          key={index}
          type="button"
          className={`btn btn-outline-primary ${
            Number(value) === perPage ? "active" : ""
          }`}
          onClick={() => handlePerPage(Number(value))}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
