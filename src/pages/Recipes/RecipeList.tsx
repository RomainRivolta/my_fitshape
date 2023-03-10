/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cover from "../../components/Cover";
import FilterCheckbox from "../../components/FilterCheckbox";
import FilterText from "../../components/FilterText";
import Pagination from "../../components/Pagination";
import SelectFilter from "../../components/SelectFilter";
import ButtonGroup from "../../components/ButtonGroup";
import NotFoundData from "../../components/NotResultsFound";
import { IFilterDataCheckbox, IFilterDataText } from "../../utils/filterInterface";
import Spinner from "../../components/Spinner";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import { IRecipeDataList, IRecipeList } from "../../utils/recipeInterface";
import CardRecipe from "../../components/CardRecipe";

const RecipeList = () => {
    const perPage: number = Number(process.env.REACT_APP_LIMIT_PER_PAGE);
    const { t } = useTranslation(['recipes', 'main']);
    const [recipeList, setRecipeList] = useState<IRecipeList>();
    const [filterFoodCurrents, setFilterFoodCurrents] = useState<IFilterDataCheckbox[]>([]);
    const [currentFoods, setCurrentFoods] = useState('All');
    const [filterCategory, setFilterCategory] = useState<IFilterDataText[]>([]);
    const [category, setCategory] = useState('All');
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [recipeListPerPage, setRecipeListPerPage] = useState(perPage);

    const handlePerPage = (perPage: number) => {
        setRecipeListPerPage(perPage);
        setPage(1);
    }

    useEffect(() => {

        const getRecipeList = async () => {
           
            setIsLoading(true);
            const data = {
                page: page,
                limit: recipeListPerPage,
                category: category,
                current_foods: currentFoods
            };
     
            const res: Response = await fetch(`${process.env.REACT_APP_BACK_END_API}/recipes/list`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            });
      
            const recipeData: IRecipeList = await res.json();
            const { categories, current_foods } = recipeData;
            const recipeFilterCategoryData: IFilterDataText[] = categories;
            const recipeFilterCurrentFoodData: IFilterDataCheckbox[] = current_foods;
            setRecipeList(recipeData);
            setFilterFoodCurrents(recipeFilterCurrentFoodData.map((obj) => { obj.value = obj.name; return obj }));
            setFilterCategory(recipeFilterCategoryData);
            setIsLoading(false);
        }

        getRecipeList();

    }, [page, currentFoods, category, recipeListPerPage])

    const renderRecipeList = (
        (recipeList && !recipeList.error) ?
            <Fragment>
                <div className="recipe-grid-header d-flex justify-content-between text-body fw-light">
                    <div className="me-3 mb-3">
                        {t('showing', { ns: 'main' })}&nbsp;
                        <span className="fw-semibold">1-{recipeListPerPage}&nbsp;</span>
                        {t('off')}&nbsp;
                        <span className="fw-semibold">{recipeList.recipes[0].total}&nbsp;</span>
                        {t('recipes').toLowerCase()}
                    </div>
                    <div className="me-3 mb-3">
                        <span className="me-2">{t('show', { ns: 'main' }).toLowerCase()}</span>
                        <ButtonGroup perPage={recipeListPerPage} onPerPageClick={handlePerPage} total={recipeList.recipes[0].total} />
                    </div>
                    <div className="me-3 mb-3">
                        <SelectFilter />
                    </div>
                </div>
                <div className="d-flex row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
                    <CardRecipe data={recipeList.recipes[0].data} />
                </div>
                <div className="row pt-4">
                    <Pagination page={page} limit={recipeList.limit} total={recipeList.recipes[0].total} setPage={setPage} />
                </div>
            </Fragment>
            : <Fragment>
                <div className="col text-center">
                    <NotFoundData />
                </div>
            </Fragment>
    )

    return (
        <Fragment>
            <Cover img="recipesCover.jpg" color_text="text-white" title={t('title')} sub_title={t('sub title')} />
            <div id="content-recipe-list">
                <div className="container-fluid py-5 px-5">
                    <div className="row">
                        <div className="recipe-grid order-lg-2 col-xl-9 col-lg-8">
                            {isLoading ?
                                <Spinner />
                                : renderRecipeList
                            }
                        </div>
                        <div className="sidebar col-xl-3 col-lg-4 order-lg-1">
                            <FilterText title={t('categories')} filter={filterCategory} setCategoryChoice={setCategory} translation="recipes" />
                            <FilterCheckbox title={t('food currents')} filter={filterFoodCurrents} translation="recipes" setFilterMultipleChoice={setCurrentFoods} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default RecipeList;