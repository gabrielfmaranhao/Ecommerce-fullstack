import { Container } from "./style"
import { IStyleContainerLogo } from "../../interfaces/styles";
const Logo = ({h1_size, height, radius, width}:IStyleContainerLogo) => {
    return(
        <Container h1_size={h1_size} height={height} radius={radius} width={width} >
            <h1>E-commerce fullStack</h1>
        </Container>
    )
}

export default Logo