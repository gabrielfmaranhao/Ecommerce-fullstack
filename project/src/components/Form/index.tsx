import { FormHTMLAttributes } from "react"
import { Container } from "./style"
import { AiOutlineClose } from "react-icons/ai"

interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode 
    text: string
    handleSubmit?: any
    onClick?: () => void
}
const Form  = ({children, text, handleSubmit, onClick}:IFormProps) => {
    return(
        <Container>
            <div className="divIcon">
                <button id="buttonIcon" onClick={onClick}><AiOutlineClose color="var(--red)" size={15}/></button>
            </div>
            <h2>{text}</h2>
            <form onSubmit={handleSubmit}>
                {children}
            </form>
        </Container>
    )
}

export default Form