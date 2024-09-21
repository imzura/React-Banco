import React, { useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';

const WithdrawMoneyModal = ({ show, handleClose, handleWithdraw }) => {
    const [amount, setAmount] = useState(0);
    const [accessKey, setAccessKey] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleWithdraw({ amount, accessKey });
        setAmount("");
        setAccessKey("");
    };

    return (
        <Modal show={show} onHide={handleClose} centered className="custom-modal">
            <Modal.Header closeButton className="bg-light">
                <Modal.Title style={{ color: '#8671ff' }}>Retirar Dinero</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formAmount" className="mb-3">
                        <Form.Label>Monto a Retirar</Form.Label>
                        <Form.Control
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Ingresa el monto"
                            required
                            className="border-0 rounded-pill shadow-sm"
                        />
                    </Form.Group>

                    <Form.Group controlId="formAccessKey" className="mb-3">
                        <Form.Label>Clave de Acceso</Form.Label>
                        <Form.Control
                            type="password"
                            value={accessKey}
                            onChange={(e) => setAccessKey(e.target.value)}
                            placeholder="Ingresa tu clave de acceso"
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
                        Retirar Dinero
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default WithdrawMoneyModal;
