import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import NavLogin from "./NavLogin";

const NavBar = () => {
    return (
        <Navbar className="nav__container" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                <Nav.Item className="nav__item">
                    <Link className="nav__link" to="/">
                        Posts
                    </Link>
                </Nav.Item>
                <Nav.Item className="nav__item">
                    <Link className="nav__link" to="/users">
                        Users
                    </Link>
                </Nav.Item>
                <Nav.Item className="nav__item nav__item--login">
                    <NavLogin />
                </Nav.Item>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
