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
            <div className="row-fluid  mb-4 text-center">
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
                    className="btn btn-light"
                >
                    Upload Old Records
                </button>
            </div>
            <div className="row-fluid">
                <table
                    id="asss"
                    className="table text-light text-center table-bordered"
                >
                    <tbody>
                        <td colSpan={3}>CAR WORK DETAILS</td>
                        <tr>
                            <th scope="col">DATE</th>
                            <th>PARTS</th>
                            <th>SERVICES</th>
                        </tr>
                        <tr>
                            <th scope="row">REGISTRATION NUMBER.</th>
                            <td>2135315135135</td>
                            <td>MARUZIT USUKI MARU</td>
                        </tr>
                        <tr>
                            <th scope="row">NEXT SERVICE DUE DATE</th>
                            <td> 13/032/202123</td>
                            <td>MARUZIT USUKI MARU</td>
                        </tr>
                        <tr>
                            <th scope="row">INSURANCE DUE DATE</th>
                            <td>13/03/2212</td>
                            <td>MARUZIT USUKI MARU</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
