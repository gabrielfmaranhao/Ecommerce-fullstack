import Search from "./Search"
import Cart from "./Cart"
import Logo from "../../../components/Logo"
import Avatar from "./Avatar"
import { Container } from "./style"
const Header =  () => {
    
    
    return(
        <Container>
            <div className="box">
                <Logo h1_size={12} height={30} radius={8} width={100}/> 
                <div className="avatar">
                    <Cart/>
                    <Avatar/>
                </div>
            </div>
            <Search/>
        </Container>
    )
}
export default Header