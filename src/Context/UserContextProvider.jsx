import React, { useState } from "react";

import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(null)
    return (
    <UserContext.Provider value={{user, setUser}}>  // value allows to reacd and write the data
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
