import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import "@fortawesome/fontawesome-free/css/all.css";
import Product from "./components/Product";
import "aos/dist/aos.css";
import Contact from "./components/Contact";
import { Route, Switch, Redirect } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import CheckoutCart from "./components/CheckoutCart";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={CheckoutCart} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
