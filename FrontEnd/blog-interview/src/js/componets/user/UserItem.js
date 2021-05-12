import React from "react";
import InfoBox from "../InfoBox";

const UserItem = ({ user }) => {
    return (
        <div className="user__container">
            <h2 className="user__name">{user.atributes.name}</h2>
            <InfoBox name="Posts Made" cant={user.atributes.cantPosts} />
            <InfoBox name="Commments Received" cant={user.atributes.cantComments} />
        </div>
    );
};

export default UserItem;
