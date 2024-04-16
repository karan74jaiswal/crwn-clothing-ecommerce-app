import { useContext, createContext, useState, useEffect } from "react";
import * as shopData from "../data/shop-data.json";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase";

const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});
function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const products = await getCategoriesAndDocuments("categories");
      setProducts(products);
    }
    getProducts();
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
