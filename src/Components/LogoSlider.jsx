import amazon from "../assets/amazon.png";
import ada from "../assets/ADA.png";
import audio from "../assets/Audio.png";
const LogoSlider = () => {
  return (
    <div className="relative overflow-hidden bg-custom-gradient-hero p-10 ">
      <div className="flex justify-evenly">
        <div className="">
          <img src={ada} alt="" className="sm:w-3/4 md:w-full" />
        </div>
        <div className="">
          <img src={amazon} alt="" className="sm:w-3/4 md:w-full"/>
        </div>
        <div className="">
          <img src={audio} alt="" className="sm:w-3/4 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
