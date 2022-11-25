import {BsFillBagFill} from "react-icons/bs"
import { Container } from "./style"
const EmptyCart = () => {
    return(
        <Container>
            <BsFillBagFill color="var(--red)" size={30}/>
            <p>Carrinho vazio</p>
        </Container>
    )
}

export default EmptyCart