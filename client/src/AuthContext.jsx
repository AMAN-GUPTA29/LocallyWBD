import React,{useState,createContext,useContext} from "react";
import Cookies from 'universal-cookie';
const cookie = new Cookies();
const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export const AuthProvider = (props)=>{
    const [authUserToken,setAuthUserToken] = useState(null);
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const login = (userData) => {
        setAuthUserToken(userData);
        cookie.set("TOKEN",userData);
        setIsLoggedIn(true);
      };
    
      const logout = () => {
        setAuthUserToken(null);
        setIsLoggedIn(false);
        cookie.remove("TOKEN")
      };

    const value = {
        login,
        authUserToken,
        setAuthUserToken,
        isLoggedIn,
        setIsLoggedIn,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )

}