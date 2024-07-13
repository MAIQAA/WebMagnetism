import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.jpg";
import { GoArrowUpRight } from "react-icons/go";

const Services = () => {
  return (
    <div className="p-10 md:p-20">
      <h1 className="text-4xl capitalize text-center font-semibold">
        Overview of Services
      </h1>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto mt-7">
        {/* CARD 1 */}
        <div className="space-y-5">
          <img src={image1} alt="" className="w-full h-auto" />
          <h1 className="capitalize text-xl font-semibold lg:text-2xl">
            Bespoke Web Design
          </h1>
          <p className="font-light lg:text-lg">
            Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing
            libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae.
            Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat{" "}
          </p>
          <button className="relative inline-block p-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
            <span className="px-6 py-1.5 bg-white rounded-full uppercase flex flex-row gap-2 lg:text-lg md:text-sm text-xs">
              Bespoke Web Design
              <GoArrowUpRight className="mt-1" />
            </span>
          </button>
        </div>

        {/* CARD 2 */}
        <div className="space-y-5">
          <img src={image2} alt="" className="w-full h-auto" />
          <h1 className="capitalize text-xl font-semibold lg:text-2xl">App Development</h1>
          <p className="font-light lg:text-lg">
            Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing
            libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae.
            Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat{" "}
          </p>
          <button className="relative inline-block p-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
            <span className="px-6 py-1.5 bg-white rounded-full uppercase flex flex-row gap-2 lg:text-lg md:text-sm text-xs">
              App Development
              <GoArrowUpRight className="mt-1" />
            </span>
          </button>
        </div>

        {/* CARD 3 */}
        <div className="space-y-5">
          <img src={image3} alt="" className="w-full h-auto" />
          <h1 className="capitalize text-xl font-semibold lg:text-2xl">
            Digital Marketing
          </h1>
          <p className="font-light lg:text-lg">
            Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing
            libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae.
            Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat{" "}
          </p>
          <button className="relative inline-block p-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
            <span className="px-6 py-1.5 bg-white rounded-full uppercase flex flex-row gap-2 lg:text-lg md:text-sm text-xs">
              Digital Marketing
              <GoArrowUpRight className="mt-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
