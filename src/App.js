import "./App.css";
import { All_products } from "./Components/All_products";
import { Cart } from "./Components/Cart";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Product_Detail } from "./Components/Product_Detail";

function App() {
  return (
    <Router>
      <div>
        <header className="header">
          <Link to={"/cart"}>Go to my cart</Link>
          <br />
          <Link to={"/products"}>All products</Link>
        </header>
        <Route path={"/cart"} component={Cart} />
        <Route path={"/products/:id"} component={Product_Detail} />
        <Route exact path={"/products"} component={All_products} />
      </div>
    </Router>
  );
}

export default App;
