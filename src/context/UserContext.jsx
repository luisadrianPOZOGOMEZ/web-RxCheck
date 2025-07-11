import { createContext, useState } from "react";

export const UserContext = createContext({})

export default function UserContextProvider({ children }){
    const [isLogged, setisLogged] = useState(false)
    // const [user, setUser] = useState({})

    return(
        <UserContext.Provider value={{ isLogged, setisLogged}}>
            {children}
        </UserContext.Provider>
    )
}
