import './all_services_page.css'
import cartimage from './unnamed.png';

export default function AllServicesPage() {
    return (<div className='container-fluid p-5'>
        <div className='row p-3'>
            <div className='col-lg-5 '>

                <div className='d-flex align-items-center justify-content-center flex-column p-3 text-light' id='cart'>

                    <h2 className='display-4'>CART</h2>
                    <img className="img-fluid w-50" src={cartimage} />

                    <hr className='w-100 bg-light' />
                    <div className='col-12 d-flex flex-wrap align-items-center justify-content-between'>
                        <div className="col">
                            <h2>LAMBO XY12Z</h2><span className=" rounded-pill p-1 badge bg-light text-dark">Petrol</span>
                        </div>

                        <div className='btn btn-outline-light w-auto'>CHANGE</div>
                    </div>
                    <hr className='w-100 bg-light' />

                </div>
            </div>

            <div className='col-lg-7 text-center'>
                <h1 className='text-light'>Select Services</h1>
                <a href="#" className='btn btn-outline-light text-left mt-5'>

                    <h4 className="card-header">A REPAIR</h4>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                    </div>

                </a>

                <a href="#" className='btn btn-outline-light text-left mt-5'>

                    <h4 className="card-header">B REPAIR</h4>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                    </div>

                </a>
                <a href="#" className='btn btn-outline-light text-left  mt-5'>

                    <h4 className="card-header">C REPAIR</h4>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                    </div>

                </a>
                <a href="#" className='btn btn-outline-light text-left  mt-5'>

                    <h4 className="card-header">V REPAIR</h4>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                    </div>

                </a>
                <a href="#" className='btn btn-outline-light text-left mt-5'>

                    <h4 className="card-header">D REPAIR</h4>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                    </div>

                </a>
                <a href="#" className='btn btn-outline-light text-left  mt-5'>

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
    );
}