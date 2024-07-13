import { GoArrowUpRight } from "react-icons/go";
import globe from "../assets/Globe.svg";
// import waves from "../assets/waves.png";

const Benefits = () => {
  return (
    <div className="relative min-w-screen bg-gradient-to-r from-[#7C5FEB] to-[rgb(222,131,138)]">
      <svg
        viewBox="0 0 1263 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#f3f4f6"
          d="M 0 0 C 125.1 0 291.9 52 417 52 L 417 52 L 417 0 L 0 0 Z"
          strokeWidth="0"
        ></path>{" "}
        <path
          fill="#f3f4f6"
          d="M 416 52 C 530.3 52 682.7 52 797 52 L 797 52 L 797 0 L 416 0 Z"
          strokeWidth="0"
        ></path>{" "}
        <path
          fill="#f3f4f6"
          d="M 796 52 C 936.1 52 1122.9 0 1263 0 L 1263 0 L 1263 0 L 796 0 Z"
          strokeWidth="0"
        ></path>
      </svg>
      <div className="bg-cover !bg-custom-image">
        <div className="flex flex-col lg:flex-row justify-center p-6 md:p-20 gap-6">

          <div className="text-left text-white">
            <h1 className="text-4xl uppercase font-semibold mb-5">
              Our bespoke website include the fllowing
            </h1>
            <p className="font-thin lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              omnis cumque quae harum totam fuga, commodi inventore aliquam
              eveniet aperiam fugiat reiciendis a magnam adipisci exercitationem
              atque assumenda culpa consequuntur.
            </p>
            <button
              type="button"
              className="mt-5 uppercase border border-white bg-custom-gradient rounded-full w-fit p-2 px-4 flex flex-row gap-2"
            >
              Contact Us
              <GoArrowUpRight className="mt-1" />
            </button>
          </div>


          <div className="flex flex-col gap-10">

            <div className="bg-white rounded-lg p-6 w-full gap-4 grid mx-auto">
              <img src={globe} className="w-10 h-10" alt="Icon 2" />
              <h2 className="text-lg font-semibold capitalize lg:text-xl">
                Bespoke Design
              </h2>
              <p className="font-thin lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam voluptates officia ipsum porro numquam eaque sed quod
                blanditiis commodi cumque hic tenetur sapiente velit harum,
                nostrum ipsam est reiciendis facere!
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 w-full gap-4 grid mx-auto">
              <img src={globe} className="w-10 h-10" alt="Icon 2" />
              <h2 className="text-lg font-semibold capitalize lg:text-xl">
                Mobile Optimised
              </h2>
              <p className="font-thin lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam voluptates officia ipsum porro numquam eaque sed quod
                blanditiis commodi cumque hic tenetur sapiente velit harum,
                nostrum ipsam est reiciendis facere!
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 w-full gap-4 grid mx-auto">
              <img src={globe} className="w-10 h-10" alt="Icon 2" />
              <h2 className="text-lg font-semibold capitalize lg:text-xl">
                SEO Optimised
              </h2>
              <p className="font-thin lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam voluptates officia ipsum porro numquam eaque sed quod
                blanditiis commodi cumque hic tenetur sapiente velit harum,
                nostrum ipsam est reiciendis facere!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
