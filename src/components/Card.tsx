import React from "react";

interface ICard{
    imgsrc:string;
}

const Card = (props: ICard) => {
    const {imgsrc} = props;
    return(
        <a className="card h-100">
             <img src={imgsrc} className="card-img-top" alt="..."/>
             <div className="card-body">
                
             </div>
        </a>
    )
}

export default Card