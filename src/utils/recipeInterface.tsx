import { IFilterDataText, IFilterDataCheckbox } from "./filterInterface";

export interface IRecipeDataList {
    _id: string;
    title: string;
    img: string;
    category_name: string;
    current_foods_name: string[];
}

export interface IRecipeList {
    error: boolean;
    page: number;
    limit: number;
    current_foods: IFilterDataCheckbox[];
    categories: IFilterDataText[];
    recipes:[
        {
            data: IRecipeDataList[];
            total: number
        }
    ]
}
