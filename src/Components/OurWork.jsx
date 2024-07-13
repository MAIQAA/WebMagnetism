import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import { GoArrowUpRight } from "react-icons/go";
const OurWork = () => {
  return (
    <div className="p-6 md:p-20">
      {/* Heading */}
      <h1 className="flex text-2xl md:text-4xl  capitalize font-semibold">
        Our Work
      </h1>

      {/* Button and Paragrap */}
      <div className="md:flex mt-6 text-left justify-between space-y-6">
        <p className="font-thin lg:w-2/5 md:w-3/5 lg:text-lg">
          We don’t claim to be gurus or wizards. We’re just a super experienced,
          passionate team who knows how to get results for our clients. All our
          work is custom and thoughtfully designed, written, and developed with
          your business goals in mind.
        </p>

        <div className="flex flex-col justify-between md:w-2/5">
          {/* EXTRA DIV WHICH GROWS TO TAKE EXTRA SPACE SO THAT THE BUTTON STAYS AT THE BOTTOM RIGHT */}
          <div className="flex-grow"></div>{" "}
          <div className="grid justify-end">
            <button
              type="button"
              className="h-10 uppercase border border-white bg-custom-gradient-hero text-white rounded-full mx-auto p-2 px-5 flex flex-row gap-2"
            >
              View Full Portfolio
              <GoArrowUpRight className="mt-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 py-12 gap-10 shadow-gray-400 mx-auto drop-shadow-xl">
        {/* CARD1 */}
        <div className="text-left space-y-3 w-full">
          <img src={work3} alt="" className="w-full h-auto" />

          <h1 className="uppercase lg:text-lg">Redesign of b2b website</h1>

          <p className="text-xs lg:text-base font-light capitalize">
            Web Design
          </p>
        </div>

        {/* CARD2 */}
        <div className="text-left space-y-3 w-full">
          <img src={work2} alt="" className="w-full h-auto" />

          <h1 className="uppercase lg:text-lg">Mobile Application</h1>

          <p className="text-xs lg:text-base font-light capitalize">
            App development
          </p>
        </div>

        {/* CARD3 */}
        <div className="text-left space-y-3 w-full">
          <img src={work1} alt="" className="w-full h-auto" />

          <h1 className="uppercase lg:text-lg">E-commerce</h1>

          <p className="text-xs lg:text-base font-light capitalize">
            Web Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
