import React from "react";
import { Link } from "react-router-dom";
import DateTime from "../DateTime";

const CommentItem = ({ comment = {}, setIdView }) => {
    return (
        <div className="comment__container">
            <p className="post__content">{comment.atributes.content}</p>
            <p className="post__footer">
                Posted by
                <Link to={"/"} onClick={() => setIdView(comment.atributes.user.id)}>
                    {" "}
                    {comment.atributes.user.name}{" "}
                </Link>
                on <DateTime date={comment.atributes.created_at} />
            </p>
        </div>
    );
};

export default CommentItem;
