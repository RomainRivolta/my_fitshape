import React from "react";
import { useTranslation } from "react-i18next";

const Spinner = () => {
  const { t } = useTranslation("");
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">{t('loading')}</span>
      </div>
    </div>
  );
};

export default Spinner;
