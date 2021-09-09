import React from "react"
import { Card } from "react-bootstrap"
import blogData from "../../database/blogs.json"
import Blog from "../../interfaces/blog"
import { useHistory } from "react-router"

export default function BlogPage() {
    const blogs: Blog[] = blogData.blogs
    const his = useHistory()
    return (
        <div className="container-fluid bg-warning p-2">
            <div className="container ">
                <br />
                <h1>OUR BLOGS</h1>
                <hr className="bg-dark" />
                <br />
                <div className="d-flex flex-wrap">
                    {blogs.map((blog) => (
                        <div
                            key={blog.slug}
                            className="col-md-4 pointer-on-hover"
                            onClick={() => his.push("/blog/" + blog.slug)}
                        >
                            <Card className="bg-dark text-light" style={{ width: "18rem" }}>
                                <Card.Img
                                    variant="top"
                                    src="https://cdn.luxe.digital/media/2020/12/15110747/fastest-cars-world-2021-luxe-digital%402x.jpg"
                                />
                                <Card.Body className="bg-dark">
                                    <Card.Title className="font-weight-bold">
                                        {blog.title}
                                    </Card.Title>
                                    <Card.Text className="">{blog.subtitle}</Card.Text>
                                    <p className="text-muted">{blog.time} minutes read.</p>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}