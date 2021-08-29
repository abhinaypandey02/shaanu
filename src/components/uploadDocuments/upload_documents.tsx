import { Accordion, Button, Card, Modal, Spinner } from "react-bootstrap";
import { useState } from "react";
import { uploadDocuments } from "../../utils/firebase/storage";
import { CarProfile } from "../../interfaces/car";
import { useUser } from "../../contexts/user_context";
import { v4 } from "uuid";

export default function UploadDocuments({
  currentCarProfile,
  setCurrentCarProfile,
  cloudUpdateCarProfile,
}: {
  currentCarProfile: CarProfile;
  setCurrentCarProfile: any;
  cloudUpdateCarProfile: (carProfile: CarProfile) => void;
}) {
  const [user] = useUser();
  const [category, setCategory] = useState<string>("RC");
  const [selectCategory, setSelectCategory] = useState(false);
  const [activeKey, setActiveKey] = useState<string>("RC");

  function renameFile(fileID: string, fileName: string) {
    const newName = window.prompt("Enter new name for the file", fileName);
    if (newName && newName !== "") {
      const newCarProfile = {
        ...currentCarProfile,
      };
      let docIndex = currentCarProfile.documents.findIndex(
        (ele) => ele.id === fileID
      );
      if (docIndex !== -1) {
        newCarProfile.documents[docIndex].name = newName;
      }
      setCurrentCarProfile(newCarProfile);
      cloudUpdateCarProfile(newCarProfile);
    }
  }

  function onFileChange(e: any) {
    const file = e.target.files[0];
    if (file) {
      const _ID = v4();
      setCurrentCarProfile((old: CarProfile) => {
        const doc = old.documents.find((ele) => ele.id === file.id);
        if (doc) {
          doc.category = category;
          doc.url = "null";
        } else
          old.documents.push({
            name: file.name,
            url: "null",
            category,
            id: _ID,
          });
        return { ...old };
      });
      setActiveKey(category);
      uploadDocuments(user, file).then((url) => {
        const docIndex = currentCarProfile.documents.findIndex(
          (ele) => ele.id === _ID
        );
        const newCarProfile = { ...currentCarProfile };
        if (docIndex !== -1) {
          newCarProfile.documents[docIndex].category = category;
          newCarProfile.documents[docIndex].url = url;
        } else
          newCarProfile.documents.push({
            name: file.name,
            url,
            category,
            id: _ID,
          });
        cloudUpdateCarProfile(newCarProfile);
        setCurrentCarProfile(newCarProfile);
      });
    }
    return null;
  }

  function uploadDocument() {
    setSelectCategory(true);
  }

  function deleteFileLocal(fileID: string) {
    if (user) {
      const newCarProfile = { ...currentCarProfile };
      newCarProfile.documents = newCarProfile.documents.filter(
        (doc) => doc.id !== fileID
      );
      cloudUpdateCarProfile(newCarProfile);
      setCurrentCarProfile(newCarProfile);
    }
  }

  function getCategory(category: string) {
    const docs = currentCarProfile?.documents.filter(
      (docs) => docs.category === category
    );
    if (docs && docs.length > 0) {
      return (
        <Card className="w-100">
          <Accordion.Toggle
            id={category}
            className="bg-warning text-left pointer-on-hover"
            as={Card.Header}
            onClick={() => setActiveKey(activeKey === category ? "" : category)}
            eventKey={category}
          >
            {category}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={category}>
            <Card.Body className="border border-warning">
              {docs.map((doc) => (
                <div
                  key={doc.name}
                  className="my-2 py-2 px-3 d-flex align-items-center justify-content-between w-100 text-light border rounded border-warning"
                >
                  <a target="_blank" href={doc.url} download rel="noreferrer">
                    {doc.name}
                  </a>
                  {doc.url !== "null" ? (
                    <div>
                      <Button
                        onClick={() => deleteFileLocal(doc.id)}
                        className="rounded-circle "
                        variant="danger"
                      >
                        X
                      </Button>
                      <Button onClick={() => renameFile(doc.id, doc.name)}>
                        Rename
                      </Button>
                    </div>
                  ) : (
                    <Spinner animation={"border"} />
                  )}
                </div>
              ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      );
    }
  }

  return (
    <div className="container border rounded border-warning rounded-0  mb-4 text-center">
      <Modal
        show={selectCategory}
        centered
        onHide={() => setSelectCategory(false)}
      >
        <Modal.Header closeButton>Select Category</Modal.Header>
        <Modal.Body>
          {["RC", "INSURANCE", "SERVICE RECORDS"].map((category) => (
            <Button
              className="m-2"
              key={category}
              onClick={() => {
                setCategory(category);
                document.getElementById("file")?.click();
                setSelectCategory(false);
              }}
            >
              {category}
            </Button>
          ))}
        </Modal.Body>
      </Modal>
      <div className="row align-items-center p-3 border-bottom border-warning rounded-0">
        <h1 className="text-light mx-auto my-0">UPLOAD DOCUMENTS</h1>
        <input
          onChange={onFileChange}
          type="file"
          className="d-none"
          id="file"
        />
        <Button className="rounded-circle" onClick={uploadDocument}>
          +
        </Button>
      </div>
      <div className="row p-3">
        <Accordion activeKey={activeKey} className="w-100">
          {getCategory("RC")}
          {getCategory("INSURANCE")}
          {getCategory("SERVICE RECORDS")}
        </Accordion>
        {currentCarProfile.documents.length === 0 && (
          <div className="text-warning">NO DOCUMENTS UPLOADED</div>
        )}
      </div>
    </div>
  );
}
