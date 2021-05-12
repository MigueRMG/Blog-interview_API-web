import React from "react";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import useUser from "../hooks/useUser";

const Login = () => {
    const [name, setUserName] = useState("");
    const [password, setPassword] = useState("");

    //login=true, signup=false
    const [loginOrCreate, setLoginOrCreate] = useState(true);

    const navigate = useHistory();
    const { login, isLogged, create } = useUser();

    useEffect(() => {
        if (isLogged) navigate.push("/");
    }, [isLogged, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginOrCreate ? login({ name, password }) : create({ name, password });
    };

    return (
        <div className="login__container">
            <Nav justify variant="tabs">
                <Nav.Item>
                    <Nav.Link
                        onClick={() => setLoginOrCreate(true)}
                        className={loginOrCreate ? "active btn__signup" : "btn__signup"}
                        eventKey="link-1"
                    >
                        Login
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => setLoginOrCreate(false)}
                        className={!loginOrCreate ? "active btn__signup" : "btn__signup"}
                        eventKey="link-2"
                    >
                        Signup
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            <Form className="form__container form__container--login" onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label className="form__label">Username</Form.Label>
                    <Form.Control
                        className="form__custom"
                        type="text"
                        placeholder="Enter username"
                        onChange={(e) => setUserName(e.target.value)}
                        value={name}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="form__label">Password</Form.Label>
                    <Form.Control
                        className="form__custom"
                        type="password"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </Form.Group>

                <div className="btn__container">
                    <Button className="btn__custom btn__form btn__login" variant="primary" type="submit">
                        Next &rArr;
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Login;
