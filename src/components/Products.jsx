import { useContext } from "react";
import ProductCard from "./ProductCard";
import SkeletonLoadingContainer from "./SkeletonLoadingContainer";
import { ProductDataContext } from "../App";

const Products = () => {
  const { productData, loading } = useContext(ProductDataContext);

  return (
    <>
      {loading ? (
        <SkeletonLoadingContainer />
      ) : (
        <section className="grid w-full grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
          <ProductCard productData={productData} />
        </section>
      )}
    </>
  );
};

export default Products;