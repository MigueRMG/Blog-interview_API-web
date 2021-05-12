import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <div className="header__container">
            <NavBar />
            <Jumbotron fluid>
                <Container className="header__title">
                    <h1>Public Blog</h1>
                    <p>The only place in the world where you find the truth.</p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Header;
