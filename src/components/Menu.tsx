import React from "react";
import { NavLink, Link } from "react-router-dom";
import './Menu.scss';
import { useTranslation } from 'react-i18next';

const Menu = () => {

    const {t} = useTranslation('menu');

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><span>Fitshape</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0 me-lg-3 navbar-nav-scroll">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/recipes">{t("recipes")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/fitness">{t("fitness")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/caloriecalculator">{t("calorie calculator")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/mytraining">{t("my training")}</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu;