interface IRecipeInfoList {
    name: string;
}

interface IRecipeCategory {
    name: string;
}

export interface IRecipeList {
    _id: string;
    docId: string;
    title: string;
    img: string;
    category: IRecipeCategory;
    current_foods: IRecipeInfoList[];
}