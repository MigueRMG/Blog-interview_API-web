import { ENDPOINT } from "../../constants";

export default function createPost({ title, content, user_id }) {
    return fetch(`${ENDPOINT}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, user_id }),
    })
        .then((res) => {
            if (!res.ok) throw new Error("Response is Not ok");
            return res.json();
        })
        .then((res) => {
            return res.data;
        });
}
