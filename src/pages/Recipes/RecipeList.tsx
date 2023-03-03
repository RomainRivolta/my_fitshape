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
import { IRecipeList } from "../../utils/recipeInterface";
import CardRecipe from "../../components/CardRecipe";

const RecipeList = () => {
    const perPage: number = Number(process.env.REACT_APP_PER_PAGE_RECIPE);
    const { t } = useTranslation(['recipes', 'main']);
    const [recipeList, setRecipeList] = useState<IRecipeList[]>([]);
    const [filterFoodCurrents, setFilterFoodCurrents] = useState<IFilterDataCheckbox[]>([]);
    const [filterCategory, setFilterCategory] = useState<IFilterDataText[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [recipeListPerPage, setRecipeListPerPage] = useState(perPage);
    const [category, setCategory] = useState(true);
    // const [currentFoods, setCurrentFoods] = useState('All');

    const indexOfLastRecipe: number = currentPage * recipeListPerPage;
    const indexOfFirstRecipe: number = indexOfLastRecipe - recipeListPerPage;
    const nPages: number = Math.ceil(recipeList.length / recipeListPerPage)
    let currentRecipeList: IRecipeList[] = recipeList.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const getRecipeList = async () => {
        setIsLoading(true);
        const res: Response = await fetch(`${process.env.REACT_APP_BACK_END_API}/recipes/list`);
        const recipeData = await res.json();
        const recipeFilterCategoryData: IFilterDataText[] = recipeData['categories'];
        const recipeFilterCurrentFoodData: IFilterDataCheckbox[] = recipeData['current_foods'];
        const recipeListData: IRecipeList[] = recipeData['recipes'];
        setRecipeList(recipeListData);
        setFilterFoodCurrents(recipeFilterCurrentFoodData.map((obj) => { obj.value = obj.name; return obj }));
        setFilterCategory(recipeFilterCategoryData);
        setIsLoading(false);
    }

    const handlePerPage = (perPage: number) => {
        setRecipeListPerPage(perPage);
    }

    useEffect(() => {
        getRecipeList();

    }, [])


    const FILTER_MAP = {
        All: () => true,
        // Active: (task) => !task.completed,
        // Completed: (task) => task.completed
    };


    const renderRecipeList = (
        currentRecipeList.length > 0 ?
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
                    {currentRecipeList
                        .filter((f=>f.category.name===category))
                        .map((recipe, index) => (
                            <CardRecipe data={recipe} key={index} />
                        ))
                    }

                    {/* {currentRecipeList.map((recipe, index) => (
                                //  activeCategory !== "" && recipe.info.find(({name})=> name === activeCategory) ? (
                                    <CardRecipe data={recipe} key={index}/>
                                 
                                   
                                    // )
                                    // : 
                                    // null
                                    // <CardRecipe data={recipe} key={index}/>
                    ))}
               */}

                </div>
                <div className="row pt-4">
                    <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
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
                            <FilterText title={t('categories')} filter={filterCategory} translation="recipes" />
                            {/* <FilterCheckbox title={t('food currents')} filter={filterFoodCurrents} translation="recipes" setFilterMultipleChoice={setCurrentFoods} filterMultipleChoice={currentFoods} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default RecipeList;