import ellipse from '../assets/Ellipse 6.png'
import Group from "../assets/Group 46.png";

const DisCountCard = ({title, subTitle, img}) => {
  return (
    <div className="slide">
      <img src={ellipse} alt='' className="absolute right-0" />
      <img src={Group} alt='' className="absolute  top-[115px] right-2" />
      <img src={Group} alt='' className="absolute  top-[95px] right-2" />
      <img src={Group} alt='' className="absolute  top-1/4 right-2" />
      <div className="flex flex-col gap-y-3">
        <p className="text-white text-[18px]">{title}</p>
        <p className="text-gray-800">{subTitle}</p>
        <button className="px-[21px] py-[7px] cursor-pointer w-fit shadow-md text-sm text-[#303030] rounded-lg bg-white">
          Shop now
        </button>
      </div>
      <img className="w-32 h-32" src={img} alt="Shopping paper bag" />
    </div>
  );
}

export default DisCountCard