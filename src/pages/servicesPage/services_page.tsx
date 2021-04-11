import './services_page.css'

export default function ServicesPage(){
    return <div className='container-fluid justify-content-center align-content-center bg-info flex-grow-1' >
                <div className='row-fluid bg-info d-flex flex-row '>
                    <div className='col-md-6 bg-warning sticky-top' id='leftcol'>

                        <div className='d-flex align-items-center justify-content-center flex-column' id='cart'>
                            <div className="card  ">
                                <h5 className="card-header">FRONT BUMPER</h5>
                                <div className="card-body p-2 bg-danger d-flex flex-row flex-wrap">
                                    <div className='col-md-10 bg-info d-flex justify-content-between align-items-center'>
                                        <p className="card-text my-auto">2 year warranty on paint.</p>
                                        <a href="#" className="btn btn-primary">Remove</a>
                                    </div>
                                    <div className='col-md-2 text-dark bg-dark'>
                                        <h4 ><span className="badge  bg-light">Rs.4999</span></h4>
                                    </div>

                                </div>
                            </div>

                                <div className="card ">
                                    <h5 className="card-header">Featured</h5>
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        <p className="card-text  text-wrap">With supporting text below as a natural lead-in to additional
                                            content.</p>
                                        <a href="#" className="btn btn-primary">Remove</a>
                                    </div>
                                </div>

                            <hr/>

                        </div>


                    </div>

                    <div className='col-md-6 bg-danger d-flex flex-column' id='rightcol'>

                        <div className="card mt-5">
                            <h5 className="card-header">Featured</h5>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        <div className="card">
                            <h5 className="card-header">Featured</h5>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Featured</h5>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Featured</h5>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Featured</h5>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Featured</h5>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

}