import React from 'react';
import './Nav.css'
import logo from './logo.png';
import { useSelector } from 'react-redux';
const Nav = () => {
    const carts = useSelector((state) => state.cart.value);

    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 py-2">
                <div className="container-fluid">
                    <img src={logo} alt="" height="30px" width="30px" />
                    <a className="navbar-brand ms-2" href="/home">Laptop Sell</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#products">Products</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#contacts">Contact</a>
                            </li>
                            <li>
                                <button type="button" className=" btn btn-regular position-relative mx-2 px-5  fw-bold">
                                    Cart
                                    {
                                        carts.length ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                            {carts.length}
                                            <span className="visually-hidden">total Products</span>
                                        </span>
                                            : ""
                                    }

                                </button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;