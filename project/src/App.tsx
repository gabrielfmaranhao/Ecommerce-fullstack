import { Global } from "./styles/global";
import { RoutesComponent } from "./routes";
import { RoutesProvider } from "./contexts/sessionContext";
import { ProductsProvider } from "./contexts/productsContext";
function App() {
  return (
    <>
      <RoutesProvider>
        <ProductsProvider>
          <Global/>
          <RoutesComponent/>
        </ProductsProvider>
      </RoutesProvider>
    </>
  )
  ;
}

export default App;
