import React, { Fragment } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Fragment>
            <Nav/>
            <Outlet />
            <Footer />
        </Fragment>

    )
}

export default Layout;