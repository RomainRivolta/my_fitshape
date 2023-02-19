/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { faL } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "../../components/Card";
import Cover from "../../components/Cover";
import FilterCheckbox from "../../components/FilterCheckbox";
import FilterText from "../../components/FilterText";
import Pagination from "../../components/Pagination";
import SelectFilter from "../../components/SelectFilter";
import ButtonGroup from "../../components/ButtonGroup";
import { IFilterDataCheckbox, IFilterDataText } from "../../utils/filterInterface";

interface IRecipes {
    raw: string;
}

const Recipes = () => {
    const perPage: number = Number(process.env.REACT_APP_PER_PAGE);
    // const perIncreasePage: number = 20;
    const { t } = useTranslation(['recipes', 'main']);
    const [recipes, setRecipes] = useState<IRecipes[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage, setRecipesPerPage] = useState(perPage);

    const indexOfLastRecipe: number = currentPage * recipesPerPage;
    const indexOfFirstRecipe: number = indexOfLastRecipe - recipesPerPage;
    const nPages: number = Math.ceil(recipes.length / recipesPerPage)
    const currentRecipes: IRecipes[] = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

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

    const getRecipes = async () => {
        setIsLoading(true);
        const res: Response = await fetch(`${process.env.REACT_APP_BACK_END_API}/recipe/list`);
        const recipesData: IRecipes[] = await res.json();
        setRecipes(recipesData);
        setIsLoading(false);
    }

    const handlePerPage = (perPage: number) => {
        setRecipesPerPage(perPage);
    }

    useEffect(() => {
        getRecipes();
    }, [])

    const renderRecipes = (
        <Fragment>
            <div className="recipe-grid-header d-flex justify-content-between text-body fw-light">
                <div className="me-3 mb-3">
                    {t('showing', { ns: 'main' })}&nbsp;
                    <span className="fw-semibold">1-{recipesPerPage}&nbsp;</span>
                    {t('off')}&nbsp;
                    <span className="fw-semibold">{recipes.length}&nbsp;</span>
                    {t('recipes').toLowerCase()}
                </div>
                <div className="me-3 mb-3">
                    <span className="me-2">{t('show', { ns: 'main' }).toLowerCase()}</span>
                    <ButtonGroup  perPage={perPage} onPerPageClick={handlePerPage} />
                    {/* <div className="btn-group btn-group-sm" role="group">
                        <button type="button" className={`btn btn-outline-primary ${ recipesPerPage === perPage ? 'active' :''}`} onClick={() => handlePerPage(perPage)}>{perPage}</button>
                        <button type="button" className={`btn btn-outline-primary ${ recipesPerPage === perIncreasePage ? 'active' :''}`} onClick={() => handlePerPage(perIncreasePage)}>{perIncreasePage}</button>
                        <button type="button" className={`btn btn-outline-primary ${ recipesPerPage === recipes.length ? 'active' :''}`} onClick={() => handlePerPage(recipes.length)}>{t('all', { ns: 'main' })}</button>
                    </div> */}
                </div>
                <div className="me-3 mb-3">
                    <SelectFilter />
                </div>
            </div>
            <div className="row g-4">
                {currentRecipes.map((recipe, index) =>
                    <div className="col-lg-4 col-xs-6" key={index}>
                        <Card imgsrc={recipe.raw}></Card>
                    </div>
                )}
            </div>
            <div className="row pt-4">
                <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </Fragment>

    )

    return (
        <Fragment>
            <Cover img="RecipesCover"></Cover>
            <div className="container pt-5">
                <div className="row">
                    <div className="recipe-grid order-lg-2 col-xl-9 col-lg-8">
                        {isLoading ?
                            <div className="text-center">
                                <div className="spinner-grow text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            : renderRecipes
                        }
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