import { createContext, useEffect, useState } from "react";
import api from "../../services";
import { ICategorie, IAddProduct, IProduct, IProductCart, IPropsProduct, IChildrenProvider, IUpdateProduct } from "../../interfaces/contexts";


export const ProductsContext = createContext<IPropsProduct>({} as IPropsProduct)
export const ProductsProvider = ({children}:IChildrenProvider) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [categorie, setCategorie] = useState<ICategorie[]>([])
    const [ cart, setCart] = useState<IProductCart[]>([]);
    const [ modalProduct, setModalProduct] = useState<boolean>(false);
    
    const addCart = (data:IProduct): void => {
        const dataCart = {...data, idCart: Math.random()}
        setCart([...cart,dataCart])
    }

    const removeCart = (id:number): void => {
        const newCart = cart.filter((product) => product.idCart !== id);
        setCart(newCart);
    }
    const addProduct = async (data:IAddProduct): Promise<void> => {
        await api.post("/product", data).then((response) => setProducts([...products, response.data])).catch((error)=> console.log(error))
    }
    const updateProduct = async(data:IUpdateProduct): Promise<void> => {
        await api.patch("/product", data)
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
        <ProductsContext.Provider value={{products, setProducts, addCart, cart, setCart, removeCart, categorie, addProduct, updateProduct, modalProduct, setModalProduct}}>

            {children}
        </ProductsContext.Provider>
    )
}