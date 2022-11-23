import { IChildrenProvider, RoutesContext } from "../../../contexts/sessionContext"
import { IProduct } from "../../../contexts/sessionContext"
const ShowCase = ({children}:IChildrenProvider) => {

    return(
        <div className="container">
            <main className="containerVitrine">
                <div>
                    <ul className="ul">
                        {children}
                    </ul>
                </div>
            </main>
        </div>
    )
}
export default ShowCase