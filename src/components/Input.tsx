import clsx from "clsx";
import React, { Fragment } from "react";

interface IProps extends React.HTMLProps<HTMLInputElement> {
    name: string;
    id: string;
    label: string;
    validator?: string;
    className?: string;
}

const Input = (props: IProps) => {
    const { id, label, validator, className, ...rest } = props;
    const merged = clsx("form-label",className);

    return (
        <Fragment>
            <label htmlFor={id} className={merged}>{label}</label>
            <input id={id} className="form-control" {...rest} />
            {validator && (<p className="text-danger">{validator}</p>)}
        </Fragment>
    );
}

export default Input;