import clsx from "clsx";
import React, { ReactNode } from "react";


interface ICover{
    color_text?: string;
    img: string;
    title?:string | undefined;
    sub_title?:string | undefined;
}

const Cover = (props: ICover) => {
    const {color_text,img,title, sub_title} = props;
    const homeDivStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }

    const color = color_text || "text-black";
    const merged = clsx("col-12 text-center", color);

    return (
        <div className="wrapper">
            <div className="module-cover" style={homeDivStyle}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className={merged}>
                            {title && <h1 className="fw-light">{title}</h1>}
                            {sub_title && <p className="lead">{sub_title}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Cover;