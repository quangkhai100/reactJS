import Home from '../pages/Home.js'
import Product from '../pages/Product.js'
import About from '../pages/About.js'
import NotFound from '../pages/NotFound.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink ,
  } from "react-router-dom";


function Header() {
    return (
    <Router>
    <div>
      <ul>
        <li>
          <NavLink  to="/">Home</NavLink >
        </li>
        <li>
          <NavLink  to="/about">About</NavLink >
        </li>
        <li>
          <NavLink  to="/product">Product</NavLink >
        </li>
      </ul>

      <Switch>
        <Route  path="/about" component={About}/>
      
        <Route path="/product" component={Product}/>
       
        <Route exact path="/" component={Home} />

        <Route default component={NotFound} />

      </Switch>
    </div>
  </Router>);
  }
  export default Header;
