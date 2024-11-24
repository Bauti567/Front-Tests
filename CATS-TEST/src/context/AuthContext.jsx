import { Children, createContext, useContext } from "react";
import { useState } from "react";
import { registerRequest } from "../api/auth";

export const AuthContext = createContext()

export const useAuth = () =>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("useAuth must be used within an authProvider")

    }
}

const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const signup = async(user) =>{
        try{
            const res = await registerRequest(values)
            console.log(res)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch(error){
            console.log(error)
        }
    }

    return(
        <AuthContext.Provider value={{
            signup,
            user,
            isAuthenticated,
        }}>
            {children}
        </AuthContext.Provider>
    )
}