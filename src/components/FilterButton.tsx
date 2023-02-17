import React, { FormEvent } from "react";
import { useTranslation } from "react-i18next";

interface IFilterButton {
    perPage: number;
    total: number;
    perIncreasePage: number;
    dataPerPage: number;
    onPerPageClick(): React.MouseEvent<HTMLButtonElement>;
}

const FilterButton = (props: IFilterButton) => {
    const {dataPerPage, perIncreasePage, total, perPage, onPerPageClick } = props;
    const {t} = useTranslation('main');

    const handlePerPage = (e: FormEvent)=>{
        e.preventDefault();
        onPerPageClick();
    }

    return (
        <div className="btn-group btn-group-sm" role="group">
            <button type="button" className={`btn btn-outline-primary ${dataPerPage === perPage ? 'active' : ''}`} onClick={handlePerPage}>{perPage}</button>
            <button type="button" className={`btn btn-outline-primary ${dataPerPage === perIncreasePage ? 'active' : ''}`} onClick={handlePerPage}>{perIncreasePage}</button>
            <button type="button" className={`btn btn-outline-primary ${dataPerPage === total ? 'active' : ''}`} onClick={handlePerPage}>{ t('all', { ns: 'main' })}</button>
        </div>
    )
}

export default FilterButton;