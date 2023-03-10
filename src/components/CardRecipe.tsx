
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { IRecipeDataList } from "../utils/recipeInterface";

interface ICardRecipe {
    data: IRecipeDataList[];
}

const CardRecipe = (props: ICardRecipe) => {
    const { data } = props;

    return (
        <Fragment>
            {data.map(({ _id, img, title, category_name, current_foods_name }, index) => (
                <div className="col" key={index}>
                    <Link className="card w-100 h-100 text-decoration-none stretched-link" to={`/recipes/${title}`} state={{ id: _id }}>
                        <img src={img} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">{title}</h4>
                            <span className="badge text-bg-light">{category_name}</span>
                            {
                                current_foods_name && current_foods_name.map((name) => (
                                    <Fragment key={v4()}>
                                        <span className="badge text-bg-light">{name}</span>
                                    </Fragment>
                                ))
                            }
                        </div>
                    </Link>
                </div>
            )
            )}
        </Fragment>
    )
}

export default CardRecipe;