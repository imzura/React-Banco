import React, { useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';

const AddClientModal = ({ show, handleClose, handleAddClient }) => {
    const [nameComplete, setNameComplete] = useState("");
    const [document, setDocument] = useState("");
    const [phone, setPhone] = useState("");
    const [birthDate, setBirthDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddClient({ nameComplete, document, phone, birthDate });
        setNameComplete("");
        setDocument("");
        setPhone("");
        setBirthDate("");
    };

    return (
        <Modal show={show} onHide={handleClose} centered className="custom-modal">
            <Modal.Header closeButton className="bg-light">
                <Modal.Title style={{ color: '#8671ff' }}>Registrar Cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formNameComplete" className="mb-3">
                        <Form.Label>
                            <i className="bi bi-person-fill me-2"></i>
                            Nombre Completo
                        </Form.Label>
                        <Form.Control
                            type="text"
                            value={nameComplete}
                            onChange={(e) => setNameComplete(e.target.value)}
                            placeholder="Ingresa el nombre completo"
                            required
                            className="border-0 rounded-pill shadow-sm"
                        />
                    </Form.Group>
                    <Form.Group controlId="formDocument" className="mb-3">
                        <Form.Label>
                            <i className="bi bi-file-earmark-text me-2"></i>
                            Documento
                        </Form.Label>
                        <Form.Control
                            type="text"
                            value={document}
                            onChange={(e) => setDocument(e.target.value)}
                            placeholder="Ingresa el número de documento"
                            required
                            className="border-0 rounded-pill shadow-sm"
                        />
                    </Form.Group>
                    <Form.Group controlId="formPhone" className="mb-3">
                        <Form.Label>
                            <i className="bi bi-phone-fill me-2"></i>
                            Celular
                        </Form.Label>
                        <Form.Control
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Ingresa el número de celular"
                            required
                            className="border-0 rounded-pill shadow-sm"
                        />
                    </Form.Group>
                    <Form.Group controlId="formBirthDate" className="mb-3">
                        <Form.Label>
                            <i className="bi bi-calendar-fill me-2"></i>
                            Fecha de Nacimiento
                        </Form.Label>
                        <Form.Control
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
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
                        <i className="bi bi-person-plus me-2"></i>
                        Registrar Cliente
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddClientModal;
