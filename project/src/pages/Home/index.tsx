import Header from "./Header"
import ShowCase from "./ShowCase"
import Product from "./ShowCase/Product"
const Home = () => {
    return (
        <>
            <Header/>
            <ShowCase>
                <Product/>
            </ShowCase>
        </>
    )
}

export default Home