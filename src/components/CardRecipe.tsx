
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { IRecipeList } from "../utils/recipeInterface";

interface ICardRecipe {
    data: IRecipeList;
}

const CardRecipe = (props: ICardRecipe) => {
    const { data } = props;
    const { img, title, _id, category, current_foods } = data;

    return (
        <div className="col">
            <Link className="card w-100 h-100 text-decoration-none stretched-link" to={`/recipes/${title}`} state={{ id: _id }}>
                <img src={img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <span className="badge text-bg-light">{category.name}</span>
                    {
                        current_foods && current_foods.map(({ name }) => (
                            <Fragment key={v4()}>
                                <span className="badge text-bg-light">{name}</span>
                            </Fragment>
                        ))
                    }
                </div>
            </Link>
        </div>
    )
}

export default CardRecipe;