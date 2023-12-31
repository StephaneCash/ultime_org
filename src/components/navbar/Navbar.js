import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import $ from "jquery"
import logo from "../../assets/images/logo.png"
import { FaHandsHelping } from "react-icons/fa"

const Navbar = () => {

    $(document).ready(function () {
        $(document).on('click', '.dropdown-menu', function (e) {
            e.stopPropagation();
        });
    });

    return (
        <div className='mainNavbar'>
            <div className='logo'>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className='contentNav'>
                <div className='row1'>
                    <ul>
                        <li>Recrutement</li>
                        <li>
                            <a href="#actus">
                                Actus
                            </a>
                        </li>
                        <li>
                            <Link to="/publications">
                                Publications
                            </Link>
                        </li>
                        <li>Espace presse</li>
                        <li>Transparence financière</li>
                        <li>Espace donateur</li>
                    </ul>
                </div>
                <div className='navBar'>
                    <nav className="navbar navbar-expand-lg">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="main_nav">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown ">
                                    <Link className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                                        Notre engagement pour l’enfance en danger
                                    </Link>
                                    <div className="dropdown-menu  dropdown-large data1">
                                        <div className="d-flex">
                                            <div className='col-md-4'>
                                                <h6 className="title">Les droits de l'enfant</h6>
                                                Pas de data
                                            </div>
                                            <div className='col-md-4'>
                                                <h6 className="title">La protection de l'enfant en RDC</h6>
                                                Pas de data
                                            </div>

                                            <div className='col-md-4'>
                                                <h6 className="title">La formationde de professionnels de l'enfance</h6>
                                                Pas de data
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> Nos actions </Link>
                                    <div className="dropdown-menu  dropdown-large " style={{ width: "200px", borderRadius: 0, marginTop: "15px", padding: "10px" }}>
                                        <Link>En savoir plus...</Link>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> Nous soutenir </Link>
                                    <div className="dropdown-menu  dropdown-large " style={{ width: "200px", borderRadius: 0, marginTop: "15px", padding: "10px" }}>
                                        <Link>En savoir plus...</Link>
                                    </div>
                                </li>

                                <li className="nav-item ">
                                    <Link to="/a-propos" className="nav-link " style={{ fontWeight: "bold" }}> Nous connaitre </Link>
                                </li>

                                <div className='rowDisplay'>
                                    <li>Recrutement</li>
                                    <li>
                                        <a href="#actus">
                                            Actus
                                        </a>
                                    </li>
                                    <Link to="/publications">
                                        Publications
                                    </Link>
                                    <li>Espace presse</li>
                                    <li>Transparence financière</li>
                                    <li>Espace donateur</li>
                                </div>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            <div className='btnDon'>
                <button className='btn'> <span>Faire un don</span> <FaHandsHelping /> </button>
            </div>
        </div>
    )
}

export default Navbar