import { useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import Carts from "./CartP";
import Cart from "./CartP/Cart";
import EmptyCart from "./CartP/emptyCart";
import Header from "./Header";
import ShowCase from "./ShowCase";
import Product from "./ShowCase/Product";
const Home = () => {
  const { cart } = useContext(ProductsContext);
return (
    <>
        <Header />
        <ShowCase>
            <Product />
        </ShowCase>
        <Carts>
            {cart.length === 0 ?
            <EmptyCart/>:
            <Cart/>}
        </Carts>
    </>
);
};

export default Home;
