import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { IBlogDataList } from "../utils/blogInterface";

interface ICardBlog {
  blogsData: IBlogDataList[];
}

const CardBlogs: Function = (props: ICardBlog) => {
    const {blogsData} = props;
    const { t } = useTranslation(['blogs', 'main']);
    return (
      blogsData.map(({_id,img,title,content,category,publish}) => (
            <div className="col-4 blogs" key={_id}>
              <div className="card card-hover h-100">
                <img src={img} alt={title} className="card-img-top img-fluid" />
                <div className="card-body p-4 p-xl-5 text-center">
                  <h2 className="card-title">
                    <Link to={`/blogs/${title.toLowerCase()}`} state={{ id: _id }} className="stretched-link text-decoration-none">{title}</Link>
                  </h2>
                  <div className="small mb-4">
                    <><span className="fw-semibold">{t('published on')} </span>{new Date(publish).toLocaleDateString()}</>,&nbsp;
                    <><span className="fw-semibold">{t('categories')}: </span>{category}</>
                  </div>
                  <p className="card-text text-secondary crop-text">
                    {content}
                  </p>
                </div>
              </div>
            </div>
          ))
    )
}

export default CardBlogs;