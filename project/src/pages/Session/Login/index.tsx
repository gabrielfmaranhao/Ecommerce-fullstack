import Form from "../../../components/Form"
import Label from "../../../components/Form/Label"
import { Button } from "../../../components/Form/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Input from "../../../components/Form/Input"
import { validationLoginUser } from "../../../utils/validation"
import api from "../../../services"
import { useContext } from "react"
import { RoutesContext } from "../../../contexts/sessionContext"
import { useNavigate } from "react-router-dom"


interface ILoginUser {
    email: string
    password: string
}
const Login = () => {
    const { register, handleSubmit, formState:{errors}} = useForm<ILoginUser>({resolver:yupResolver(validationLoginUser)})
    const {setModal, modal} = useContext(RoutesContext)
    const navigate = useNavigate()
    const onSubmit = (data:ILoginUser) => {
        api.post("/login",data).then((value) => console.log(value)).catch((error)=> console.log(error))
    }
    return(
    <Form text="Login" handleSubmit={handleSubmit(onSubmit)} onClick={ ()=> {setModal(!modal); navigate("/session")}}>
        <Label html="email" text="Email"/>
        <Input height={30} width={40} register={{...register("email")}} type="email" placeholder="email"/>
        <span>{errors.email?.message}</span>
        <Label text="Password" html="Password"/>
        <Input height={30} width={40} register={{...register("password")}} type="password" placeholder="password"/>
        <span>{errors.password?.message}</span>
        <Button name="Entrar" type="submit" b_color={"red"} height={30} width={200} color="white"/>
    </Form>)  
}

export default Login