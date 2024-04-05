import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import backArrow from "../../assets/back-arrow.svg";
import star from "../../assets/Star 4.svg";

const ProductDetails = () => {
  const [productData, setProductData] = useState([]);
  const { info } = useParams();

  // Getting Products Data from Backend
  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=&limit=100&skip=0`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data.products);
      })
      .catch((error) => console.error(error));
  }, []);

  // Search for product that matches clicked  on card
  const productInfo = productData?.find(
    (product) => product.id === parseInt(info)
  );

  // Navigate to previous page
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  // loop through the rating and display the number of ratings as star icons
  const starIcons = [];
  for (let i = 0; i < Math.round(productInfo?.rating); i++) {
    starIcons.push(<img src={star} alt="star icon" key={i} className="w-3" />);
  }

  return (
    <section className="px-[20px] bg-[#FDFBFB] mt-12  pt-3 pb-64 relative h-screen">
      <div className="flex items-center gap-x-4  mb-6">
        <div
          onClick={handleBack}
          className="min-w-[30px] min-h-[30px] flex justify-center items-center bg-[rgba(225,225,225,0.2)] rounded-[100%] cursor-pointer hover:scale-110"
        >
          <img
            src={backArrow}
            alt="back arrow icon"
            className="w-[15px] h-[15px]"
          />
        </div>
        <h1 className="font-bold text-[#303030]">{productInfo?.title}</h1>
      </div>
      <div className="w-full h-[200px] flex items-center justify-center">
        <img
          src={productInfo?.images[0]}
          alt={productInfo?.name}
          className="h-full object-contain rounded-sm"
        />
      </div>
      <footer className="bg-[#fefefe] flex flex-col rounded-t-3xl border px-[20px] py-6 w-full h-[40vh] fixed left-0 bottom-0 z-10">
        <div className="flex justify-between">
          <h1 className="text-[#303030] text-lg font-bold">
            {productInfo?.title}
          </h1>
          <div className="flex gap-x-1 mb-[15px]">
            {starIcons}
            <p className="text-sm">{productInfo?.rating}</p>
          </div>
        </div>
        <p className="text-xs font-medium text-[rgba(48,_48,_48,_0.5)]">
          {productInfo?.description}
        </p>

        <div className="flex justify-between w-full ">
          <div className="">
            <h2 className="mt-[18px] text-[#303030] mb-2 font-bold">
              Category
            </h2>
            <p className="text-xs font-medium text-[rgba(48,_48,_48,_0.5)] mb-4 capitalize">
              {productInfo?.category}
            </p>
          </div>
          <div className="">
            <h2 className="mt-[18px] text-[#303030] mb-2 font-bold">Brand</h2>
            <p className="text-xs font-medium text-[rgba(48,_48,_48,_0.5)] mb-4 capitalize">
              {productInfo?.brand}
            </p>
          </div>
        </div>
        <div className="relative flex justify-between">
          <div>
            <p className="text-[rgba(48,_48,_48,_0.5)] text-sm">Price</p>
            <h2 className="text-[#303030] text-xl font-semibold">
              ${productInfo?.price}
            </h2>
          </div>
          <p className="absolute text-[rgba(48,48,48,0.7)] left-8 line-through text-[12px] top-10">
            -{productInfo?.discountPercentage}%
          </p>
          <button className="bg-[#28ADBF] rounded-sm px-[27px] py-[9px] text-white font-semibold ">
            Add to cart
          </button>
        </div>
      </footer>
    </section>
  );
};

export default ProductDetails;
