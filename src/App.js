import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "./App.css";
import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail"
import Campaigns from "./pages/Campaigns";
import CartDetail from "./pages/CartDetails"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navi />
        <Container className="main">
          <Dashboard />
        </Container>
        <Routes>
          <Route path="/home" element={<ProductList />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/cartDetail" element={<CartDetail />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
