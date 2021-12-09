import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import ItemDetailPage from "./routes/ItemDetailPage";
import Home from "./routes/Home";
import Cart from "./routes/Cart";
import CheckOut from "./routes/CheckOut";
import { ItemsContextProvider } from "./context/ItemsContext";import Navigator from "./components/Navigator";


const App=()=> {
  return (
    <ItemsContextProvider> 
      <Navigator/>  
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/item/:id" component={ItemDetailPage}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/check-out" component={CheckOut}/>
          </Switch>
        </Router>
      
      </div>
    </ItemsContextProvider>
  );
}

export default App;
