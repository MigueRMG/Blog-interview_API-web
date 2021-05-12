import React, { useState } from "react";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
    const [user_id, setUserId] = useState(() => window.sessionStorage.getItem("user_id"));

    return <Context.Provider value={{ user_id, setUserId }}>{children}</Context.Provider>;
}

export default Context;
