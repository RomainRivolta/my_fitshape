import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";

const NotFoundData = () => {
    const { t } = useTranslation('main');
    return (
        <Fragment>
                <div id="notfound">
                    <div className="notfound d-flex flex-column align-items-center justify-content-center">
                        <div className="notfound-results">
                            <i className="bi bi-search"/>
                        </div>
                        <h2>{t('not found results')}</h2>
                        <p className="text-center">{t('page have been remove or temporarily unavailable')}</p>
                        <Button className="btn-primary btn-lg">{t('retry')}</Button>
                    </div>
                </div>
        </Fragment>
    )
}

export default NotFoundData;