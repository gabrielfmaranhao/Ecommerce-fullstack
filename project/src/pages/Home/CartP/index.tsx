import { IChildrenProvider } from "../../../interfaces/contexts";
import { Container, DivContent, DivTexto } from "./style";

const Carts = ({children}:IChildrenProvider) => {
    return(
        <Container>
            <DivTexto>
                <h3>Carrinho de compras</h3>
            </DivTexto>
            <DivContent>
                {children}
            </DivContent>
        </Container>
    )
}

export default Carts