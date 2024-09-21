import React from "react";
import { Table, Button } from 'react-bootstrap';

const AccountsTable = ({ accounts, onDelete, onWithdraw, onConsign }) => {
    return (
        <Table striped bordered hover className="custom-table">
            <thead className="table-header">
                <tr>
                    <th>Documento Cliente</th>
                    <th>Número de cuenta</th>
                    <th>Saldo</th>
                    <th>Fecha de Apertura</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(accounts) && accounts.map((account) => (
                    <tr key={account._id} className="text-center">
                        <td>{account.clientDocument}</td>
                        <td>{account.numberAccount}</td>
                        <td>${account.balance}</td>
                        <td>{new Date(account.openingDate).toLocaleDateString()}</td>
                        <td>
                            <Button
                                variant="danger"
                                onClick={() => onDelete(account._id)}
                                className="p-0"
                                style={{ border: 'none', background: 'none' }}
                            >
                                <i className="bi bi-trash" style={{ fontSize: '1.3rem', color: 'red' }}></i>
                            </Button>
                            <Button
                                variant="primary"
                                onClick={() => onWithdraw(account)}
                                className="p-0 ms-3"
                                style={{ border: 'none', background: 'none' }}
                            >
                                <i className="bi bi-cash" style={{ fontSize: '1.3rem', color: '#2aaf35' }}></i>
                            </Button>
                            <Button
                                variant="primary"
                                onClick={() => onConsign(account)}
                                className="p-0 ms-3"
                                style={{ border: 'none', background: 'none', color: '#007bff' }}
                            >
                                <i className="bi bi-plus-circle" style={{ fontSize: '1.3rem', color: '#8671ff' }}></i>
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default AccountsTable;
