import { Global } from "./styles/global";
import { RoutesComponent } from "./routes";
import { RoutesProvider } from "./contexts/sessionContext";
function App() {
  return (
    <>
      <RoutesProvider>
        <Global/>
        <RoutesComponent/>
      </RoutesProvider>
    </>
  )
  ;
}

export default App;
