import {DownloadTable, DownloadTableParams} from "./downloadTable";
import {useState} from "react";
import {Button, Modal} from "react-bootstrap";

export interface DownloadButtonParams extends DownloadTableParams {
}

export function DownloadButton(props: DownloadButtonParams) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Telecharger
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton style={{backgroundColor: "#2b2b2b"}}>
                    <Modal.Title>Download Model</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor: "#2b2b2b"}}>
                    <DownloadTable modelfiles={props.modelfiles}></DownloadTable>
                </Modal.Body>
            </Modal>
        </>
    );
}