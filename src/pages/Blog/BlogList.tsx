import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CardBlogs from "../../components/CardBlogs";
import Pagination from "../../components/Pagination";
import Spinner from "../../components/Spinner";
import { IBlogResponseList } from "../../utils/blogInterface";

const BlogList = () => {
  // const perPage: number = Number(process.env.REACT_APP_PER_PAGE_BLOG);

  const [blogs, setBlogs] = useState<IBlogResponseList>();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { t } = useTranslation('blogs');

  const getBlogList = async () => {
    setIsLoading(true);

    const data = {
      page: page,
      limit: process.env.REACT_APP_LIMIT_PER_PAGE
    };

    const res: Response = await fetch(`${process.env.REACT_APP_BACK_END_API}/blogs/list`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    });

    const blogsData: IBlogResponseList = await res.json();
    setBlogs(blogsData);
    setIsLoading(false);
  }

  useEffect(() => {
    getBlogList();
  }, [page])


  const renderBlogs = (
    blogs ?
      
        <div className="bg-effect bg-effect-color">
          <div className="container py-4">
            <div className="d-flex row row-cols-2 g-5 mb-5">
              <CardBlogs blogsData={blogs.blogs} />
            </div>
            <div className="row pt-4">
              <Pagination page={page} limit={blogs.limit ? blogs.limit : 0} total={blogs.total ? blogs.total : 0} setPage={(page: number) => setPage(page)} />
            </div>
          </div>
        </div>
      
      : null
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