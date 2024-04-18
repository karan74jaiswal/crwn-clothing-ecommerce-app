import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Categories from "./pages/Categories";
import Signin from "./pages/Signin";
import Shop from "./pages/Shop";
import Section from "./pages/Section";
import { AuthorizationProvider } from "./contexts/AuthorizationContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <BrowserRouter>
      <AuthorizationProvider>
        <ProductsProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Categories />} />
                <Route path="signin" element={<Signin />} />
                <Route path="shop" element={<Shop />} />
                <Route path="shop/:category" element={<Section />} />
                <Route path="checkout" element={<Checkout />} />
                <Route
                  path="*"
                  element={<h1>Error 404 ----- Page does not exist</h1>}
                />
              </Route>
            </Routes>
          </CartProvider>
        </ProductsProvider>
      </AuthorizationProvider>
    </BrowserRouter>
  );
}

export default App;
