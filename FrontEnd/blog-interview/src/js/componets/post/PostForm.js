import React from "react";
import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Context from "../../contexts/UserContext";

const PostForm = ({ addPost }) => {
    const { user_id } = useContext(Context);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost({ title, content, user_id });
        setTitle("");
        setContent("");
    };

    return (
        <Form className="form__container" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
                <Form.Label className="form__label">Title:</Form.Label>
                <Form.Control
                    autocomplete="off"
                    className="form__custom"
                    type="text"
                    size="lg"
                    placeholder="Write here ..."
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="form__label">Content:</Form.Label>
                <Form.Control
                    className="textArea__custom form__custom"
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

export default PostForm;
