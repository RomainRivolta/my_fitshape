import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IFilterDataCheckbox } from "../utils/filterInterface";
import { IRecipeList } from "../utils/recipeInterface";

interface IFilterCheckbox {
    title: string;
    filter:IFilterDataCheckbox[];
    translation: string;
    setFilterMultipleChoice: Dispatch<SetStateAction<string>>;
}

const FilterCheckbox = (props: IFilterCheckbox) => {
    
    const { title, filter, translation, setFilterMultipleChoice } = props;
    const {t} = useTranslation(translation);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = e.target;
        if(checked){
            setFilterMultipleChoice(value);
        }
    }

    return (
        <div className="sidebar-block px-3 px-lg-0 me-lg-4">
            <a className="d-lg-none block-toggler" data-bs-toggle="collapse">{title}</a>
            <div className="expand-lg collapse show">
                <h6 className="sidebar-heading d-none d-lg-block">{title}</h6>
                <form className="mt-4 mt-lg-0">
                    {filter.map(({name,count,value},index) => (
                        <div className="mb-1" key={index}>
                            <div className="form-check">
                                <input type="checkbox" id={name} name={name} className="form-check-input" value={value} onChange={handleOnChange}/>
                                <label htmlFor={name} className="form-check-label">{t(name)} {count ? `(${count})`: ''}</label>
                            </div>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    )
}

export default FilterCheckbox;