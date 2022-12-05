import { useContext} from "react"
import { useNavigate } from "react-router-dom"
import { ProductsContext } from "../../../../contexts/productsContext"
import { RoutesContext } from "../../../../contexts/sessionContext"
import { ContainerButton, ImageUser } from "./style"
import { Button } from "../../../../components/Form/Button"


const Avatar = () => {
    const navigate = useNavigate()
    const {user, button, setButton} = useContext(RoutesContext)
    const {modalProduct, setModalProduct} = useContext(ProductsContext)
    const logout = () => {
        localStorage.clear()
        navigate("/session")
    }
    if(!user) {
        return (
                    
                <ContainerButton onClick={() => navigate("/session")}>
                    Login
                </ContainerButton>
            
        )
    }
    else if (!user.isAdm) {
        return(
                    <ContainerButton onClick={()=> setButton(!button)}>
                        <ImageUser src={user.image_url} alt="imagem-user" />
                    </ContainerButton>
            
        )
    }
    else {
        return(
            <>
                    <ContainerButton onClick={() => setButton(!button)}>
                        <ImageUser src={user.image_url} alt="imagem-user" />
                    </ContainerButton>
                    { button ? 
                        <>
                            <Button b_color="white" color="black" height={40} width={100} name="Add product"/>
                            <Button b_color="red" color="white" height={40} width={100} name = "logout" onClick={() => logout()}/>
                            <Button b_color="white" color = "black" height={30} width ={100} name = "test"/>
                        </>
                        : <></>}
        </>
        ) 
    }
}

export default Avatar
