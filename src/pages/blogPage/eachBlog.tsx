import React from "react"
import Blog from "../../interfaces/blog"
import ReactMarkdown from "react-markdown"

const EachBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 p-3 d-flex justify-content-center align-items-center bg-warning">
                    <img
                        src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
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