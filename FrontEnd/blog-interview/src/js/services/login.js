import { ENDPOINT } from "../../constants";
import { toast } from "react-toastify";

export default function login({ name, password }) {
    return fetch(`${ENDPOINT}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
    })
        .then((res) => {
            if (!res.ok) throw new Error("Response is Not ok");
            return res.json();
        })
        .then((res) => {
            toast.success(`Welcome ${res.user.name}`);
            return res.user.id;
        });
}
