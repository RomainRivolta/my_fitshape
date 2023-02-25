import { t } from "i18next";
import React, { Fragment, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ButtonAuth from "./ButtonAuth";

const Account = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation('main')
  return (
    <Fragment>
      <div className="d-flex vh-100" id="account">
        <div className="d-flex flex-column align-items-center w-100">
          <div className="container-fluid">
            <div className="d-flex justify-content-end pt-4 pe-4">
              <div><Link to="/" className="nav-link"><i className="bi bi-chevron-left text-primary"></i>&nbsp;{t('back to home')}</Link></div>
            </div>
            <div className="row g-0 pt-5">
              <div className="col-md-8 col-lg-7 col-xl-6 offset-md-2 offset-lg-2 offset-xl-3 space-top-3 space-lg-0">
                <div className=" bg-white p-4 p-xl-6 p-xxl-8 p-lg-4 rounded-3 border">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex account-cover w-100 justify-content-end">
          <div className="d-flex pt-4 pe-4">
            <ButtonAuth />

          </div>
        </div>
      </div>
      {/* <div className="d-none d-lg-block fixed-top">
        <div className="container-fluid">
          <div className="row d-flex pt-4 flex-wrap">
            <div className="col-md-8 col-lg-8 col-xl-8 space-top-3 space-lg-0 text-end pe-5">
              <Link to="/" className="nav-link"><i className="bi bi-chevron-left text-primary"></i>&nbsp;{t('back to home')}</Link>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 text-end pe-5">
              <ButtonAuth />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex position-relative align-items-center">
        <div className="container">
          <div className="row g-0 d-flex pt-sm-4 pt-lg-0">
            <div className="col-md-8 col-lg-7 col-xl-6 offset-md-2 offset-lg-2 offset-xl-3 space-top-3 space-lg-0">
              <div className=" bg-white p-4 p-xl-6 p-xxl-8 p-lg-4 rounded-3 border">
                <span className="d-lg-none">Hello</span>
                {children}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-xl-4 d-none d-lg-flex vh-100 px-0">
          <img
            src="https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGZpdG5lc3MlMjBlcXVpcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            className="img-fluid"
            alt="..."
          />
        </div>
      </div> */}
    </Fragment>

  )


};

export default Account;
