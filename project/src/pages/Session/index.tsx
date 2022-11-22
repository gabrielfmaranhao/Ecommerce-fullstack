import { Outlet, useNavigate } from "react-router-dom"
import Logo from "../../components/Logo"
import { Container } from "./style"
import { Link } from "react-router-dom"
import Modal from "../../components/Modal"
import { useContext } from "react"
import { RoutesContext } from "../../contexts/sessionContext"
import { Button } from "../../components/Form/Button"
const Session = () => {
    const navigate = useNavigate()
    const { modal, setModal} = useContext(RoutesContext)
    return(
        <Container>
            <div className="box">
                <Logo h1_size={16} height={100} radius={8} width={200}/>
                <Button b_color="white" color="red" height={25} width={120} name="Login" onClick={ () => navigate("login")}/>
                <Link to ={"register"} onClick={()=> setModal(!modal)}>cadastre-se aqui</Link> 
            </div>
            {!modal ? <></> : 
            <Modal>
                <Outlet/>
            </Modal>}
            
        </Container>
        
    )
}

export default Session