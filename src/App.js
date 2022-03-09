import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "./App.css";
import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail"
import Campaigns from "./pages/Campaigns";
import CartDetail from "./pages/CartDetails"
import SignUp from "./pages/SignUp"
import ProductAdd from "./pages/ProductAdd";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navi />
        <Container className="main">
          <Dashboard />
        </Container>
        <Routes>
          <Route exact path="" element={<ProductList />} />
          <Route exact path="/productDetail" element={<ProductDetail />} />
          <Route exact path="/campaigns" element={<Campaigns />} />
          <Route exact path="/cartDetail" element={<CartDetail />} /> 
          <Route exact path="/register" element={<SignUp />} />
          <Route exact path="/product/add" element={<ProductAdd />} />
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;

