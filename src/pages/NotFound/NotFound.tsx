import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";

const NotFound = () => {
    const { t } = useTranslation('main');
    return (
        <Fragment>
            <Nav />
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
        </Fragment>

    )
}

export default NotFound;