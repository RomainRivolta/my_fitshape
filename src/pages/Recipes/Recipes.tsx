import React from "react";
import { useTranslation } from "react-i18next";
import "./Recipes.scss";

const Recipes = () => {
    const { t } = useTranslation(['recipes','main']);
    return (
        <div className="container">
            <div className="row">
                <div className="recipes-grid order-lg-2 col-xl-9 col-lg-8">
                    <header>
                        <div className="me-3 mb-3">
                            {(t('showing'))}&nbsp;
                            <strong>1-12&nbsp;</strong>
                            {(t('of'))}&nbsp;
                            <strong>158&nbsp;</strong>
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
                {/* <div className="sidebar col-xl-3 order-lg-1">
                    <div className="sidebar-block px-3 px-lg-0 me-lg-4">
                        <a className="d-lg-none block-toggler" data-bs-toggle="collapse" data-bs-target="filter-recipes" aria-expanded="true">
                            {t('filter by meal')}
                        </a>
                        <div className="collapse show" id="filter-recipes">
                            <h6 className="sidebar-heading d-none d-lg-block">{t('meal')}</h6>
                            <form>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div> */}
            </div> 
        </div>
    )
}

export default Recipes;