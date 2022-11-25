import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { RoutesContext } from "../../../../contexts/sessionContext"
import { ContainerButton, ImageUser } from "./style"


const Avatar = () => {
    const navigate = useNavigate()
    const {user, modal, setModal} = useContext(RoutesContext)
    if(!user) {
        return (
            <ContainerButton onClick={()=> navigate("/session")}>
                Login
            </ContainerButton>
        )
    }
    else if (!user.isActive) {
        return(
            <ContainerButton>
            <ImageUser src={user.image_url} alt="imagem-user" />
        </ContainerButton>)
    }
    else {
        return(
        <ContainerButton onClick={()=> setModal(!modal)}>
            <ImageUser src={user.image_url} alt="imagem-user" />
        </ContainerButton>) 
    }
}

export default Avatar
