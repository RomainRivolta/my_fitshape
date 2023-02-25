/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "../../components/Card";
import Cover from "../../components/Cover";
import FilterCheckbox from "../../components/FilterCheckbox";
import FilterText from "../../components/FilterText";
import Pagination from "../../components/Pagination";
import SelectFilter from "../../components/SelectFilter";
import ButtonGroup from "../../components/ButtonGroup";
import { IFilterDataCheckbox, IFilterDataText } from "../../utils/filterInterface";
import Spinner from "../../components/Spinner";

interface IRecipeList {
    raw: string;
}

const RecipeList = () => {
    const perPage: number = Number(process.env.REACT_APP_PER_PAGE_RECIPE);
    const { t } = useTranslation(['recipes', 'main']);
    const [recipeList, setRecipeList] = useState<IRecipeList[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [recipeListPerPage, setRecipeListPerPage] = useState(perPage);

    const indexOfLastRecipe: number = currentPage * recipeListPerPage;
    const indexOfFirstRecipe: number = indexOfLastRecipe - recipeListPerPage;
    const nPages: number = Math.ceil(recipeList.length / recipeListPerPage)
    const currentRecipeList: IRecipeList[] = recipeList.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const filterCategory: IFilterDataText[] = [
        {
            id: 1,
            name: t('breakfast'),
            count: 10
        },
        {
            id: 2,
            name: t('low carb'),
            count: 15
        },
        {
            id: 3,
            name: t('snacks'),
            count: 5
        },
        {
            id: 4,
            name: t('Post training'),
            count: 20
        }
    ];

    const filterFoodCurrents: IFilterDataCheckbox[] = [
        {
            id: 1,
            label: t('vegan'),
            name: 'vegan',
            count: 5,
        },
        {
            id: 2,
            label: t('vegetarian'),
            name: 'vegetarian',
            count: 5,
        },
        {
            id: 3,
            label: t('gluten free'),
            name: 'gluten free',
            count: 12,
        }
    ];

    const getRecipeList = async () => {
        setIsLoading(true);
        const res: Response = await fetch(`${process.env.REACT_APP_BACK_END_API}/recipes/list`);
        const recipeListData: IRecipeList[] = await res.json();
        setRecipeList(recipeListData);
        setIsLoading(false);
    }

    const handlePerPage = (perPage: number) => {
        setRecipeListPerPage(perPage);
    }

    useEffect(() => {
        getRecipeList();
    }, [])

    const renderRecipeList = (
        <Fragment>
            <div className="recipe-grid-header d-flex justify-content-between text-body fw-light">
                <div className="me-3 mb-3">
                    {t('showing', { ns: 'main' })}&nbsp;
                    <span className="fw-semibold">1-{recipeListPerPage}&nbsp;</span>
                    {t('off')}&nbsp;
                    <span className="fw-semibold">{recipeList.length}&nbsp;</span>
                    {t('recipes').toLowerCase()}
                </div>
                <div className="me-3 mb-3">
                    <span className="me-2">{t('show', { ns: 'main' }).toLowerCase()}</span>
                    <ButtonGroup perPage={perPage} onPerPageClick={handlePerPage} total={recipeList.length} />
                </div>
                <div className="me-3 mb-3">
                    <SelectFilter />
                </div>
            </div>
            <div className="d-flex row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
                {currentRecipeList.map((recipe, index) =>
                    <div className="col" key={index}>
                        <Card imgsrc={recipe.raw}>
                            <p className="card-text">Helo</p>
                        </Card>
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
            <Cover img="recipesCover.jpg" color_text="text-white" title={t('title')} sub_title={t('sub title')} />
            <div id="content-recipe-list">
                <div className="container pt-5">
                    <div className="row">
                        <div className="recipe-grid order-lg-2 col-xl-9 col-lg-8">
                            {isLoading ?
                                <Spinner />
                                : renderRecipeList
                            }
                        </div>
                        <div className="sidebar col-xl-3 order-lg-1">
                            <FilterText title={t('categories')} data={filterCategory} />
                            <FilterCheckbox title={t('food currents')} data={filterFoodCurrents} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default RecipeList;