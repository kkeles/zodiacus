import React from 'react';
import zlogo from "./zlogo.png"


const NavMenu = () => {
    return (
        <React.Fragment>
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light h-100 ml-1">
                    <a className="navbar-brand" href="/">
                        <img src={zlogo} width="45" height="45" className="d-inline-block align-middle" alt="" />
                        Zodiacus
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-evenly" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto d-flex">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <form className="form-inline">
                        <button type="button" className="btn btn-outline-primary mx-3">Login</button>
                        <button type="button" className="btn btn-secondary mr-3">Register</button>
                    </form>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default NavMenu;