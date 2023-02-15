import React, { ReactNode } from "react";


const Cover = (props: any, { children }: { children: ReactNode }) => {
    const cover: string = props.img;
    const homeDivStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/${cover}.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }


    return (
        <div className="wrapper">
            <div className="module-cover" style={homeDivStyle}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            {children}
                            <h1 className="fw-light">Vertically Centered Masthead Content</h1>
                            <p className="lead">A great starter layout for a landing page</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Cover;