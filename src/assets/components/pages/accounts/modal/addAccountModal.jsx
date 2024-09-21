import React, { useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';

const AddAccountModal = ({ show, handleClose, handleAddAccount }) => {
    const [clientDocument, setClientDocument] = useState("");
    const [balance, setBalance] = useState("");
    const [openingDate, setOpeningDate] = useState("");
    const [accessKey, setAccessKey] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddAccount({ clientDocument, balance, openingDate, accessKey });
        setClientDocument("");
        setBalance("");
        setOpeningDate("");
        setAccessKey("");
    };

    return (
        <Modal show={show} onHide={handleClose} centered className="custom-modal">
            <Modal.Header closeButton className="bg-light">
                <Modal.Title style={{ color: '#8671ff' }}>Registrar Cuenta</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formClientDocument" className="mb-3">
                        <Form.Label>
                            <i className="bi bi-person-fill me-2"></i>
                            Documento del Cliente
                        </Form.Label>
                        <Form.Control
                            type="text"
                            value={clientDocument}
                            onChange={(e) => setClientDocument(e.target.value)}
                            placeholder="Ingresa el documento del cliente"
                            required
                            className="border-0 rounded-pill shadow-sm"
                        />
                    </Form.Group>

                    <Form.Group controlId="formBalance" className="mb-3">
                        <Form.Label>
                            <i className="bi bi-cash me-2"></i>
                            Saldo Inicial
                        </Form.Label>
                        <Form.Control
                            type="number"
                            value={balance}
                            onChange={(e) => setBalance(e.target.value)}
                            placeholder="Ingresa el saldo inicial"
                            required
                            className="border-0 rounded-pill shadow-sm"
                        />
                    </Form.Group>

                    <Form.Group controlId="openingDate" className="mb-3">
                        <Form.Label>
                            <i className="bi bi-calendar-fill me-2"></i>
                            Fecha de Apertura
                        </Form.Label>
                        <Form.Control
                            type="date"
                            value={openingDate}
                            onChange={(e) => setOpeningDate(e.target.value)}
                            required
                            className="border-0 rounded-pill shadow-sm"
                        />
                    </Form.Group>

                    <Form.Group controlId="formAccessKey" className="mb-3">
                        <Form.Label>
                            <i className="bi bi-key-fill me-2"></i>
                            Clave de Acceso
                        </Form.Label>
                        <Form.Control
                            type="text"
                            value={accessKey}
                            onChange={(e) => setAccessKey(e.target.value)}
                            placeholder="Ingresa la clave de acceso"
                            required
                            className="border-0 rounded-pill shadow-sm"
                        />
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit"
                        className="mt-3 w-100 rounded-pill shadow-sm"
                        style={{ fontWeight: '600', backgroundColor: '#8671ff', border: 'none' }}
                    >
                        <i className="bi bi-credit-card mx-1"></i>
                        Registrar Cuenta
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddAccountModal;
