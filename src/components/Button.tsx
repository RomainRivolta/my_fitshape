import clsx from "clsx";
import React from "react";

type Props = {
    type: any;
    label: string;
    className?: string;
}

const Button = (props: Props) => {
    const {type, label, className} = props;

    const merged = clsx("btn",className);

    return(
        <button className={merged} type={type || 'button'}>{label}</button>
    );
}

export default Button;