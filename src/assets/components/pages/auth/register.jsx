import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useHookAccess from "../../../hooks/hookAccess";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

const Register = () => {
    const navigate = useNavigate();
    const { onInputChange, onResetForm } = useHookAccess();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onRegister = (e) => {
        e.preventDefault();
        onInputChange({ name, email, password });
        
        showAlert('success', '¡Éxito!', 'Registro completado exitosamente.', () => {
            navigate('/login', { replace: true });
        });
        
        onResetForm();
    };

    const showAlert = (icon, title, text, onClose) => {
        Swal.fire({
            icon,
            title,
            text,
            confirmButtonText: 'Aceptar',
            customClass: {
                confirmButton: 'btn btn-primary'
            }
        }).then(onClose);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow" style={{ width: '400px' }}>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <img
                        src="https://i.pinimg.com/564x/9b/72/b2/9b72b2e013f833fe4392faa57d9055cc.jpg"
                        alt="Logo"
                        className="img-fluid mb-3 rounded-circle"
                        style={{ width: "100px" }}
                    />
                    <h2 className="text-center mb-4">Registro</h2>
                    <form onSubmit={onRegister}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button className="btn btn-primary w-100 d-flex justify-content-center align-items-center">
                            Registrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
