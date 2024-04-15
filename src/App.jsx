import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Categories from "./components/Categories";
import Signin from "./pages/Signin";
import Shop from "./pages/Shop";
import Hats from "./components/Hats";
import { AuthorizationProvider } from "./contexts/AuthorizationContext";
function App() {
  return (
    <BrowserRouter>
      <AuthorizationProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Categories />} />
            <Route path="signin" element={<Signin />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:category" element={<Hats />} />
            <Route
              path="*"
              element={<h1>Error 404 ----- Page does not exist</h1>}
            />
          </Route>
        </Routes>
      </AuthorizationProvider>
    </BrowserRouter>
  );
}

export default App;
