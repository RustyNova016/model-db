import {Table} from "react-bootstrap";
import Model_file, {Model_file_response} from "../../database/model_file";
import Link from "next/link";

export interface DownloadTableParams {
    modelfiles: Model_file_response[];
}

export function DownloadTable(props: DownloadTableParams) {
    return <>
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Version</th>
                <th>Type</th>
                <th>Créer le</th>
                <th>Mis a jour le</th>
                <th>telecharger</th>
            </tr>
            </thead>
            <tbody>
            {props.modelfiles.map((file, index) => {
                return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{file.name}</td>
                    <td>{file.version}</td>
                    <td>{file.type}</td>
                    <td>{file.createdAt?.toDateString()}</td>
                    <td>{file.updatedAt?.toDateString()}</td>
                    <td> <Link href={file.link}>{file.link}</Link></td>
                </tr>
            })}
            </tbody>
        </Table>
    </>
}