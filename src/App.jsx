import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthorizationProvider } from "./contexts/AuthorizationContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Categories = lazy(() => import("./pages/Categories"));
const Signin = lazy(() => import("./pages/Signin"));
const Shop = lazy(() => import("./pages/Shop"));
const Section = lazy(() => import("./pages/Section"));
const Checkout = lazy(() => import("./pages/Checkout"));
function App() {
  return (
    <BrowserRouter>
      <AuthorizationProvider>
        <ProductsProvider>
          <CartProvider>
            <Suspense fallback={<h1>...Loading...</h1>}>
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
            </Suspense>
          </CartProvider>
        </ProductsProvider>
      </AuthorizationProvider>
    </BrowserRouter>
  );
}

export default App;
