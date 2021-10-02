import './App.css';
import Landing from './components/Landing/Landing'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/SignInOut/Login/Login';
import Signup from './components/SignInOut/Signup/Signup';
import SignInOut from './components/SignInOut/SignInOut';
import Analytics from './components/Dashboard-user/Analytics/Analytics';
import Appbar from './components/Dashboard-user/Appbar/Appbar';
import Addproduct from './components/Dashboard-user/AddProduct/Addproduct';
import CustomerPage from './components/Customer/CustomerPage/CustomerPage';
import SearchedProducts from './components/Customer/ListProducts/SearchedProducts/SearchedProducts';
function App() {
  return (
    <div className="App">
      
      <Router>
      <Appbar/>
        <Switch>
          <Switch>
            <Route exact path="/" ><Landing /></Route>
            <Route exact path="/sign-in-page" ><SignInOut/></Route>
            <Route exact path="/sign-up-page" ><Signup/></Route>
            <Route exact path="/dashboard/user/analytics" ><Analytics/></Route>
            <Route exact path="/dashboard/user/add-product" ><Addproduct/></Route>
            <Route exact path="/dashboard/customer" ><CustomerPage/></Route>
            <Route exact path="/dashboard/customer/searched-products" ><SearchedProducts/></Route>
          </Switch>
        </Switch>
      </Router>

    

    </div> 
  );
}

export default App;
