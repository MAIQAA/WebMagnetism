import { GoArrowUpRight } from "react-icons/go";
const HeroSection = () => {
  return (
    <div className="relative text-center pt-36 px-10 bg-custom-gradient-hero text-white w-full min-h-screen">
      <div className="space-y-6 py-4 justify-center items-center">
        <h1 className="md:text-5xl text-3xl  font-bold uppercase">
          Web Magnetism
        </h1>
        <p className="font-thin md:w-1/3 h-3/6 mx-auto text-center capitalize lg:text-lg">
          Transforming Businesses with unique Web design and strategic digital
          marketing for impactful online visibility.
        </p>
        <button
          type="button"
          className="uppercase border border-white bg-custom-gradient rounded-full w-fit mx-auto p-2 px-5 flex flex-row gap-2"
        >
          Get a Proposal
          <GoArrowUpRight className="mt-1" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 240"
        >
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M1420,220L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320L0,64C48,74.7,144,107,240,128C336,149,432,171,528,176C624,181,720,171,816,154.7C912,139,1008,117,1104,106.7C1200,96,1296,96,1344,96C1392,96,1440,96,1440,96Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
