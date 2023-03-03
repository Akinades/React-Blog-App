import { BrowserRouter , Switch , Route} from "react-router-dom";
import App from "./App"
import formComponent from "./components/FormComponent";


const MyRoute=()=>{
   return(
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/create" exact component={formComponent}/>
    </Switch>
    </BrowserRouter>
   )
}
export default MyRoute;