import React from "react";
import { IFilterDataText} from "../utils/filterInterface";

const FilterText = (props:any) => {
    const { title, data } = props;
    const filter: IFilterDataText[] = data;
    return (
        <div className="sidebar-block px-3 px-lg-0 me-lg-4">
            <a className="d-lg-none block-toggler" data-bs-toggle="collapse">{title}</a>
            <div className="expand-lg collapse show">
                <h6 className="sidebar-heading d-none d-lg-block">{title}</h6>
                <div className="flex-column ms-3 nav  nav-pills">
                    {filter.map((e) => (
                        <a className="mb-1 nav-link text-body" role="button" key={e.id}>{e.name} {e.count ? `(${e.count})` : ''}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FilterText;