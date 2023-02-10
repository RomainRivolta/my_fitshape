import clsx from "clsx";
import React from "react";

type Props = {
    type?: any;
    children: string;
    className?: string;
}

const Button = (props: Props) => {
    const {type, children, className} = props;

    const merged = clsx("btn",className);

    return(
        <button className={merged} type={type || 'button'}>{children}</button>
    );
}

export default Button;