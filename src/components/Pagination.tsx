/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FormEvent } from "react";
import { useTranslation } from "react-i18next";

interface IPagination {
    setCurrentPage: any;
    currentPage: number;
    nPages: number;
}

const Pagination = (props: IPagination) => {
    const {nPages, currentPage, setCurrentPage} = props;
    const { t } = useTranslation('main');
    
    const pageNumbers: number[] = [...Array(nPages + 1).keys()].slice(1);

    const handlePreviousPage = (e: FormEvent) => {
        e.preventDefault();
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    const handleNextPage = (e: FormEvent) => {
        e.preventDefault();
        if(currentPage !== nPages) setCurrentPage(currentPage + 1);
    }

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <span className="page-link" onClick={handlePreviousPage}>{t('previous')}</span>
                </li>
                {pageNumbers.map(pgNumber=>(
                    <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? 'active' : ''}`}>
                        <span onClick={() => setCurrentPage(pgNumber)} className="page-link">{pgNumber}</span>
                    </li>
                ))}
                <li className="page-item">
                    <span className="page-link" onClick={handleNextPage}>{t('next')}</span>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;