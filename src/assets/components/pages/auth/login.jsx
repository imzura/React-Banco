import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useHookAccess from "../../../hooks/hookAccess";
import { UseLoginContext } from "../../context/userLoginContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

const Login = () => {
    const navigate = useNavigate();
    const { onResetForm } = useHookAccess();
    const userStorage = JSON.parse(localStorage.getItem('user'));
    const { loginAccess } = useContext(UseLoginContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        if (!userStorage) {
            showAlert('error', '¡Error!', 'El usuario no existe.');
        } else if (email === userStorage.email && password === userStorage.password) {
            loginAccess(userStorage);
            showAlert('success', '¡Éxito!', 'Inicio de sesión exitoso.', () => {
                navigate('/clients', { replace: true });
            });
        } else {
            showAlert('error', '¡Error!', 'Usuario o contraseña incorrecto.');
        }
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
                        style={{ width: "150px" }}
                    />
                    <h2 className="text-center mb-4">Inicio de Sesión</h2>
                    <form onSubmit={onLogin}>
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
                        <div className="text-center mb-3">
                            <button className="btn btn-outline-primary w-100 d-flex justify-content-center align-items-center">
                                <i className="bi bi-box-arrow-in-right me-1"></i>
                                Acceder
                            </button>
                        </div>
                    </form>
                    <div className="mt-3">
                        <span>¿No tienes cuenta? </span>
                        <Link className="nav-register" to='/register'>Regístrate aquí</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
