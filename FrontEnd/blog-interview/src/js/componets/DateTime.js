import React from "react";

const DateTime = ({ date }) => {
    function swap(arr, p1, p2) {
        let swapValue = arr[p1];
        arr[p1] = arr[p2];
        arr[p2] = swapValue;
    }

    const buildDate = () => {
        let arrString = [];
        let iArrString = 0;
        let pos = 0;

        for (let i = 0; i < date.length; i++) {
            if (date[i] === "-" || date[i] === ":" || date[i] === "T") {
                arrString[iArrString] = date.slice(pos, i);
                iArrString++;
                pos = i + 1;
            }
        }

        swap(arrString, 0, 2);

        return [...arrString[0], "/", ...arrString[1], "/", ...arrString[2], " ", ...arrString[3], ":", ...arrString[4]];
    };

    return <span>{buildDate()}</span>;
};

export default DateTime;
