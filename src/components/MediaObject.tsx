
import React, { Fragment } from "react";

interface IMediaObject {
    alt: string;
    src: string;
    text: string | Array<string>;
}

const MediaObject = (props: IMediaObject) => {
    const { text, src, alt } = props;
    return (
        Array.isArray(text)
            ?
            <Fragment>
                <p>{text[0]}</p>
                <div className="d-flex my-3">
                    <div className="flex-shrink-0">
                        <img src={src} alt={alt} style={{ "width": "300px" }} />
                    </div>
                    <div className="flex-grow-1 ms-3">
                        {text[1]}.
                    </div>
                </div>
            </Fragment>
            :
            <Fragment>
                <div className="d-flex my-3">
                    <div className="flex-shrink-0">
                        <img src={src} alt={alt} style={{ "width": "300px" }} />
                    </div>
                    <div className="flex-grow-1 ms-3">
                        {text}.
                    </div>
                </div >
            </Fragment>
    )
}

export default MediaObject;