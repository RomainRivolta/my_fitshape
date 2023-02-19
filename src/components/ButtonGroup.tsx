import React, { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

interface IButtonGroup {
  perPage: number;
  // total: number;
  // perIncreasePage: number;
  btnGroupData?: string[];
  onPerPageClick(num:number): void;
}

const ButtonGroup = (props: IButtonGroup) => {
  const { t } = useTranslation("main");

  const btnGroup: IButtonGroup = {
    btnGroupData: props.btnGroupData || [
      process.env.REACT_APP_PER_PAGE!,
      process.env.REACT_APP_INCREASE_PER_PAGE!,
      t("all"),
    ],
    perPage: props.perPage,
    onPerPageClick: props.onPerPageClick
  };

  const { perPage, btnGroupData, onPerPageClick } = btnGroup;
  const [clickedBtn, setClickedBtn] = useState(perPage);

  const handlePerPage = (num: number) => {
    setClickedBtn(num);
    onPerPageClick(num);
  };

  return (
    <div className="btn-group btn-group-sm" role="group">
      {btnGroupData!.map((btn, index) => (
        <button
          key={index}
          type="button"
          className={`btn btn-outline-primary ${
            Number(btn) === clickedBtn ? "active" : ""
          }`}
          onClick={() => handlePerPage(Number(btn))}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
