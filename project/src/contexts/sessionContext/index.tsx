import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IChildrenProvider, ISessionProps, IUser, ILoginUser, IRegisterUser } from "../../interfaces/contexts";
import api from "../../services";


export const RoutesContext = createContext<ISessionProps>({} as ISessionProps);
export const RoutesProvider = ({children}:IChildrenProvider) => {
    const [modal, setModal] = useState<boolean>(false);
    const [user, setUser] = useState<IUser>();
    const navigate = useNavigate();


    async function name1 (data:ILoginUser) {
        localStorage.clear()
        try {
            const response = await api.post("/login", data)
            localStorage.setItem("@Ecommerce:token", response.data.token)
        } catch (error) {
            console.log(error)
        }
    }

    async function name2() {
        try {
            const { data } = await api.get("/user/profile/me")
            setUser(data)
            
        } catch (error) {
            console.log(error)
        }
    }



    
    const singIn = async (data:ILoginUser) => {
        // localStorage.clear()
        // try {
        //     const response = await api.post("/login", data)
        //     localStorage.setItem("@Ecommerce:token", response.data.token)
        //     const { data:res } = await api.get("/user/profile/me")
        //     console.log(res)
        //     setUser(res);
        // } catch (error) {
        //     console.log(error)
        // }
        await name1(data)
        await name2()
    }

    const registerUser = async(data:IRegisterUser) => {
        await api.post("/user",data)
        .then(() => navigate("/session"))
        .catch((error)=> console.log(error))
    }
    
    useEffect( () => {
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
    },[])
    return (
        <RoutesContext.Provider value={{modal, setModal, user, singIn, registerUser}}>
            {children}
        </RoutesContext.Provider>

    )
}