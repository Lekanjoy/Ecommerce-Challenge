const SkeletonLoading = () => {
  return (
    <div className="bg-[#fefefe] w-full h-auto shadow-md border p-2 rounded-md text-center animate-pulse">
      <div className="bg-gray-200  rounded flex items-center justify-center">
        <p className="bg-gray-200 w-full h-28 rounded"></p>
      </div>

      <div className="flex justify-between items-center mt-2">
        <div className="flex flex-col gap-y-1">
          <p className="bg-gray-200 w-32 h-4 rounded-sm"></p>
          <p className="bg-gray-200 w-36 h-3 rounded-sm"></p>
          <p className="bg-gray-200 w-10 h-2 rounded-sm"></p>
        </div>
        <div className="flex items-center gap-x-1">
          <p className="bg-gray-200 w-2 h-2 rounded-sm"></p>
          <i className="bg-gray-200 w-2 h-5 rounded-sm"></i>
        </div>
      </div>
      <div className="flex items-center justify-between my-3 relative">
        <p className="bg-gray-200 w-16 h-6"></p>
        <button className="bg-gray-200 w-24 h-9 text-sm p-1 text-white"></button>
      </div>
    </div>
  );
};

export default SkeletonLoading;