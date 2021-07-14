import { useEffect, useState } from "react";
import { useUser } from "../../contexts/user_context";
import { uploadPDF } from "../../utils/firebase/storage";
import {Button, Modal} from "react-bootstrap";

export default function CarsWorkdetails() {
    const [file, setFile] = useState<any>();
    const [showModal,setShowModal]=useState(false);
    const [user] = useUser();
    useEffect(() => {
        if (file&&user) uploadPDF(user, file).then(()=>alert("UPLOADED!"));
    }, [file,user]);
    return (
        <div className="container text-light">
            <Modal centered show={showModal} onHide={()=>setShowModal(false)}>
                <Modal.Header closeButton>Choose Document to upload</Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-wrap">
                        <Button className="m-3" onClick={() => document.getElementById("uploadPDF")?.click()} variant='warning'>RC</Button>
                        <Button onClick={() => document.getElementById("uploadPDF")?.click()} variant='warning'>Pollution</Button>
                        <Button onClick={() => document.getElementById("uploadPDF")?.click()} variant='warning'>Insurance</Button>
                    </div>
                </Modal.Body>
            </Modal>
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
                    onClick={()=>setShowModal(true)}
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

</table>
            </div>
        </div>
    );
}
