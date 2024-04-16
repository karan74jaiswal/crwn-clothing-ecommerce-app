import { useContext, createContext, useState, useEffect } from "react";
import * as shopData from "../data/shop-data.json";
import { addCollectionAndDocuments } from "../utils/firebase";

const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});
function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const sectionData = Array.from(shopData, (_) => _);
    setProducts(sectionData);
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = function () {
  const context = useContext(ProductsContext);
  return context;
};

export { ProductsProvider, useProducts };
