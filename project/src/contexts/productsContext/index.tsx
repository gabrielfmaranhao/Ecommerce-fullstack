import { createContext, useEffect, useState } from "react";
import api from "../../services";
import { IChildrenProvider } from "../sessionContext";

interface IPropsProduct {

    products: IProduct[]
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
    categorie: ICategorie[]
    addProduct: (data:IAddProduct) => void
    addCart: (data: IProduct) => void
    cart: IProductCart[]
    setCart: React.Dispatch<React.SetStateAction<IProductCart[]>>
    removeCart: (id:number) => void

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
interface IProductCart extends IProduct {
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
export const ProductsContext = createContext<IPropsProduct>({} as IPropsProduct)
export const ProductsProvider = ({children}:IChildrenProvider) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [categorie, setCategorie] = useState<ICategorie[]>([])
    const [ cart, setCart] = useState<IProductCart[]>([]);
    
    const addCart = (data:IProduct) => {
        const dataCart = {...data, idCart: Math.random()}
        setCart([...cart,dataCart])
    }

    const removeCart = (id:number) => {
        const newCart = cart.filter((product) => product.idCart !== id);
        setCart(newCart);
    }
    const addProduct = async (data:IAddProduct) => {
        await api.post("/product", data).then((response) => setProducts([...products, response.data])).catch((error)=> console.log(error))
    }
    useEffect( () => {
        const products = async () => {
            await api.get("/product").then((value)=> setProducts(value.data)).catch((error)=> console.log(error))
        };
        products()
        
        const categorie = async () => {
            await api.get("/categorie").then((value) => setCategorie(value.data)).catch((error) => console.log(error))
        }
        categorie()
    },[])
    return(
        <ProductsContext.Provider value={{products, setProducts, addCart, cart, setCart, removeCart, categorie, addProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}