import { createContext, useEffect, useState } from "react";

import { ReactNode } from "react"
import api from "../../services";

export interface IChildrenProvider {
    children: ReactNode
}
interface test {
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    user: IUser | undefined
    singIn: (data: ILoginUser) => void
}
interface IUser {
    id: string
    name: string
    email: string
    password: string
    isActive: boolean
    isAdm: boolean
    image_url: string
    createdAt: string
    updatedAt: string
}
interface ILoginUser {
    email: string
    password: string
}

interface ICategorie {
    name: string
    id: string
    isActive: boolean
    createdAt: string
    updatedAt: string
}
export interface IProduct {
    name: string
    model: string
    bar_code: string
    description?: string
    price: number
    iventory: number
    isPromotion: boolean
    categorie: ICategorie
    id: string
    isActive: boolean
    image_url: string
    createdAt: string
    updatedAt: string

}
export const RoutesContext = createContext<test>({} as test);
export const RoutesProvider = ({children}:IChildrenProvider) => {
    const [modal, setModal] = useState<boolean>(false);
    const [user, setUser] = useState<IUser>();

    const singIn = async (data:ILoginUser) => {
        localStorage.clear()
        await api.post("/login",data).then((value) => {localStorage.setItem("@Ecommerce:token",value.data.token)}).catch((error)=> console.log(error))
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
    })
    return (
        <RoutesContext.Provider value={{modal, setModal, user, singIn}}>
            {children}
        </RoutesContext.Provider>

    )
}