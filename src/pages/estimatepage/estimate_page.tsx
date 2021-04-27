import './estimate_page.css'


export default function EstimatePage() {
    return (
        <div className='container-fluid d-flex flex-grow-1  justify-content-center align-items-center'>
            <div className='row text-center w-100 '>
                <div className='col-lg-6 '>
                </div>

                <div className='col-lg-6'>

                    <button type="button" className="btn btn-lg mx-auto mt-3 mb-3 btn-outline-light">Create your car's profile</button>
                    <h1 className='text-light'>OR</h1>
                    <br />
                    <div className="row mb-3 d-flex  align-items-center justify-content-center text-light">
                        <div className="col-3 d-flex justify-content-end ">
                         FULL NAME
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control"  />
                        </div>
                    </div>
                    <div className="row mb-3 d-flex  align-items-center justify-content-center text-light">
                        <div className="col-3 d-flex justify-content-end ">
                          PHONE NUMBER
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="row d-flex mb-3 align-items-center justify-content-center text-light">
                        <div className="col-3 d-flex justify-content-end ">
                            LOCATION
                        </div>
                        <div className="col-6 ">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-lg mx-auto btn-outline-light mb-3">Request A Callback</button>


                </div>
            </div>
        </div>
    );
}