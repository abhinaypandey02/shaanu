import './services_page.css'

export default function ServicesPage(){
    return <div className='container-fluid justify-content-center align-content-center  flex-grow-1' >
                <div className='row-fluid flex-wrap d-flex flex-row '>
                    <div className='col-lg-6 sticky-top' id='leftcol'>

                        <div className='d-flex align-items-center justify-content-center flex-column' id='cart'>

                            <h2 className='display-4'>CART</h2>
                            <img className="img-fluid" src='unnamed.png'></img>
                            <hr id='cartline'></hr>

                            <div className="card">
                                <h5 className="card-header">FRONT BUMPER</h5>
                                <div className="card-body p-2 d-flex flex-row flex-wrap">

                                    <div className='col-lg-10 d-flex justify-content-between align-items-center'>
                                        <p className="card-text my-auto">2 year warranty on paint.</p>
                                        <a href="#" className="btn w-auto btn-outline-light">Remove</a>
                                    </div>
                                    <div className='col-lg-2 d-flex align-items-center '>
                                        <h4 className="my-auto mx-auto">Rs.4999</h4>
                                    </div>

                                </div>
                            </div>
                            <div className="card">
                                <h5 className="card-header">REAR BUMPER</h5>
                                <div className="card-body p-2 d-flex flex-row flex-wrap">
                                    <div className='col-md-10 d-flex justify-content-between align-items-center'>
                                        <p className="card-text my-auto">2 year warranty on paint.</p>
                                        <a href="#" className="btn w-auto btn-outline-light">Remove</a>
                                    </div>
                                    <div className='col-md-2 d-flex align-items-center '>
                                        <h4 className="my-auto mx-auto">Rs.4999</h4>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='col-lg-6 d-flex flex-column' id='rightcol'>
                        <a href="#" className='btn btn-outline-light text-left w-auto mt-5'>

                            <h4 className="card-header">A REPAIR</h4>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                            </div>

                        </a>

                        <a href="#" className='btn btn-outline-light text-left w-auto mt-5'>

                            <h4 className="card-header">B REPAIR</h4>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                            </div>

                        </a>
                        <a href="#" className='btn btn-outline-light text-left w-auto mt-5'>

                            <h4 className="card-header">C REPAIR</h4>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                            </div>

                        </a>
                        <a href="#" className='btn btn-outline-light text-left w-auto mt-5'>

                            <h4 className="card-header">V REPAIR</h4>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                            </div>

                        </a>
                        <a href="#" className='btn btn-outline-light text-left w-auto mt-5'>

                            <h4 className="card-header">D REPAIR</h4>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                            </div>

                        </a>
                        <a href="#" className='btn btn-outline-light text-left w-auto mt-5'>

                            <h4 className="card-header">F REPAIR</h4>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                            </div>

                        </a>
                    </div>
                </div>
            </div>

}