import React, {ReactNode} from "react";

interface ICard{
    imgsrc:string;
    children:ReactNode;
}

const Card = (props: ICard) => {
    const {imgsrc,children} = props;
    return(
        <a className="card h-100 ">
             <img src={imgsrc} className="card-img-top img-fluid" alt="..." style={{"height":"15vw"}}/>
             <div className="card-body">
                {children}
             </div>
        </a>
    )
}

export default Card