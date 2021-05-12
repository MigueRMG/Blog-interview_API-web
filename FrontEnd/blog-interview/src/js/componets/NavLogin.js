import React from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

const NavLogin = () => {
    const { isLogged, logout } = useUser();

    return (
        <>
            {isLogged ? (
                <Link className="nav__link" onClick={logout}>
                    Logout
                </Link>
            ) : (
                <Link className="nav__link" to="/login">
                    Login
                </Link>
            )}
        </>
    );
};

export default NavLogin;
