import { BrowserRouter , Switch , Route} from "react-router-dom";
import App from "./App"
import formComponent from "./components/FormComponent";
import SigleComponent from "./components/SingleComponent"

const MyRoute=()=>{
   return(
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/create" exact component={formComponent}/>
        <Route path="/blog/:slug" exact component={SigleComponent}/>
    </Switch>
    </BrowserRouter>
   )
}
export default MyRoute;