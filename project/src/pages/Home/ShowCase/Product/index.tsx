import { useContext } from "react"
import { Button } from "../../../../components/Form/Button"
import { ProductsContext } from "../../../../contexts/productsContext"
import { IProduct } from "../../../../contexts/sessionContext"
import { Card } from "./style"
const Product = () => {
    const {products} = useContext(ProductsContext)
    const list = products.filter((product:IProduct)=> product.isActive)
    return(
        <>
            {list.map((product:IProduct) => 
            <Card key={product.id}>
                <img src={product.image_url} alt={product.name} />
                <span className="spanCategorie">{product.categorie.name}</span>
                <main className="principal">
                    <h3>{product.name}</h3>
                    <strong>$ {product.price},00</strong>
                </main>
                <p className="description">
                        { product.description ? product.description : "Produto sem descrição"}
                </p>
                <span>Estoque: {product.iventory}</span>
                <Button b_color="red" color="white" name="Adicionar ao carrinho" height={40} width={200}/>
            </Card>
            )}
        </>
    )
}

export default Product
