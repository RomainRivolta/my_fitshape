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
    
    console.log('currentPage >>> ', currentPage);
    console.log('nPages >>>', nPages);

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
                    <a className="page-link" onClick={handlePreviousPage} href="#">{t('previous')}</a>
                </li>
                {pageNumbers.map(pgNumber=>(
                    <li key={pgNumber} className={`page-item ${currentPage == pgNumber ? 'active' : ''}`}>
                        <a onClick={() => setCurrentPage(pgNumber)} className="page-link" href="#">{pgNumber}</a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" onClick={handleNextPage} href="#">{t('next')}</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;