import React from "react";
import Comments from "../comment/Comments";
import CommentForm from "../comment/CommentForm";
import PostItem from "./PostItem";

const Post = ({ post, loading, post_id, addComment }) => {
    return (
        <>
            {!loading && post !== undefined && (
                <>
                    <PostItem key={post.id} post={post} fullContent={true} />
                    <CommentForm addComment={addComment} post_id={post_id}></CommentForm>
                    <Comments comments={post.atributes.comments} idView={post_id} loading={loading}></Comments>
                </>
            )}
        </>
    );
};

export default Post;
