import React from "react";
import List from "../List";
import UserItem from "./UserItem";
import { useState } from "react";

const Users = ({ users, loading }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const usersPerPage = 10;

    const userFilter = () =>
        users.filter((user) => {
            if (searchTerm === "") {
                return user;
            } else if (user.atributes.name.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                return user;
            }
        });

    const displayUsers = (user, index) => <UserItem key={index} user={user} />;

    return (
        <List render={displayUsers} setSearchTerm={setSearchTerm} elementsPerPage={usersPerPage} arrFilter={userFilter} loading={loading}></List>
    );
};

export default Users;
