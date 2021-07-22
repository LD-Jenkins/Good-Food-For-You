import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./pages/Product";
import Details from "./pages/Details";
import Slider from "./components/Slider";
//import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./pages/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Grocery from "./pages/Grocery";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          
           {/* <Route exact path={["/", "/product"]}>
            <Product /> 
          </Route>*/}
          <Route exact path="/" component={Home}/>
          <Route exact path="/slider">
            <Slider />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
          <Route exact path="/product/:id">
            <Details />
          </Route>

          <Route exact path="/about" component={About}/>
          <Route exact path="/register" component={Register}/>
          
          <Route exact path="/login" component={Login}/>

          {/* <Route path="/login">
            <Login />
          </Route> */}

          <Route exact path="/grocery" component={Grocery}/>
          
          {/* <Route exact path={["/", "home"]}>
            <Home />
          </Route>
           */}

           {/* <Route>
            <NoMatch />
          </Route> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
