import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ProductsContext } from "../../../../contexts/productsContext"
import { RoutesContext } from "../../../../contexts/sessionContext"
import { ContainerButton, ImageUser } from "./style"
import { motion } from "framer-motion"


const Avatar = () => {
    const navigate = useNavigate()
    const {user} = useContext(RoutesContext)
    const {modalProduct, setModalProduct} = useContext(ProductsContext)
    if(!user) {
        return (
                    
                <ContainerButton onClick={() => navigate("/session")}>
                    Login
                </ContainerButton>
            
        )
    }
    else if (!user.isAdm) {
        return(
                    
                <ContainerButton>
                    <ImageUser src={user.image_url} alt="imagem-user" />
                </ContainerButton>
            
        )
    }
    else {
        return(
            
                <ContainerButton onClick={() => setModalProduct(!modalProduct)}>
                    <ImageUser src={user.image_url} alt="imagem-user" />
                </ContainerButton>
            
        ) 
    }
}

export default Avatar
