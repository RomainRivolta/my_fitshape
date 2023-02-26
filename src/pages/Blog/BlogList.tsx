import React, { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Cover from "../../components/Cover";
import Pagination from "../../components/Pagination";
import Spinner from "../../components/Spinner";

export interface IBlogList {
  id: number;
  title: string;
  content: string;
  publish: string;
  img: string;
  category?: string;
}


const BlogList = () => {
  const perPage: number = Number(process.env.REACT_APP_PER_PAGE_BLOG);

  const { t } = useTranslation(['blogs', 'main']);
  const [blogList, setBlogList] = useState<IBlogList[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogListPerPage, setBlogListPerPage] = useState(perPage);

  const indexOfLastBlog: number = currentPage * blogListPerPage;
  const indexOfFirstBlog: number = indexOfLastBlog - blogListPerPage;
  const nPages: number = Math.ceil(blogList.length / blogListPerPage)
  const currentBlogList: IBlogList[] = blogList.slice(indexOfFirstBlog, indexOfLastBlog);

  const getBlogList = async () => {
    setIsLoading(true);
    const res: Response = await fetch(`${process.env.REACT_APP_BACK_END_API}/blogs/list`);
    const blogListData: IBlogList[] = await res.json();
    setBlogList(blogListData);
    setIsLoading(false);
  }

  useEffect(() => {
    getBlogList();
  }, [])


  const renderBlogs = (
    <Fragment>
      <div className="bg-effect bg-effect-color">
        <div className="container py-4">
          <div className="d-flex row row-cols-2 g-5 mb-5">
            {currentBlogList.map((blog) => (
              <div className="col-4 blogs" key={blog.id}>
                <div className="card card-hover h-100">
                  <img src={blog.img} alt={blog.title} className="card-img-top img-fluid" />
                  <div className="card-body p-4 p-xl-5 text-center">
                    <h2 className="card-title">
                      <Link to={`/blogs/${blog.title.toLowerCase()}`} state={{id: blog.id}} className="stretched-link text-decoration-none">{blog.title}</Link>
                    </h2>
                    <div className="small mb-4">
                      <span className="fw-light">{t('published on')} </span>{blog.publish}&nbsp;|&nbsp;
                      {blog.category && <><span className="fw-light">{t('categories')}: </span>{blog.category}</>}
                    </div>
                    <p className="card-text text-secondary crop-text">
                      {blog.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row pt-4">
            <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <div id="content-blog-list">
        <div className="container pt-5 mb-5">
          <div className="row justify-content-center">
            <div className="col-9">
              <h1 className="display-4 text-center py-4 py-md-5 py-xl-6">{t('blog')}</h1>
            </div>
          </div>
        </div>
        {isLoading ?
          <div className="container pt-5">
            <div className="d-flex row row-cols">
              <Spinner />
            </div>
          </div>
          : renderBlogs
        }
      </div>
    </Fragment>
  )
}

export default BlogList;