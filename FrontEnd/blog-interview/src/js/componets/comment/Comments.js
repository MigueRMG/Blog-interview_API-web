import React from "react";
import CommentItem from "./CommentItem";
import List from "../List";

const Comments = ({ comments, setIdView, loading }) => {
    const commentsPerPage = 10;

    const commentFilter = () => comments;

    const displayComments = (comment, index) => <CommentItem key={index} comment={comment} setIdView={setIdView} />;

    return (
        <div className="comments__container">
            <List render={displayComments} elementsPerPage={commentsPerPage} arrFilter={commentFilter} isSearch={false}></List>
        </div>
    );
};

export default Comments;
