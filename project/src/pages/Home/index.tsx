import { useNavigate } from "react-router-dom"
import Header from "./Header"
const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header/>
            <button onClick={() => navigate("/session")}>sessionRoutes</button>
        </>
    )
}

export default Home