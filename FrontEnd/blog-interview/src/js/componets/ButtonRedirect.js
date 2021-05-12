import React from "react";
import { Button } from "react-bootstrap";
import useUser from "../hooks/useUser";
import { useHistory } from "react-router-dom";

const ButtonRedirect = ({ direction }) => {
    const { isLogged } = useUser();
    const navigate = useHistory();

    return (
        <div className="btn__container">
            <Button
                className="btn__custom"
                variant="outline-danger"
                onClick={() => {
                    isLogged ? navigate.push(direction) : navigate.push("/login");
                }}
            ></Button>
        </div>
    );
};

export default ButtonRedirect;
