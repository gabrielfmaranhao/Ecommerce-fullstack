import Search from "./Search"
import Cart from "./Cart"
import Logo from "../../../components/Logo"
import Avatar from "./Avatar"
import { Container, Box, DivAvatar } from "./style"
import { Button } from "../../../components/Form/Button"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { RoutesContext } from "../../../contexts/sessionContext"
import { useContext } from "react"

const Header = () => {
    const {button} = useContext(RoutesContext)
    const variantes = {
        open: {width:100, height: 150, duration: 3},
        close: {width:50, height: 50, duration: 3}
    }
    return(
        <Container>
            <Box>
                <Logo h1_size={12} height={30} radius={8} width={100}/>
                    <motion.div className="divAvatar" 
                        animate = { button ? "open":"close"}
                        variants={variantes}>
                        <Avatar/>
                    </motion.div>
            </Box>
            <Search/>
        </Container>
    )
}
export default Header