import { AiOutlineSearch } from "react-icons/ai";
import { Container } from "./style";
const Search = () => {
    return(
        <Container>
            <input type="text" placeholder="Pesquise" />
            <button><AiOutlineSearch color="var(--red)" size={25}/></button>
        </Container>
    )
}

export default Search