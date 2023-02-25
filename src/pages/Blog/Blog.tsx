import React from "react";
import { useLocation } from "react-router-dom";
import { IBlogList } from "../../utils/blogInterface";

const Blog = (props: any) => {

    const { state }: { state: any } = useLocation();
    const blog: IBlogList = state.blog;

    return (
        <div id="content-blog">
            <div className="container my-5">
                <div className="row justify-content-center text-center ">
                    <div className="col-10">
                        <img src={blog.img} alt={blog.title} className="img-thumbnail" width="1000" height="500" />
                    </div>
                </div>
            </div>
            <div className="bg-effect bg-effect-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <article className="pb-2">
                                <h1 className="text-center">{blog.title}</h1>
                                <div className="small text-center mb-5"><span className="fw-light">published on </span>July 12, 2022</div>
                                <p className="lead">This is a sample intro paragraph and can be used to introduce readers to your article.</p>
                                <p>Quisque ligulas ipsum, euismod atras vulputate iltricies etri elit. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula.</p>
                                <p>Vestibulum sodales ante a purus <a href="#">volutpat euismod</a>. Proin sodales quam nec ante sollicitudin lacinia. Ut egestas bibendum tempor. Morbi non nibh sit amet ligula blandit ullamcorper in nec risus. Pellentesque fringilla diam faucibus tortor bibendum vulputate. Etiam turpis urna, rhoncus et mattis ut, dapibus eu nunc.</p>

                                <figure className="figure mt-2">
                                    <img src="assets/img/laptop.jpg" className="figure-img img-fluid shadow mb-2" alt="Person using laptop" width="800" height="533" />
                                    <figcaption className="figure-caption text-center">This is a caption</figcaption>
                                </figure>

                                <p>Pellentesque fringilla diam faucibus tortor bibendum vulputate. Etiam turpis urna, rhoncus et mattis ut, dapibus eu nunc. Nunc sed aliquet nisi.</p>

                                <h2>Heading 2</h2>
                                <p>Quisque ligulas ipsum, euismod atras vulputate iltricies etri elit. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                                <p>Vestibulum sodales ante a purus volutpat euismod. Proin sodales quam nec ante sollicitudin lacinia. Ut egestas bibendum tempor. Morbi non nibh sit amet ligula blandit ullamcorper in nec risus.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;