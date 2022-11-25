import Search from "./Search"
import Cart from "./Cart"
import Logo from "../../../components/Logo"
import Avatar from "./Avatar"
import { Container, Box, DivAvatar } from "./style"
const Header =  () => {
    
    
    return(
        <Container>
            <Box>
                <Logo h1_size={12} height={30} radius={8} width={100}/> 
                <DivAvatar>
                    <Cart/>
                    <Avatar/>
                </DivAvatar>
            </Box>
            <Search/>
        </Container>
    )
}
export default Header