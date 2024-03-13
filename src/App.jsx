import { Routes, Route } from "react-router-dom";
import { useState } from "react";
//components
import NavBar from "./components/NavBar";
import AuthForm from "./components/AuthForm";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductsList";
//import Account from "./components/Account";
//styles
//

function App() {
    const [token, setToken] = useState(null);

    return (
        <section>
            <NavBar token={token} setToken={setToken} />
            <Routes>
                <Route path="/" element={<ProductList setToken={token} />} />
                <Route path="/products/:id" element={<ProductDetail token={token} />} />
                <Route path="/authform" element={<AuthForm setToken={setToken} />} />
            </Routes>
        </section>
    );
}

export default App;