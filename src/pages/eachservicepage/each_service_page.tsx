import './each_service_page.css'
import cartimage from './unnamed.png';

export default function EachServicePage() {
    return <div className='container-fluid justify-content-center align-content-center  flex-grow-1' >
        <div className='row-fluid flex-wrap d-flex flex-row '>
            <div className='col-lg-6' id='leftcol'>

                <div className='d-flex align-items-center justify-content-center flex-column' id='cart'>

                    <h2 className='display-4'>CART</h2>
                    <img className="img-fluid w-50" src={cartimage} />
                    <hr id='cartline'></hr>
                    <div className='col-12 d-flex flex-wrap align-items-center justify-content-between'>
                        <h2>LAMBO</h2>
                        <div className='btn btn-outline-light w-auto'>CHANGE</div>
                    </div>
                    <hr id='cartline'></hr>

                    <div className="card">
                        <h5 className="card-header">FRONT BUMPER</h5>
                        <div className="card-body p-2 d-flex flex-row flex-wrap">

                            <div className='col-lg-10 d-flex justify-content-between align-items-center'>
                                <p className="card-text my-auto">2 year warranty on paint. <span className="badge bg-warning text-dark">GOLD</span></p>
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

                <div className="card">
                    <h4 className="card-header">A REPAIR</h4>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text text-light"><table className="table">
                            <tbody>
                                <tr>
                                    <td>No AC</td>
                                    <td>No Heater</td>
                                    <td>Only Gay</td>
                                </tr>
                                <tr>
                                    <td>Full Masti</td>
                                    <td>Delhi Boys</td>
                                    <td>Motapa</td>
                                </tr>
                            </tbody>
                        </table></p>
                        <button className='btn btn-outline-light '> Add to Cart </button>
                    </div>
                </div>





                <div className="card">
                    <h4 className="card-header">B REPAIR</h4>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                    </div>
                </div>


                <div className="card">
                    <h4 className="card-header">C REPAIR</h4>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                    </div>
                </div>

                <div className="card">


                    <h4 className="card-header">V REPAIR</h4>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                    </div>
                </div>



                <div className="card">
                    <h4 className="card-header">D REPAIR</h4>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                    </div>
                </div>

                <div className="card">


                    <h4 className="card-header">F REPAIR</h4>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

}