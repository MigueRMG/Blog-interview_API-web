import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContextProvider } from "./js/contexts/UserContext";
import { ENDPOINT } from "./constants";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import Spinner from "react-bootstrap/Spinner";
import Footer from "./js/componets/Footer";
import Header from "./js/componets/Header";
import Posts from "./js/componets/post/Posts";
import Post from "./js/componets/post/Post";
import Users from "./js/componets/user/Users";
import Login from "./js/componets/Login";
import axios from "axios";
import PostForm from "./js/componets/post/PostForm";

function App() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [post, setPost] = useState();
    const [loading, setLoading] = useState(true);
    const [post_id, setIdView] = useState("1");
    const navigate = useHistory();

    const postView = `/posts/${post_id}`;

    const getUsers = () => {
        axios.get(`${ENDPOINT}/users`).then((response) => {
            const { data } = response.data;
            setUsers(data.reverse());
        });
    };

    const getPost = () => {
        axios.get(`${ENDPOINT}/posts/${post_id}`).then((response) => {
            const { data } = response.data;
            data.atributes.comments = data.atributes.comments.reverse();
            setPost(data);
        });
    };

    const getPosts = () => {
        axios.get(`${ENDPOINT}/posts`).then((response) => {
            const { data } = response.data;
            setPosts(data.reverse());
        });
    };

    const addPost = ({ title, content, user_id }) => {
        axios
            .post(`${ENDPOINT}/posts`, {
                title: title,
                content: content,
                user_id: user_id,
            })
            .then(function (response) {
                setPosts([response.data.data, ...posts]);
                navigate.push("/");
            })
            .catch(function (error) {
                toast.error("Existing content");
            });
    };

    const addComment = ({ content, user_id, post_id }) => {
        axios
            .post(`${ENDPOINT}/comments`, {
                content: content,
                user_id: user_id,
                post_id: post_id,
            })
            .then(function (response) {
                const comments = [response.data.data, ...post.atributes.comments];
                const id = post.id;
                const atributes = {
                    title: post.atributes.title,
                    content: post.atributes.content,
                    created_at: post.atributes.created_at,
                    user: post.atributes.user,
                    comments: comments,
                };

                setPost({ id: id, atributes: atributes });
            })
            .catch(function (error) {});
    };

    useEffect(() => {
        setLoading(true);
        getPosts();
        getUsers();
        setLoading(false);
    }, []);

    useEffect(() => {
        getPost();
    }, [post_id]);

    return (
        <UserContextProvider>
            <Router>
                <div className="section__header">
                    <Header />
                    <ToastContainer />
                </div>

                <div className="section">
                    <Switch>
                        <Route path="/" exact>
                            <Posts posts={posts} setIdView={setIdView} loading={loading}></Posts>
                        </Route>
                        <Route path={postView} exact>
                            <Post post={post} loading={loading} post_id={post_id} addComment={addComment}></Post>
                        </Route>
                        <Route path="/posts/form" exact>
                            <PostForm addPost={addPost}></PostForm>
                        </Route>

                        <Route path="/users" exact>
                            <Users users={users} loading={loading}></Users>
                        </Route>
                        <Route path="/login" exact>
                            <Login></Login>
                        </Route>
                    </Switch>

                    {loading === true ? <Spinner animation="border" variant="danger" /> : ""}
                </div>

                <Footer />
            </Router>
        </UserContextProvider>
    );
}

export default App;
