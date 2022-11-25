import { IChildrenProvider } from "../../../interfaces/contexts"
import { Container, ContainerShowcase } from "./style"
const ShowCase = ({children}:IChildrenProvider) => {

    return(
        <Container>
            <ContainerShowcase>
                <div>
                    <ul className="ul">
                        {children}
                    </ul>
                </div>
            </ContainerShowcase>
        </Container>
    )
}
export default ShowCase