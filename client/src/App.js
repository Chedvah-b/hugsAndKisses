import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import ItemDetailPage from "./components/ItemDetailPage";
import Home from "./components/Home";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";import LogIn from "./components/LogIn";
import { ItemsContextProvider } from "./context/ItemsContext";import Navigator from "./components/Navigator";
import SignUp from "./components/SignUp";
import Orders from "./components/Orders";
import Footer from "./components/Footer";


const App=()=> {
  
  return (
    <ItemsContextProvider> 
      
      <div style={{marginTop: '138px', position: 'relative', minHeight: '100vh', paddingBottom: '2.5rem'}}>
        <Router>
        {window.location.pathname !== '/login' && <Navigator /> }
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/item/:id" component={ItemDetailPage}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/check-out" component={CheckOut}/>
            <Route exact path="/login" component={LogIn}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/my-orders" component={Orders}/>
          </Switch>
          {window.location.pathname !== '/login' && <Footer /> }
        </Router>
      </div>
    </ItemsContextProvider>
  );
}

export default App;
