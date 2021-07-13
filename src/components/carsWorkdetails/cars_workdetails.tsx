import { useEffect, useState } from "react";
import { useUser } from "../../contexts/user_context";
import { uploadPDF } from "../../utils/firebase/storage";

export default function CarsWorkdetails() {
    const [file, setFile] = useState<any>();
    const [user] = useUser();
    useEffect(() => {
        if (file&&user) uploadPDF(user, file).then(()=>alert("UPLOADED!"));
    }, [file,user]);
    return (
        <div className="container text-light">
            <div className="row p-3  mb-4 text-center">
                <div className="col-md-6 p-2">
                <input
                    type="file"
                    id="uploadPDF"
                    className="d-none"
                    onChange={(e: any) => {
                        setFile(e.target.files[0]);
                    }}
                />

                <button
                    onClick={() =>
                        document.getElementById("uploadPDF")?.click()
                    }
                    className="btn btn-outline-warning rounded-0"
                >
                    Upload Old Records
                </button>
                </div>
                <div className="col-md-6 p-2">
                <input
                    type="file"
                    id="uploadPDF"
                    className="d-none"
                    onChange={(e: any) => {
                        setFile(e.target.files[0]);
                    }}
                />

                <button
                    onClick={() =>
                        document.getElementById("uploadPDF")?.click()
                    }
                    className="btn btn-outline-warning rounded-0"
                >
                    Upload Documents
                </button>
                </div>
                
            </div>
            <div className="row-fluid">
            <table className="table text-light text-center table-bordered">
  <thead>
      <tr className='bg-warning text-dark'>
      <th colSpan={3}>CAR SERVICE DETAILS</th>
      </tr>
    <tr>
   
      <th className='text-warning' scope="col">DATES</th>
      <th className='text-warning' scope="col">PARTS</th>
      <th  className='text-warning' scope="col">SERVICE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">1</td>
     
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td scope="row">2</td>

      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td scope="row">3</td>
      <td >Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
            </div>
        </div>
    );
}
