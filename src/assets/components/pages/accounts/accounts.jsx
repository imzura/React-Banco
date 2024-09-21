import React, { useState } from "react";
import { Container, Button } from 'react-bootstrap';
import AccountsTable from "./accountsTable";
import { GetAccounts } from "../../../hooks/apiAccessAccounts/useGetAccounts";
import { AddAccount } from "../../../hooks/apiAccessAccounts/usePostAccount";
import { DeleteAccount } from "../../../hooks/apiAccessAccounts/useDeleteAccount";
import AddAccountModal from "./modal/addAccountModal";
import WithdrawMoneyModal from "./functions/withdrawMoneyModal";
import ConsignMoneyModal from "./functions/consignMoneyModal";
import Swal from 'sweetalert2';
import { ConsignAccount } from "../../../hooks/apiAccessAccounts/useConsignAccount";
import { WithdrawAccount } from "../../../hooks/apiAccessAccounts/useWithdrawAccount";


const Accounts = () => {
    const { accounts, loading, error, refetch } = GetAccounts('https://apibanco.onrender.com/api/cuenta')
    const [showAddModal, setShowAddModal] = useState(false);
    const [showConsignModal, setShowConsignModal] = useState(false);
    const [showWithdrawModal, setShowWithdrawModal] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState(null);

    const handleCloseAdd = () => setShowAddModal(false);
    const handleShowAdd = () => setShowAddModal(true);

    const handleCloseWithdraw = () => setShowWithdrawModal(false);
    const handleShowWithdraw = (account) => {
        setSelectedAccount(account);
        setShowWithdrawModal(true);
    };

    const handleCloseConsign = () => setShowConsignModal(false);
    const handleShowConsign = (account) => {
        setSelectedAccount(account);
        setShowConsignModal(true);
    };

    const handleConsign = async ({ amount, accessKey }) => {
        try {
            await ConsignAccount(selectedAccount.numberAccount, amount, accessKey);
            await refetch();
            showAlert('success', '¡Éxito!', 'Dinero consignado exitosamente.');
            handleCloseConsign();
        } catch (error) {
            console.error(error);
            showAlert('error', '¡Error!', 'No se pudo consignar dinero.');
        }
    };

    const handleWithdraw = async ({ amount, accessKey }) => {
        try {
            await WithdrawAccount(selectedAccount.numberAccount, amount, accessKey);
            await refetch();
            showAlert('success', '¡Éxito!', 'Dinero retirado exitosamente.');
            handleCloseWithdraw();
        } catch (error) {
            console.error(error);
            showAlert('error', '¡Error!', 'No se pudo retirar el dinero.');
        }
    };

    const handleAddAccount = async (accountData) => {
        try {
            console.log("Account data being sent:", accountData);  // Log data for debugging
            await AddAccount(accountData);
            await refetch();
            showAlert('success', '¡Éxito!', 'Cuenta agregado exitosamente.');
            handleCloseAdd();
        } catch (error) {
            console.error("Error adding account:", error);
            showAlert('error', '¡Error!', 'No se pudo crear la cuenta.');
        }
    };

    const handleDeleteAccount = async (accountId) => {
        Swal.fire({
            title: '¿Estás seguro que deseas eliminar la cuenta?',
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
                    await DeleteAccount(selectedAccount.accountId);
                    await refetch();
                    Swal.fire('Eliminada', 'La cuenta ha sido eliminada exitosamente.', 'success');
                } catch (error) {
                    console.error(error);
                    Swal.fire('Error', 'No se pudo eliminar la cuenta.', 'error');
                }
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelado', 'La eliminación de la cuenta ha sido cancelada.', 'info');
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
                <h2 className="font-weight-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Listado de Cuentas</h2>
                <Button variant="outline-primary" onClick={handleShowAdd} className="d-flex align-items-center">
                    <i className="bi bi-plus-circle me-1"></i>
                    Crear Cuenta
                </Button>
            </div>

            {error && <p className="text-danger">{error}</p>}
            {loading && <strong className="text-center">Cargando...</strong>}
            <ConsignMoneyModal show={showConsignModal} handleClose={handleCloseConsign} handleConsign={handleConsign} />
            <WithdrawMoneyModal show={showWithdrawModal} handleClose={handleCloseWithdraw} handleWithdraw={handleWithdraw} />
            <AddAccountModal show={showAddModal} handleClose={handleCloseAdd} handleAddAccount={handleAddAccount} />
            <AccountsTable accounts={accounts} onDelete={handleDeleteAccount} onWithdraw={handleShowWithdraw} onConsign={handleShowConsign} />
        </Container>
    )
}

export default Accounts