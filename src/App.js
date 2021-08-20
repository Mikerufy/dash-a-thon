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
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Switch>
            <Route exact path="/" ><Landing /></Route>
            <Route exact path="/sign-in-page" ><SignInOut/></Route>
            <Route exact path="/sign-up-page" ><Signup/></Route>
          </Switch>
        </Switch>
      </Router>

    

    </div> 
  );
}

export default App;
