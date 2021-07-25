import React, {useState} from "react";
import {Card, Modal} from "react-bootstrap";
import blogData from '../../database/blogs.json';

interface Blog {
    title: string;
    content: string;
    author: string;
    time: number
}

function BlogContent({blog}:{blog:Blog}){
    return <div>
        {blog.content}
    </div>
}

export default function BlogPage() {
    const blogs: Blog[] = blogData.blogs;
    const [selectedBlog,setSelectedBlog]=useState<Blog>();
    return (
        <div className="container-fluid bg-warning p-2">
            <Modal contentClassName="full-modal-content border border-dark rounded-0 bg-dark text-light" dialogClassName="full-modal-dialog" centered show={!!selectedBlog} onHide={()=>setSelectedBlog(undefined)}>
                <Modal.Header closeButton className='bg-warning rounded-0'>
                    {selectedBlog?.title}
                </Modal.Header>
                <Modal.Body>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 p-3 d-flex justify-content-center align-items-center bg-warning">
                            <img src='https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
                            className='img-fluid'/>
                        </div>
                        <div className="col-md-8">
                            <h1 className='font-weight-bold'>{selectedBlog?.title}</h1>
                            <p>
                            {selectedBlog&&<BlogContent blog={selectedBlog}/>}
                             
                             
                            </p>
                        </div>
                    </div>
                </div>
                
                </Modal.Body>
            </Modal>
            <div className='container '>
                <br/>
                <h1>OUR COOL BLOGS</h1>
                <hr className='bg-dark'/>
                <br/>
                <div className="d-flex flex-wrap">
                    {blogs.map(blog =>
                        <div className="col-md-4 pointer-on-hover" onClick={()=>setSelectedBlog(blog)}>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top"
                                      src="https://cdn.luxe.digital/media/2020/12/15110747/fastest-cars-world-2021-luxe-digital%402x.jpg"/>
                            <Card.Body>
                                <Card.Title className='font-weight-bold'>{blog.title}</Card.Title>
                                <Card.Text className=''>
                                    {blog.content}
                                </Card.Text>
                                <p className="text-muted">
                                    {blog.time} minutes read.
                                </p>

                            </Card.Body>
                        </Card>
                    </div>)}
                </div>
            </div>
        </div>
    );
}