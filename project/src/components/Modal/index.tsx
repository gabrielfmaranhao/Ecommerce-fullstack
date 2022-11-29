import { IChildrenProvider } from "../../interfaces/contexts"
import { Container } from "./style"
const Modal = ({children}:IChildrenProvider) => {
    return (
        <Container>
            <div className="modal-box">
                {children}
            </div>
        </Container>
    )
}

export default Modal