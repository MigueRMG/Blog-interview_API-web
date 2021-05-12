import React from "react";

const InfoBox = ({ name, cant }) => {
    return (
        <div className="box__container">
            <div className="box__cant">{cant}</div>
            <div className="box__name">{name}</div>
        </div>
    );
};

export default InfoBox;
