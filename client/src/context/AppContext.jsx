/* @refresh reset */
// eslint-disable-next-line no-unused-vars
import  {createContext, useState } from "react";
import { AppContext } from "./createAppContext";

const AppContextProvider =(props)=>{
    const[user,setUser] = useState(null);

    const value={
        user, setUser
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;