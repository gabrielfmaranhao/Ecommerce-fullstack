import { createContext, useEffect, useState } from "react";
import api from "../../services";
import { IChildrenProvider } from "../sessionContext";

interface IPropsProduct {
    products: IProduct[] | undefined | any
    setProducts: React.Dispatch<React.SetStateAction<IProduct[] | undefined>>
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
export const ProductsContext = createContext<IPropsProduct>({} as IPropsProduct)
export const ProductsProvider = ({children}:IChildrenProvider) => {
    const [products, setProducts] = useState<IProduct[] | undefined>([]);
    useEffect( () => {
        const products = async () => {
            await api.get("/product").then((value)=> setProducts(value.data)).catch((error)=> console.log(error))
        };
        products()
    },[products])
    return(
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}