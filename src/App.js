import './App.css';
import Landing from './components/Landing/Landing'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './components/SignInOut/Login/Login';
import Signup from './components/SignInOut/Signup/Signup';
import SignInOut from './components/SignInOut/SignInOut';
import Analytics from './components/Dashboard-user/Analytics/Analytics';
import Appbar from './components/Dashboard-user/Appbar/Appbar';
import Addproduct from './components/Dashboard-user/AddProduct/Addproduct';
import CustomerPage from './components/Customer/CustomerPage/CustomerPage';
import SearchedProducts from './components/Customer/ListProducts/SearchedProducts/SearchedProducts';
import Cart from './components/Customer/Cart/Cart';
import { useEffect, useState } from 'react';
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import PickASide from './components/PickASide/PickASide';
function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  useEffect(() => {
    // console.log(user)
    if (user === null) {
      fetch("http://localhost:5000/api/user/get", {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          
          if (data.user) {
            localStorage.setItem("user", JSON.stringify(data));
            setUser(data);
          } else {
            localStorage.setItem("user", null);
            setUser(null);
          }
        });
    }
  }, []);



// -----------------------------------------------------
  const [products,setProducts]=useState([])
  useEffect(()=>{
      const fetchData= async () => {
        fetch("http://localhost:5000/api/user/getProduct", {
          method: "GET",
          credentials: "include",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
          });
      };
      fetchData();        
  },[])
  // -----------------------------------------------------
  // const [cartItems,setCartItems]=useState([])
  // useEffect(()=>{
  //     const fetchData= async ()=>{
  //      const fetchBody=await getCart()
      
  //      setCartItems(fetchBody);
    
  //     }
  //     fetchData();        
  // },[])
  return (
    <div className="App">
      
      <Router>
      <Appbar/>
        <Switch>
          <Switch>
            <Route exact path="/" ><PickASide /></Route>
            <Route exact path="/login" ><SignInOut/></Route>
            <Route exact path="/sign-up-page" ><Signup/></Route>
            <Route exact path="/landing" ><Landing/></Route>
            <Route exact path="/dashboard/user/analytics" >{user ? <Analytics user={user} /> : <Redirect to="/login" />}</Route>
            <Route exact path="/dashboard/user/add-product" >{user ? <Addproduct user={user} /> : <Redirect to="/login" />}</Route>
            <Route exact path="/dashboard/customer" >{user ? <CustomerPage user={user} products = {products} /> : <Redirect to="/login" />}</Route>
            <Route exact path="/dashboard/customer/searched-products" >
              <SearchedProducts products={products} />
              </Route>
            <Route exact path="/dashboard/customer/cart">
            <Cart/>
          </Route>
          <Route exact path="/dashboard/customer/checkout">
            <Checkout/>
          </Route>

          </Switch>
        </Switch>
      </Router>

    

    </div> 
  );
}

export default App;
