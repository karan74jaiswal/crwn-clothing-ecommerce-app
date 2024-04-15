import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Categories from "./components/Categories";
import Signin from "./pages/Signin";
import Shop from "./pages/Shop";
import Section from "./components/Section";
import { AuthorizationProvider } from "./contexts/AuthorizationContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";
function App() {
  return (
    <BrowserRouter>
      <AuthorizationProvider>
        <CartProvider>
          <ProductsProvider>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Categories />} />
                <Route path="signin" element={<Signin />} />
                <Route path="shop" element={<Shop />} />
                <Route path="shop/:category" element={<Section />} />
                <Route
                  path="checkout"
                  element={<h1>This is Checkout Component</h1>}
                />
                <Route
                  path="*"
                  element={<h1>Error 404 ----- Page does not exist</h1>}
                />
              </Route>
            </Routes>
          </ProductsProvider>
        </CartProvider>
      </AuthorizationProvider>
    </BrowserRouter>
  );
}

export default App;
