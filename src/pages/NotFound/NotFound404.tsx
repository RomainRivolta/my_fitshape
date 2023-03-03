import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound404 = () => {
    const { t } = useTranslation('main');
    return (
        <Fragment>
            <div className="container-fluid">
                <div id="notfound">
                    <div className="notfound d-flex flex-column align-items-center justify-content-center">
                        <div className="notfound-404">
                            <h1>404</h1>
                        </div>
                        <h2>{t('not found 404')}</h2>
                        <p className="text-center">{t('page have been remove or temporarily unavailable')}</p>
                        <Link to="/" className="btn btn-primary" role="button">{t('back to home page')}</Link>

                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default NotFound404;