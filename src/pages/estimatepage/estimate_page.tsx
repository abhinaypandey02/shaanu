import './estimate_page.css'


export default function EstimatePage() {
    return (
        <div className='container-fluid d-flex flex-grow-1  justify-content-center align-items-center'>
            <div className='row text-center w-100 '>
                <div className='col-lg-6 '>
                </div>

                <div className='col-lg-6'>
                    <div className="d-flex flex-column text-center p-3">
                        <button type="button" className="btn btn-lg mx-auto mt-3 mb-3 btn-outline-light">Create your car's profile</button>
                        <h1 className='text-light'>OR</h1>
                        <br/>
                        <table className="table table-dark table-striped">
                            <tbody>
                                <tr>
                                    <th scope="row"><h4 className='mt-2'>FULL NAME</h4></th>
                                    <td>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><h4 className='mt-2'>PHONE NUMBER</h4></td>
                                    <td>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row text-wrap"><h4 className='mt-2'>LOCATION</h4></th>
                                    <td>
                                        <div className="input-group">
                                            <textarea className="form-control" aria-label="With textarea"></textarea>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                            <button type="submit" className="btn btn-lg mx-auto btn-outline-light mb-3">Request A Callback</button>
                    </div>

                </div>
            </div>
        </div>
    );
}