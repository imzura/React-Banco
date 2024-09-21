import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import { UpdateClient } from "../../../../hooks/apiAccessClient/usePutClient";
import Swal from 'sweetalert2';

const UpdateClientModal = ({ show, handleClose, client, onUpdate }) => {
    const [nameComplete, setNameComplete] = useState("");
    const [document, setDocument] = useState("");
    const [phone, setPhone] = useState("");
    const [birthDate, setBirthDate] = useState("");

    useEffect(() => {
        if (client) {
            setNameComplete(client.nameComplete);
            setDocument(client.document);
            setPhone(client.phone);
            setBirthDate(client.birthDate ? new Date(client.birthDate).toISOString().split('T')[0] : "");
        }
    }, [client]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedClient = { nameComplete, document, phone, birthDate };

        try {
            await UpdateClient(client._id, updatedClient);
            await onUpdate(); // Refetch para actualizar la lista de clientes
            handleClose();
            showAlert('success', '¡Éxito!', 'Cliente actualizado exitosamente.');
        } catch (error) {
            console.error('Error updating client:', error);
            showAlert('error', '¡Error!', 'No se pudo actualizar el cliente.');
        }
    };

    const showAlert = (icon, title, text) => {
        Swal.fire({
            icon,
            title,
            text,
            confirmButtonText: 'Aceptar',
            customClass: {
                confirmButton: 'btn btn-primary'
            }
        });
    };

    return (
        <Modal show={show} onHide={handleClose} centered className="custom-modal">
            <Modal.Header closeButton className="bg-light">
                <Modal.Title style={{ color: '#8671ff' }}>Actualizar Cliente</Modal.Title>
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
                        style={{ fontWeight: '600', backgroundColor: '#8671ff', border: 'none'}}
                    >
                        <i className="bi bi-pencil-square me-2"></i>
                        Actualizar Cliente
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default UpdateClientModal;
