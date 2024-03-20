import { Routes, Route } from "react-router-dom";
import { useState } from "react";
//components
import NavBar from "./components/NavBar";
import AuthForm from "./components/AuthForm";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductsList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(0);

  return (
    <section>
      <NavBar token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<ProductList setToken={token} />} />
        <Route path="/products/:id" element={<ProductDetail token={token} userId={userId} />} />
        <Route
          path="/auth/login"
          element={<AuthForm setToken={setToken} setUserId={setUserId} />}
        />
        <Route path="/cart" element={<Cart token={token} userId={userId} />} />
        <Route path="/checkout" element={<Checkout token={token} />} />
      </Routes>
    </section>
  );
}

export default App;
