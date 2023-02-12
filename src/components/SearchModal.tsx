import React from "react";

const SearchModal = () => {
    return(
        <div className="modal fade" id="searchModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-label="searchModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="" role="search">

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchModal;