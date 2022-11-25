import { useContext } from "react";
import { ProductsContext } from "../../../../contexts/productsContext";
import { BsFillTrashFill } from "react-icons/bs";
import { Container, Card, DivPrice } from "./style";
const Cart = () => {
  const { cart, removeCart} = useContext(ProductsContext);
  const totalPrice = () => {
    return cart.map((value) => parseInt(value.price)).reduce((acc, cu) => acc + cu, 0);
  }
  return (
        <Container>
          {cart.map((produto) => (
            <Card key={produto.idCart}>
              <img src={produto.image_url} alt={produto.name} />
              <div className="information">
                <h3>{produto.name}</h3>
                <strong>R${produto.price}</strong>
              </div>
              <button className="buttonTrash" onClick={() => removeCart(produto.idCart)}>
                <BsFillTrashFill />
              </button>
            </Card>
          ))}
          <DivPrice>
            <h3>Valor total: R${totalPrice()}</h3>
          </DivPrice>
        </Container>
  );
};

export default Cart;
