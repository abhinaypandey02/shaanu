import React, { useEffect } from "react"
import Blog from "../../interfaces/blog"
import ReactMarkdown from "react-markdown"

const EachBlog = ({ blog }: { blog: Blog }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 p-3 d-flex justify-content-center align-items-start">
                    <img
                        src={blog.imageURL}
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-8">
                    <h1 className="font-weight-bold text-light">{blog.title}</h1>
                    <ReactMarkdown className="text-light">{blog.content}</ReactMarkdown>
                </div>
            </div>
        </div>

    )
}

export default EachBlog
