
import { useContext } from "react"
import Modal from "../../components/Modal"
import { RoutesContext } from "../../contexts/sessionContext"
import Header from "./Header"
import ShowCase from "./ShowCase"
import Product from "./ShowCase/Product"
import Form from "../../components/Form"
import Label from "../../components/Form/Label"
import Input from "../../components/Form/Input"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { validationAddProduct } from "../../utils/validation"
import { ProductsContext } from "../../contexts/productsContext"
import { Button } from "../../components/Form/Button"


interface IAddProduct {
    name: string
    model: string
    bar_code: string
    price: number
    iventory: number
    categorie_name: string
    description?: string
    image_url?:string
}

const Home = () => {
    const {modal, setModal} = useContext(RoutesContext)
    const { register, handleSubmit, formState:{errors}} = useForm<IAddProduct>({resolver:yupResolver(validationAddProduct)});
    const { categorie, addProduct} = useContext(ProductsContext);
    
    
    return (
        <>  
            {modal ?
            <Modal>
                <Form text="Add product" handleSubmit={handleSubmit(addProduct)} onClick={() => setModal(!modal)} >
                    <Label text="Name" html="name"/>
                    <Input height={20} width={200} placeholder="name product" id="name" register={{...register("name")}}/>
                    <span>{errors.name?.message}</span>
                    <Label text="model" html="model"/>
                    <Input height={20} width={200} placeholder="model product" id="model" register={{...register("model")}}/>
                    <span>{errors.model?.message}</span>
                    <Label text="bar_code" html="bar_code"/>
                    <Input height={20} width={200} placeholder="bar_code product" id="bar_code" register={{...register("bar_code")}}/>
                    <span>{errors.bar_code?.message}</span>
                    <Label text="price" html="price"/>
                    <Input height={20} width={200} placeholder="price product" id="price" register={{...register("price")}} type="number"/>
                    <span>{errors.price?.message}</span>
                    <Label text="iventory" html="iventory"/>
                    <Input height={20} width={200} placeholder="iventory product" id="iventory" register={{...register("iventory")}} type="number"/>
                    <span>{errors.iventory?.message}</span>
                    <select {...register("categorie_name")}>
                        {categorie.map((value) => {
                            return <option key={value.id} value={value.name}>{value.name}</option>
                        })}
                    </select>
                    <Button b_color="red" color="white" height={40} width={200} name={"Enviar"}/>
                </Form>
            </Modal>:<></>}
            <Header/>
            <ShowCase>
                <Product/>
            </ShowCase>
        </>
    )
}



export default Home;
