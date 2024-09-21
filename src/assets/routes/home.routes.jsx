import React, { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { UseLoginContext } from "../components/context/userLoginContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeRouters = () => {
    const { userLogin, isLogin, logOut } = useContext(UseLoginContext);

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js'); // Importar Bootstrap JS
    }, []);

    return (
        <>
            <header className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">
                        <img
                            src="https://i.pinimg.com/564x/9b/72/b2/9b72b2e013f833fe4392faa57d9055cc.jpg"
                            className="logo img-fluid"
                            alt="Logo"
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to='/home'>Inicio</Link>
                            </li>
                            {!isLogin && (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://apibanco.onrender.com/" target="_blank" rel="noopener noreferrer">Render</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://github.com/imzura/ApiBanco" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    </li>
                                </>
                            )}
                            {isLogin && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/clients'><i className="bi bi-person mx-1"></i>Clientes</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/accounts'><i className="bi bi-credit-card mx-1"></i>Cuentas</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                        <div className="ms-auto d-flex align-items-center">
                            {!isLogin ? (
                                <Link to="/login" style={{ textDecoration: 'none' }}>
                                <button className="btn btn-outline-primary d-flex align-items-center">
                                        <i className="bi bi-box-arrow-in-right me-1"></i>
                                        Iniciar Sesión
                                    </button>
                            </Link>
                            ) : (
                                <>
                                    <span className="me-4">{userLogin.name}</span>
                                    <button onClick={logOut} className="btn btn-outline-danger d-flex align-items-center">
                                        <i className="bi bi-box-arrow-right me-1"></i>
                                        Salir
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <Outlet />
        </>
    );
};

export default HomeRouters;
