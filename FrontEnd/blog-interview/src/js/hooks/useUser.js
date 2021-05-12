import { useState } from "react";
import Context from "../contexts/UserContext";
import { useContext, useCallback } from "react";
import loginService from "../services/login";
import createService from "../services/createUser";
import { toast } from "react-toastify";

export default function useUser() {
    const { user_id, setUserId } = useContext(Context);
    const [state, setState] = useState({ loading: false, error: false });

    const login = useCallback(
        ({ name, password }) => {
            setState({ loading: true, error: false });
            loginService({ name, password })
                .then((id) => {
                    window.sessionStorage.setItem("user_id", id);
                    setState({ loading: false, error: false });
                    setUserId(id);
                })
                .catch((err) => {
                    window.sessionStorage.removeItem("user_id");
                    toast.error("Invalid Credentials");
                    setState({ loading: false, error: true });
                });
        },
        [setUserId]
    );

    const logout = useCallback(() => {
        window.sessionStorage.removeItem("user_id");
        setUserId(null);
    }, [setUserId]);

    const create = ({ name, password }) => {
        createService({ name, password })
            .then(() => {
                login({ name, password });
            })
            .catch((err) => {
                toast.warning("Username exits");
            });
    };

    return {
        isLogged: Boolean(user_id),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout,
        create,
    };
}
