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
    products: IProduct[] | undefined | any
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
    const [products, setProducts] = useState<IProduct[] | undefined >([])

    const singIn = async (data:ILoginUser) => {
        localStorage.clear()
        await api.post("/login",data).then((value) => {localStorage.setItem("@Ecommerce:token",value.data.token)}).catch((error)=> console.log(error))
    }
    
    useEffect( () => {
        async function loadUser() {
            const token = localStorage.getItem("@Ecommerce:token");
            if(token) {
                try {
                    const { data } = await api.get("/user/profile")
                    setUser(data);
                } catch (error) {
                    console.error(error)
                }
            }
        }
        loadUser()
        async function products() {
            await api.get("/product").then((value)=> setProducts(value.data)).catch((error)=> console.log(error))
        };
        products()
    },[])
    return (
        <RoutesContext.Provider value={{modal, setModal, user, singIn, products}}>
            {children}
        </RoutesContext.Provider>

    )
}