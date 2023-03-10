/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FormEvent, SetStateAction, Dispatch, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

interface IPagination {
    page: number;
    total: number;
    limit: number;
    setPage: (page: number) => void;
}

const Pagination = (props: IPagination) => {
    const { page, total, limit, setPage } = props;
    const { t } = useTranslation('main');

    const totalPages = Math.ceil(total / limit);

    const handlePreviousPage = (e: FormEvent) => {
        e.preventDefault();
        if (page !== 1) setPage(page - 1)
    }

    const handleNextPage = (e: FormEvent) => {
        e.preventDefault();
        if (page !== totalPages) setPage(page + 1);
    }

    const handleOnClick = (newPage: number) => {
        setPage(newPage + 1)
    }

    const location = useLocation();

    useEffect(() => {
        console.log(location);
    });

    return (
        <>
            {totalPages > 0 && (
                <nav aria-label="page navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <Link to="" className="page-link" onClick={handlePreviousPage}>{t('previous')}</Link>
                        </li>
                        {[...Array(totalPages)].map((val, index) => (
                            <li key={index} className={`page-item ${page === index + 1 ? 'active' : ''}`}>
                                <Link to="" onClick={() => handleOnClick(index)} className="page-link">{index + 1}</Link>
                            </li>
                        ))}
                        <li className="page-item">
                            <Link to="" className="page-link" onClick={handleNextPage}>{t('next')}</Link>
                        </li>
                    </ul>
                </nav>
            )
            }
        </>
    )
}

export default Pagination;