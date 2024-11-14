import { createContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null)
    
    const signup = (user) =>{

    }
    return(
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}