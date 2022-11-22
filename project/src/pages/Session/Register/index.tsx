import Form from "../../../components/Form"
import Label from "../../../components/Form/Label"
import { Button } from "../../../components/Form/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { validationRegisterUser } from "../../../utils/validation"
import Input from "../../../components/Form/Input"
import api from "../../../services"
import { useContext } from "react"
import { RoutesContext } from "../../../contexts/sessionContext"
import { useNavigate } from "react-router-dom"

interface IRegisterUser {
    name: string
    email: string
    password: string
    isAdm: string
}
const Register = () => {
    const { register, handleSubmit, formState:{errors}} = useForm<IRegisterUser>({resolver:yupResolver(validationRegisterUser)})
    const {setModal, modal} = useContext(RoutesContext)
    const navigate = useNavigate()
    const onSubmit = (data:any) => {
        api.post("/user",data).then((value) => console.log(value)).catch((error)=> console.log(error))
    }
    return(
    <Form text="Formulário de cadastro" handleSubmit={handleSubmit(onSubmit)} onClick={ ()=> {setModal(!modal); navigate("/session")}}>
        <Label html="name" text="name"/>
        <Input height={30} width={40} register={{...register("name")}} type="text" placeholder="name"/>
        <span>{errors.name?.message}</span>
        <Label text="email" html="email"/>
        <Input height={30} width={40} register={{...register("email")}} type="email" placeholder="email"/>
        <span>{errors.email?.message}</span>
        <Label html="password" text="password"/>
        <Input height={30} width={40} register={{...register("password")}} type="password" placeholder="password"/>
        <span>{errors.password?.message}</span>
        <Label html="isAdm" text="Administrador"/>
        <div className="selectButton">
        <select {...register("isAdm")}>
            <option value="true">Sim</option>
            <option value="false">Não</option>
        </select>
        <Button name="Enviar" type="submit" b_color={"red"} height={30} width={200} color="white"/>
        <span>{errors.isAdm?.message}</span>
        </div>
    </Form>)  
}

export default Register