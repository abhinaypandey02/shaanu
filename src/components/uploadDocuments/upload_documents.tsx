import UserInterface from "../../interfaces/user";
import {Button, Modal, Spinner, Accordion, Card} from "react-bootstrap";
import {useState} from "react";
import {deleteFile, uploadDocuments} from "../../utils/firebase/storage";
import {useUser} from "../../contexts/user_context";
import {setUserDocument} from "../../utils/firebase/firestore";

export default function UploadDocuments() {
    const [user, setUser] = useUser();
    const [category, setCategory] = useState<string>("RC");
    const [selectCategory, setSelectCategory] = useState(false);
    const [activeKey,setActiveKey]=useState<string>("RC");
    function getCategory(category: string) {
        const docs = user?.documents.filter(docs => docs.category === category);
        if (docs && docs.length > 0) {
            return <Card className="w-100">
                <Accordion.Toggle id={category} className="bg-warning text-left pointer-on-hover" as={Card.Header} onClick={()=>setActiveKey(activeKey===category?"":category)} eventKey={category}>
                    {category}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={category}>
                    <Card.Body className="border border-warning">{docs.map(doc => <div key={doc.name}
                                                                                       className="my-2 py-2 px-3 d-flex align-items-center justify-content-between w-100 text-light border rounded border-warning">
                        <a target="_blank" href={doc.url} download>{doc.name}</a>
                        {doc.url !== "null" ?
                            <Button onClick={() => deleteFileLocal(doc.name)} className="rounded-circle "
                                    variant="danger">X</Button> : <Spinner animation={'border'}/>}
                    </div>)}</Card.Body>
                </Accordion.Collapse>
            </Card>
        }
    }

    function onFileChange(e: any) {
        const file = e.target.files[0];
        if (user && file) {
            setUser((old: UserInterface) => {
                const doc = old.documents.find(ele => ele.name === file.name)
                if (doc) {
                    doc.category = category;
                    doc.url = "null";
                } else old.documents.push({name: file.name, url: "null", category})

                return {...old};
            });
            setActiveKey(category)
            uploadDocuments(user, file).then(url => {
                setUser((old: UserInterface) => {
                    const doc = old.documents.find(ele => ele.name === file.name)
                    if (doc) {
                        doc.category = category;
                        doc.url = url;
                    } else old.documents.push({name: file.name, url, category})
                    setUserDocument(old);
                    return {...old};
                });

            })
        }
        return null;

    }

    function uploadDocument() {
        setSelectCategory(true);

    }

    function deleteFileLocal(filename: string) {
        if (user) {
            setUser((old: UserInterface) => {
                old.documents=old.documents.filter(doc => doc.name !== filename);
                setUserDocument(old);
                return {...old};
            })
            deleteFile(user, filename)
        }

    }

    return (
        <div className="container border rounded border-warning rounded-0  mb-4 text-center">
            <Modal show={selectCategory} centered onHide={() => setSelectCategory(false)}>
                <Modal.Header closeButton>Select Category</Modal.Header>
                <Modal.Body>
                    {['RC', 'INSURANCE'].map(category => <Button className="m-2" key={category} onClick={() => {
                        setCategory(category);
                        document.getElementById('file')?.click();
                        setSelectCategory(false);
                    }}>{category}</Button>)}
                </Modal.Body>
            </Modal>
            <div className="row align-items-center p-3 border-bottom border-warning rounded-0">
                <h1 className='text-light mx-auto my-0'>UPLOAD DOCUMENTS</h1>
                <input onChange={onFileChange} type="file" className="d-none" id="file"/>
                <Button className="rounded-circle" onClick={uploadDocument}>+</Button>
            </div>
            <div className="row p-3">
                <Accordion activeKey={activeKey} className="w-100">
                    {getCategory("RC")}
                    {getCategory("INSURANCE")}
                </Accordion>
                {user?.documents.length === 0 && <div className="text-warning">NO FILES UPLOADED</div>}
            </div>
        </div>
    )
}