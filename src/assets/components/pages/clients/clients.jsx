import React, { useState } from "react";
import { Container, Button } from 'react-bootstrap';
import ClientsTable from "./clientsTable";
import { GetClients } from "../../../hooks/apiAccessClient/useGetClients";
import { AddClient } from "../../../hooks/apiAccessClient/usePostClient";
import { DeleteClient } from "../../../hooks/apiAccessClient/useDeleteClient";
import AddClientModal from "./modal/addClientModal";
import UpdateClientModal from "./modal/updateClientModal";
import Swal from 'sweetalert2';

const Clients = () => {
    const { clients, loading, error, refetch } = GetClients('https://apibanco.onrender.com/api/cliente');
    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);

    const handleCloseAdd = () => setShowAddModal(false);
    const handleShowAdd = () => setShowAddModal(true);

    const handleAddClient = async (clientData) => {
        try {
            await AddClient(clientData);
            await refetch();
            showAlert('success', '¡Éxito!', 'Cliente agregado exitosamente.');
            handleCloseAdd();
        } catch (error) {
            console.error(error);
            showAlert('error', '¡Error!', 'No se pudo agregar el cliente.');
        }
    };

    const handleCloseUpdate = () => {
        setShowUpdateModal(false);
        setSelectedClient(null);
    };

    const handleShowUpdate = (clientId) => {
        setSelectedClient(clientId);
        setShowUpdateModal(true);
    };

    const handleDeleteClient = async (clientId) => {
        Swal.fire({
            title: '¿Estás segura de que deseas eliminar este cliente?',
            text: "No podrás revertir esta acción.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await DeleteClient(clientId);
                    await refetch();
                    Swal.fire('Eliminado', 'El cliente ha sido eliminado exitosamente.', 'success');
                } catch (error) {
                    console.error(error);
                    Swal.fire('Error', 'No se pudo eliminar el cliente.', 'error');
                }
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelado', 'La eliminación del cliente ha sido cancelada.', 'info');
            }
        });
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
        <Container>
            <div className="d-flex justify-content-between mb-2 mt-3 align-items-center">
                <h2 className="font-weight-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Listado de Clientes</h2>
                <Button variant="outline-primary" onClick={handleShowAdd} className="d-flex align-items-center">
                    <i className="bi bi-plus-circle me-1"></i>
                    Registrar Cliente
                </Button>
            </div>

            {error && <p className="text-danger">{error}</p>}
            {loading && <strong className="text-center">Cargando...</strong>}
            <ClientsTable clients={clients} onDelete={handleDeleteClient} onEdit={handleShowUpdate} />
            <AddClientModal show={showAddModal} handleClose={handleCloseAdd} handleAddClient={handleAddClient} />
            <UpdateClientModal show={showUpdateModal} handleClose={handleCloseUpdate} client={selectedClient} onUpdate={refetch} />
        </Container>
    );
};

export default Clients;
