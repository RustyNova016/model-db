import {Table} from "react-bootstrap";
import Model_file, {Model_file_response} from "../../database/model_file";

export interface DownloadTableParams {
    modelfiles: Model_file_response[];
}

export function DownloadTable(props: DownloadTableParams) {
    return <>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Model Name</th>
                <th>Version</th>
                <th>File type</th>
                <th>Created at</th>
                <th>Updated at</th>
                <th>Download</th>
            </tr>
            </thead>
            <tbody>
            {props.modelfiles.map((file, index) => {
                return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{file.name}</td>
                    <td>{file.version}</td>
                    {/*<td>{file.file_type}</td>
                    <td>{file.created_at}</td>
                    <td>{file.updated_at}</td>
                    <td>{file.file_type}</td>*/}
                </tr>
            })}
            </tbody>
        </Table>
    </>
}