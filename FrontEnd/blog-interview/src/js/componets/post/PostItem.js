import React from "react";
import { Link } from "react-router-dom";
import DateTime from "../DateTime";

const PostItem = ({ post = {}, setIdView = "", fullContent = false }) => {
    const postView = `/posts/${post.id}`;

    return (
        <div className="post__container">
            <h1 className="post__title">
                {fullContent ? (
                    post.atributes.title
                ) : (
                    <Link
                        to={postView}
                        onClick={() => {
                            setIdView(post.id);
                            window.scrollTo(0, 0);
                        }}
                    >
                        {post.atributes.title}
                    </Link>
                )}
            </h1>
            <p className={!fullContent && "post__content"}>{post.atributes.content}</p>
            <p className="post__footer">
                Posted by <span className="span__name">{post.atributes.user.name}</span> on <DateTime date={post.atributes.created_at} />
            </p>
        </div>
    );
};

export default PostItem;
