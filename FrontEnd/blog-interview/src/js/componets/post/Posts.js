import React from "react";
import PostItem from "./PostItem";
import List from "../List";
import { useState } from "react";

import ButtonRedirect from "../ButtonRedirect";

const Posts = ({ posts, setIdView, loading }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const postsPerPage = 10;

    const postFilter = () =>
        posts.filter((post) => {
            if (searchTerm === "") {
                return post;
            } else if (
                post.atributes.title.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.atributes.user.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
            ) {
                return post;
            }
        });

    const displayPosts = (post, index) => <PostItem key={index} post={post} setIdView={setIdView} loading={loading} />;

    return (
        <>
            <ButtonRedirect direction="/posts/form"></ButtonRedirect>
            <List
                render={displayPosts}
                setSearchTerm={setSearchTerm}
                elementsPerPage={postsPerPage}
                arrFilter={postFilter}
                loading={loading}
            ></List>
        </>
    );
};

export default Posts;
