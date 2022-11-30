import Search from "./Search"
import Cart from "./Cart"
import Logo from "../../../components/Logo"
import Avatar from "./Avatar"
import { Container, Box, DivAvatar } from "./style"
import { Button } from "../../../components/Form/Button"
import { useNavigate } from "react-router-dom"
const Header =  () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate("/session")
    }
    
    return(
        <Container>
            <Box>
                <Logo h1_size={12} height={30} radius={8} width={100}/> 
                <DivAvatar>
                    <Cart/>
                    <Avatar/>
                </DivAvatar>
                <Button name="logout" b_color="red" color="white" height={30} width={100} onClick={() => logout()}/>
            </Box>
            <Search/>
        </Container>
    )
}
export default Header