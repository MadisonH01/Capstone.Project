import { Routes, Route } from "react-router-dom";
import { useState } from "react";
//components
import NavBar from "./components/NavBar";
import AuthForm from "./components/AuthForm";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductsList";
import Cart from "./components/Cart";
//import Account from "./components/Account";
//styles
//

function App() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  return (
    <section>
      <NavBar token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<ProductList setToken={token} />} />
        <Route path="/products/:id" element={<ProductDetail token={token} />} />
        <Route
          path="/auth/login"
          element={<AuthForm setToken={setToken} setUserId={setUserId} />}
        />
        <Route path="/cart" element={<Cart token={token} userId={userId} />} />
      </Routes>
    </section>
  );
}

export default App;
