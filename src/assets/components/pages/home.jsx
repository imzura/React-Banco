import React from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <Container fluid className="p-4 bg-light">
            <header className="text-center mb-4">
                <h1 className="display-3" style={{ color: '#8671ff' }}>
                    <i className="bi bi-bank"></i> API Banco
                </h1>
                <p className="lead">¡Bienvenido a nuestro sistema bancario! Aquí puedes interactuar con nuestra API para gestionar clientes, cuentas y más.</p>
            </header>

            <Row className="text-center d-flex justify-content-center">
                <Col md={4}>
                    <Card className="mb-4 shadow-sm border-0">
                        <Card.Body>
                            <Card.Title style={{ color: '#8671ff' }}>Gestión de Clientes</Card.Title>
                            <Card.Text>
                                Administra la información de tus clientes, incluyendo datos personales y más.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="mb-4 shadow-sm border-0">
                        <Card.Body>
                            <Card.Title style={{ color: '#8671ff' }}>Gestión de Cuentas</Card.Title>
                            <Card.Text>
                                Crea y gestiona cuentas de ahorro, realiza transacciones y controla el saldo.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
