import { Link } from "react-router-dom";
import star from "../assets/Star 4.svg";

const ProductCard = ({ productData }) => {
  
  return (
    <>
      {productData?.length < 1 ? (
        <h1 className=" w-full grid place-items-center uppercase font-semibold text-lg mt-24 animate-bounce md:ml-[150%]">No Products Found!</h1>
      ) : (
        productData.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-[#fefefe] w-full border shadow-md  p-2 rounded-md text-center"
            >
                {/* Navigates to unique product page details when clicked on image */}
                <div className=" rounded  w-full h-[150px]  border ">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="bg-transparent w-full h-full "
                  />
                </div>
              <div className="flex justify-between items-center mt-2">
                <p className="font-bold text-left text-sm text-[#303030]">
                  {product.title}
                </p>
                <div className="flex items-center text-[10px]">
                  <img src={star} alt=" star icon" className="w-[8px]" />
                  <i className="text-[rgba(48,48,48,0.7)]">{product.rating}</i>
                </div>
              </div>
              <div className="flex items-center justify-between my-3 relative">
                <p className="text-[#303030]  font-medium">${product.price}</p>
                <p className="absolute text-[rgba(48,48,48,0.7)] left-7 line-through text-[10px] top-5">
                  -{product.discountPercentage}%
                </p>
              <Link to={`/product/${product.id}`}
               className="bg-[#2badbf] text-sm p-1 text-white">
                  View details
                  </Link>
              </div>
                
            </div>
          );
        })
      )}
    </>
  );
};

export default ProductCard;