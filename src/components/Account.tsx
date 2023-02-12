import React, { ReactNode } from "react";

const Account = ({ children }: { children: ReactNode }) => {
  return (
    <div className="d-flex align-items-center position-relative vh-100">
      <div className="col-lg-5 col-xl-4 d-none d-lg-flex vh-100 px-0">
        <img
          src="https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGZpdG5lc3MlMjBlcXVpcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          className="img-fluid"
          alt="..."
        />
      </div>
      <div className="container">
        <div className="row g-0">
          <div className="col-md-8 col-lg-7 col-xl-6 offset-md-2 offset-lg-2 offset-xl-3 space-top-3 space-lg-0">
            <div className="bg-white p-4 p-xl-6 p-xxl-8 p-lg-4 rounded-3 border">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
