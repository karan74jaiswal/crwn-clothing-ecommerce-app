import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authStateChangeListener, getUserData } from "./utils/firebase";
import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";
import {
  StyledSpinnerContainer,
  StyledSpinner,
} from "./components/StyledSpinner";
import { setUserAuthObject, setUserData } from "./features/user/userSlice";

// Dynamic Imports
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Categories = lazy(() => import("./pages/Categories"));
const Signin = lazy(() => import("./pages/Signin"));
const Shop = lazy(() => import("./pages/Shop"));
const Section = lazy(() => import("./pages/Section"));
const Checkout = lazy(() => import("./pages/Checkout"));
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = authStateChangeListener(async (user) => {
      if (user) {
        dispatch(setUserAuthObject(user));
        const data = await getUserData(user);
        dispatch(setUserData(data));
      } else {
        dispatch(setUserAuthObject());
        dispatch(setUserData());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <Suspense
            fallback={
              <StyledSpinnerContainer>
                <StyledSpinner />
              </StyledSpinnerContainer>
            }
          >
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Categories />} />
                <Route path="signin" element={<Signin />} />
                <Route path="shop" element={<Shop />} />
                <Route path="shop/:category" element={<Section />} />
                <Route path="checkout" element={<Checkout />} />
              </Route>
              <Route
                path="*"
                element={<h1>Error 404 ----- Page does not exist</h1>}
              />
            </Routes>
          </Suspense>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
