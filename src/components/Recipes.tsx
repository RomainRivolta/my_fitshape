import React from "react";
import { useTranslation } from "react-i18next";
import "./Recipes.scss";

const Recipes = () => {
    const { t } = useTranslation(['recipes','']);
    return (
        <div className="container">
            <div className="row">
                <div className="recipes-grid order-lg-2 col-xl-9 col-lg-8">
                    <header>
                        <div className="me-3 mb-3">
                            {(t('showing'))}
                            <strong>1-12</strong>
                            {(t('of'))}
                            <strong>158</strong>
                            {(t('recipes'))}
                        </div>
                        <div className="me-3 mb-3">

                        </div>
                        <div className="mb-3 d-flex align-items-center">

                        </div>
                    </header>
                    <div className="row">

                    </div>
                </div>
                <div className="sidebar col-xl-3 order-lg-1">
                    <div className="sidebar-block px-3 px-lg-0 me-lg-4">
                        <a className="d-lg-none block-toggler" data-bs-toggle="collapse" data-bs-target="filter-recipes" aria-expanded="true">
                            {t('filter by meal')}
                        </a>
                        <div className="collapse show" id="filter-recipes">
                            <h6 className="sidebar-heading d-none d-lg-block">{t('meal')}</h6>
                            <form>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Recipes;