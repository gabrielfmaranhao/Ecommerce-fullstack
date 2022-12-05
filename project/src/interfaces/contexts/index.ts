import React, { ReactNode } from "react"
export interface ICategorie {
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
    price: string
    iventory: number
    isPromotion: boolean
    categorie: ICategorie
    id: string
    isActive: boolean
    image_url?: string
    createdAt: string
    updatedAt: string

}
export  interface IProductCart extends IProduct {
    idCart: number
}
export interface IAddProduct {
    name: string
    model: string
    bar_code: string
    description?: string
    price: number
    iventory: number
    image_url?: string
    categorie_name: string
}

export interface IUpdateProduct {
    name?: string
    model?: string
    bar_code?: string
    description?: string
    price?: number
    isPromotion?: boolean
    image_url?: string
    categorie_name?: string

}
export interface IPropsProduct {
    products: IProduct[]
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
    categorie: ICategorie[]
    addProduct: (data:IAddProduct) => void
    addCart: (data: IProduct) => void
    cart: IProductCart[]
    setCart: React.Dispatch<React.SetStateAction<IProductCart[]>>
    removeCart: (id:number) => void
    updateProduct: (data:IUpdateProduct) => void
    modalProduct: boolean
    setModalProduct: React.Dispatch<React.SetStateAction<boolean>>
}
export interface IChildrenProvider {
    children: ReactNode
}
export interface ISessionProps {
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    user: IUser | undefined
    singIn: (data: ILoginUser) => void
    registerUser: (data: IRegisterUser) => void
    button: boolean
    setButton: React.Dispatch<React.SetStateAction<boolean>>
}
export interface IUser {
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
export interface ILoginUser {
    email: string
    password: string
}
export interface IRegisterUser {
    name: string
    email: string
    password: string
    isAdm: string
}