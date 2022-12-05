import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IChildrenProvider, ISessionProps, IUser, ILoginUser, IRegisterUser } from "../../interfaces/contexts";
import api from "../../services";


export const RoutesContext = createContext<ISessionProps>({} as ISessionProps);
export const RoutesProvider = ({children}:IChildrenProvider) => {
    const [modal, setModal] = useState<boolean>(false);
    const [user, setUser] = useState<IUser>();
    const [button, setButton] = useState<boolean>(false)
    const navigate = useNavigate();


    
    const singIn = async (data:ILoginUser) => {
        try {
            const response = await api.post("/login", data)
            localStorage.setItem("@Ecommerce:token", response.data.token)
            const { data:res } = await api.get("/user/profile/me")
            setUser(res)
            setModal(false)
            navigate("")
        } catch (error) {
            console.log(error)
        }
        
    }

    const registerUser = async(data:IRegisterUser) => {
        await api.post("/user",data)
        .then(() => navigate("/session"))
        .catch((error)=> console.log(error))
    }
    
    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem("@Ecommerce:token");
            if(token) {
                try {
                    const { data } = await api.get("/user/profile/me")
                    setUser(data);
                } catch (error) {
                    console.error(error)
                }
            }
        }
        loadUser()
    },[user])
    return (
        <RoutesContext.Provider value={{modal, setModal, user, singIn, registerUser , button, setButton}}>
            {children}
        </RoutesContext.Provider>

    )
}