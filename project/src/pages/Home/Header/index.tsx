import Search from "./Search"
import Cart from "./Cart"
import Logo from "./Logo"
import Avatar from "./Avatar"
import { Container } from "./style"
const Header =  () => {
    
    
    return(
        <Container>
            <div className="box">
                <Logo/> 
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