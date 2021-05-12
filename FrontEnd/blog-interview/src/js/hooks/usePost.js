import { useState } from "react";
import Context from "../contexts/UserContext";
import { useContext } from "react";
import createPost from "../services/createPost";

export default function usePost() {
    const { user_id } = useContext(Context);
    const [post, setPost] = useState({});
    const [state, setState] = useState({ loading: false, error: false });

    const create = ({ title, content }) => {
        setState({ loading: true, error: false });

        createPost({ title, content, user_id })
            .then((res) => {
                setState({ loading: false, error: false });

                setPost(res);
            })
            .catch((err) => {
                setState({ loading: false, error: true });
            });
    };

    return {
        create,
        returnPost: post,
        isLoading: state.loading,
        hasError: state.error,
    };
}
