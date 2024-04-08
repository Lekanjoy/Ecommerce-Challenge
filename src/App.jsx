import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./components/pages/Home";
import ProductDetails from "./components/pages/ProductDetails";
import Header from "./components/Header";

// Creating Context
export const ProductDataContext = createContext();

function App() {
  const [showNav, setShowNav] = useState(false);
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [skip, setSkip] = useState(0);

  // SideBar Toggle Function
  const toggleSideBar = () => setShowNav((prevState) => !prevState);

  // Getting Products Data from Backend
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://dummyjson.com/products/search?q=${searchTerm}&limit=10&skip=${skip}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProductData(data.products);
        setLoading(false);
      })
      .catch((error) => {
        alert("Something went wrong!!");
        console.error(error);
      });
  }, [searchTerm, skip]);

  return (
    <ErrorBoundary>
      <ProductDataContext.Provider
        value={{
          loading,
          productData,
          skip,
          setSkip,
        }}
      >
        <Header
          showNav={showNav}
          setShowNav={setShowNav}
          toggleSideBar={toggleSideBar}
          setSearchTerm={setSearchTerm}
        />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/product/:info" element={<ProductDetails />} />
        </Routes>
      </ProductDataContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
