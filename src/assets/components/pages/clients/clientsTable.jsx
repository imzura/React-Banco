import React from "react";
import { Table, Button } from 'react-bootstrap';

const ClientsTable = ({ clients, onDelete, onEdit }) => {
    return (
        <Table striped bordered hover className="custom-table">
            <thead className="table-header">
                <tr>
                    <th>Nombre</th>
                    <th>Documento</th>
                    <th>Celular</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(clients) && clients.map((client) => (
                    <tr key={client._id} className="text-center">
                        <td>{client.nameComplete}</td>
                        <td>{client.document}</td>
                        <td>{client.phone}</td>
                        <td>{new Date(client.birthDate).toLocaleDateString()}</td>
                        <td>
                            <Button
                                variant="danger"
                                onClick={() => onDelete(client._id)}
                                className="p-0"
                                style={{ border: 'none', background: 'none' }}
                            >
                                <i className="bi bi-trash" style={{ fontSize: '1.3rem', color: 'red' }}></i>
                            </Button>
                            <Button
                                variant="warning"
                                onClick={() => onEdit(client)} // Cambia la función a onUpdate
                                className="p-0 ms-3"
                                style={{ border: 'none', background: 'none' }}
                            >
                                <i className="bi bi-pencil-square" style={{ fontSize: '1.3rem', color: '#4A90E2' }}></i>
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ClientsTable;
