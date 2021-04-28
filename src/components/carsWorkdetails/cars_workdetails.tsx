export default function CarsWorkdetails(){
    return(
        <div className="container text-light">
            <div className="row-fluid  mb-4 text-center">
                <button className='btn btn-light'>
                    Upload Old Records
                </button>
            </div>
            <div className="row-fluid">
            <table className="table text-light text-center table-bordered">
                    <tbody>
                            <td colSpan={2}>
                                CAR WORK DETAILS
                            </td>
                            <tr>
                                <th scope="col">CAR'S NAME</th>
                                <td>MARUZIT USUKI MARU</td>
                            </tr>
                            <tr>
                                <th scope="row">REGISTRATION NUMBER.</th>
                                <td>2135315135135</td>

                            </tr>
                            <tr>
                                <th scope="row">NEXT SERVICE DUE DATE</th>
                                <td> 13/032/202123</td>

                            </tr>
                            <tr>
                                <th scope="row">INSURANCE DUE DATE</th>
                                <td>13/03/2212</td>

                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    )
}