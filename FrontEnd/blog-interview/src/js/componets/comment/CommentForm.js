import React from "react";
import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import useUser from "../../hooks/useUser";
import Context from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";

const CommentForm = ({ addComment, post_id }) => {
    const { user_id } = useContext(Context);
    const { isLogged } = useUser();

    const [content, setContent] = useState("");
    const navigate = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        !isLogged && navigate.push("/login");
        addComment({ content, user_id, post_id });
        setContent("");
    };

    return (
        <Form className="form__container" onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="form__label">Comment:</Form.Label>
                <Form.Control
                    className="textArea__custom  textArea__custom--comment form__custom"
                    type="text"
                    as="textarea"
                    rows={6}
                    placeholder="Write here ..."
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    required
                />
            </Form.Group>
            <div className="btn__container">
                <Button className="btn__custom btn__form" variant="primary" type="submit"></Button>
            </div>
        </Form>
    );
};

export default CommentForm;
