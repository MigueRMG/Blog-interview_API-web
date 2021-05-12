import { ENDPOINT } from "../../constants";

export default function create({ name, password }) {
    return fetch(`${ENDPOINT}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
    })
        .then((res) => {
            if (!res.ok) throw new Error("Response is Not ok");
            return res.json();
        })
        .then((res) => {});
}
