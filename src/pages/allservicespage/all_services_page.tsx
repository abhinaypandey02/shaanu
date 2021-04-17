import './all_services_page.css'
import cartimage from './unnamed.png';

export default function AllServicesPage(){
    return <div className='container-fluid justify-content-center align-content-center  flex-grow-1' >
                <div className='row-fluid flex-wrap d-flex flex-row '>
                    <div className='col-lg-6' id='leftcol'>

                        <div className='d-flex align-items-center justify-content-center flex-column' id='cart'>

                            <h2 className='display-4'>CART</h2>
                            <img className="img-fluid w-50" src={cartimage}/>
                            <hr id='cartline'></hr>
                            <div className='col-12 d-flex flex-wrap align-items-center justify-content-between'>
                            <h2>LAMBO</h2>
                            <div className='btn btn-outline-light w-auto'>CHANGE</div>
                            </div>
                            <hr id='cartline'></hr>

                            

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