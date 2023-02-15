import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Card from "../../components/Card";
import Cover from "../../components/Cover";
import FilterCheckbox from "../../components/FilterCheckbox";
import FilterText from "../../components/FilterText";
import Layout from "../../components/Layout";
import Nav from "../../components/Nav";
import { IFilterDataCheckbox, IFilterDataText } from "../../utils/filterInterface";

const Recipes = () => {
    const { t } = useTranslation(['recipes', 'main']);

    const filterCategory: IFilterDataText[] = [
        {
            id: 1,
            name: t('breakfast'),
        },
        {
            id: 2,
            name: t('low carb'),
        },
        {
            id: 3,
            name: t('snacks'),
        },
        {
            id: 4,
            name: t('Post training'),
        }
    ];

    const filterFoodCurrents: IFilterDataCheckbox[] = [
        {
            id: 1,
            label: t('vegan'),
            name: 'vegan',
        },
        {
            id: 2,
            label: t('vegetarian'),
            name: 'vegetarian',
        },
        {
            id: 3,
            label: t('gluten free'),
            name: 'gluten free',
        }
    ];


    return (
        <Fragment>
            <Cover img="RecipesCover"></Cover>
            <div className="container pt-5">
                <div className="row">
                    <div className="recipe-grid order-lg-2 col-xl-9 col-lg-8">
                        <div className="recipe-grid-header">
                            <div className="me-3 mb-3">
                                {t('showing')}&nbsp;
                                <strong>1-15&nbsp;</strong>
                                {t('off')}&nbsp;
                                <strong>300&nbsp;</strong>
                                {t('recipes')}
                            </div>
                            <div className="me-3 mb-3"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-xs-6">
                                <Card />
                            </div>
                        </div>
                    </div>
                    <div className="sidebar col-xl-3 order-lg-1">
                        <FilterText title={t('categories')} data={filterCategory} />
                        <FilterCheckbox title={t('food currents')} data={filterFoodCurrents} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Recipes;