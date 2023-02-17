import React from "react";
import { IFilterDataCheckbox } from "../utils/filterInterface";

const FilterCheckbox = (props: any) => {
    const { title, data } = props;
    const filter : IFilterDataCheckbox[] = data;
    return (
        <div className="sidebar-block px-3 px-lg-0 me-lg-4">
            <a className="d-lg-none block-toggler" data-bs-toggle="collapse">{title}</a>
            <div className="expand-lg collapse show">
                <h6 className="sidebar-heading d-none d-lg-block">{title}</h6>
                <form className="mt-4 mt-lg-0">
                    {filter.map((e) => (
                        <div className="mb-1" key={e.id}>
                            <div className="form-check">
                                <input type="checkbox" id={e.name} name={e.name} className="form-check-input" />
                                <label htmlFor={e.name} className="form-check-label">{e.label}</label>
                            </div>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    )
}

export default FilterCheckbox;