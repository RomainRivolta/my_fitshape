import clsx from "clsx";
import React, { Fragment, useEffect, useRef } from "react";
import {Popover} from 'bootstrap';
import * as ReactDOMServer from 'react-dom/server';
import CheckList from "./CheckList";

interface IProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
  id: string;
  label: string;
  validator?: string;
  className?: string;
  data?: string;
}

const InputGroup = (props: IProps) => {
  const { id, label, validator, className, data, ...rest } = props;
  
  const merged = clsx("form-label", className);
  const checkListHtmlString = ReactDOMServer.renderToStaticMarkup(<CheckList value={data} />);
  const popoverRef = useRef<HTMLDivElement| null >(null);

  useEffect(() => {
      if(popoverRef.current){
        const popover =  new Popover(popoverRef.current,{
          html:true,
          content: checkListHtmlString,
          trigger:'hover focus'
        })
      }
   },[data]);
  
  return (
    <Fragment>
      <div className="mb-3">
        <label htmlFor={id} className={merged}>
          {label}
        </label>
        <div className="input-group align-items-center">
        <input
          id={id}
          className={`form-control ${validator ? "is-invalid" : ""}`}
          {...rest}
        />
          <i className="bi bi-info-circle ps-2"  ref={popoverRef}/>
        </div>
        {validator && <div className="invalid-feedback">{validator}</div>}
      </div>
    </Fragment>
  );
};

export default InputGroup;
