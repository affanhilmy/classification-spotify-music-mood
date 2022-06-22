import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Table } from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

// start backend:
// cd src/backend
// nodemon index
 
const DatasetList = () => {
    const [Dataset, setDataset] = useState([]);
    
    useEffect(() => {
        getDataset();
    }, []);
 
    const getDataset = async () => {
        const response = await axios.get('http://localhost:5000/dataset');
        console.log(response);
        setDataset(response.data);
    }
 
    const deleteDataset = async (id) => {
        await axios.delete(`http://localhost:5000/dataset/${id}`);
        getDataset();
    }

    const actionDelete = (id) => {
        return <Button onClick={ () => deleteDataset(id) } variant="danger">Delete</Button>
    }
 
    return (
        <React.Fragment>
            <div>
                <Link to="/selectMusic" className="button is-primary mt-2"><Button variant='info'>Add New</Button></Link>
                <hr/>
                <BootstrapTable data={ Dataset } search={ true } striped hover>
                    <TableHeaderColumn dataField='title' isKey={true} dataSort={ true } width='300' >Title</TableHeaderColumn>
                    <TableHeaderColumn dataField='artist' dataSort={ true } width='200'>Artist</TableHeaderColumn>
                    <TableHeaderColumn dataField='dancebility' dataSort={ true } width='150'>Danceability</TableHeaderColumn>
                    <TableHeaderColumn dataField='tempo' dataSort={ true } width='100'>Tempo</TableHeaderColumn>
                    <TableHeaderColumn dataField='energy' dataSort={ true } width='100'>Energy</TableHeaderColumn>
                    <TableHeaderColumn dataField='valance' dataSort={ true } width='120'>Valence</TableHeaderColumn>
                    <TableHeaderColumn dataField='mood' dataSort={ true } width='100'>Mood</TableHeaderColumn>
                    <TableHeaderColumn dataField='id' dataSort={ false } dataFormat={ actionDelete } width='100'> </TableHeaderColumn>
                </BootstrapTable>
                
            </div>
        </React.Fragment>
    )
}
 
export default DatasetList