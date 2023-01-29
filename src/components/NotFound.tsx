import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './NotFound.scss';

const NotFound = () => {
    const { t } = useTranslation('main');
    return (
        <div className="container">
            <div id="notFound">
                <div className="notFound">
                    <div className="notFound-404">
                        <h1>Oops!</h1>
                        <h2>404 - {t('not found 404')}</h2>
                    </div>
                    <Link to="/">{t('home page')}</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;