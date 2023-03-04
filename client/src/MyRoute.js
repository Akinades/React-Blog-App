import { BrowserRouter , Switch , Route} from "react-router-dom";
import App from "./App"
import formComponent from "./components/FormComponent";
import SigleComponent from "./components/SingleComponent"
import EditComponent from "./components/EditComponent";
const MyRoute=()=>{
   return(
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/create" exact component={formComponent}/>
        <Route path="/blog/:slug" exact component={SigleComponent}/>
        <Route path="/blog/edit/:slug" exact component={EditComponent}/>
    </Switch>
    </BrowserRouter>
   )
}
export default MyRoute;