import { useEffect, useContext } from "react";
import { ProductDataContext } from "../App";
import Products from "./Products";
import secure from "../assets/secure.png";
import paperBag from "../assets/Paperbag.png";
import DisCountCard from "./DisCountCard";

const Home = () => {
  const { skip, setSkip } = useContext(ProductDataContext);

  // check if user is connected to the internet
  useEffect(() => {
    if (!navigator.onLine) {
      alert("You are not connected to the internet");
    }
  }, []);

  return (
    <main className="px-5 py-8 bg-[#FDFBFB] font-[quicksand] w-full lg:px-10">
      <div className="mb-3 mt-12 ">
        <h1 className="text-xl font-bold">Welcome back!</h1>
        <p className="text-[rgba(48,_48,_48,_0.7)] text-sm">
          What got your attention today?
        </p>
      </div>
      <div className="w-full flex gap-x-4 overflow-hidden mb-6">
        <DisCountCard
          title="Get all products at a"
          subTitle="whooping 50% off"
          img={paperBag}
        />
        <DisCountCard
          title="Shop and make"
          subTitle="secure payments with ease"
          img={secure}
        />
        <DisCountCard
          title="Get all products at a"
          subTitle="whooping 50% off"
          img={paperBag}
        />
        <DisCountCard
          title="Shop and make"
          subTitle="secure payments with ease"
          img={secure}
        />
      </div>
      <Products />
      <div className="flex justify-between items-center my-10 text-white">
        <button
        disabled={skip < 10}
          onClick={() => setSkip((prevState) => prevState - 10)}
          className={`px-2 py-1 rounded ${skip > 10 ? 'bg-red-600' : 'bg-red-300 cursor-not-allowed'}`}
        >
          Prev
        </button>
        <button
          onClick={() => setSkip((prevState) => prevState + 10)}
          className="px-2 py-1 rounded bg-green-600"
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Home;
