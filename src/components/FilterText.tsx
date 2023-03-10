import React, { Dispatch, Fragment, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { IFilterDataText} from "../utils/filterInterface";

interface IFilterText {
    title: string;
    filter:IFilterDataText[];
    translation: string;
    setCategoryChoice: Dispatch<SetStateAction<string>>;
}

const FilterText = (props:IFilterText) => {
    const { title, filter, translation, setCategoryChoice } = props;
    const {t} = useTranslation(translation);
    return (
        <div className="sidebar-block px-3 px-lg-0 me-lg-4">
            <a className="d-lg-none block-toggler" data-bs-toggle="collapse">{title}</a>
            <div className="expand-lg collapse show">
                <h6 className="sidebar-heading d-none d-lg-block">{title}</h6>
                <div className="flex-column ms-3 nav  nav-pills">
                    {filter.map(({name,count},index) => (
                        <Fragment key={index}>
                            <span className="mb-1 nav-link text-body" role="button" key={index} onClick={()=> setCategoryChoice(name)}>{t(name)} {count ? `(${count})` : ''}</span>
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FilterText;