import insight1 from "../assets/insight1.png";
import insight2 from "../assets/insight2.png";
import insight3 from "../assets/insight3.png";
const Insight = () => {
  return (
    <div className="relative my-14">

      <div className="relative w-full bg-custom-insight">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 230"
          className="bg-transparent"
        >
          <path
            fill="#FFFFFF"
            d="M0,32L80,69.3C160,107,320,181,480,181.3C640,181,800,107,960,80C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>

        <h1 className="text-white text-2xl md:text-4xl font-semibold text-center capitalize">Latest Insights</h1>

        <div className="mt-7 px-6 md:px-20 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <div className="w-full">
            <img src={insight1} alt="" className="w-full h-auto" />
          </div>
          <div className="w-full">
            <img src={insight2} alt="" className="w-full h-auto" />
          </div>
          <div className="w-full">
            <img src={insight3} alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>

{/* CARDS */}
      <div className="mt-4 px-6 md:px-20 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">

{/* CARD1 */}
        <div className="p-4 grid gap-4 shadow-lg">
          <h1 className="text-xl font-semibold capitalize">
            Websites accesibility and why it matters
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
            vulputate aen dolor sit amet conss ...
          </p>
          <div className="flex justify-between lg:text-lg">
            <p className="font-thin">25.01.2024</p>
            <p className="text-sm underline bg-clip-text text-transparent bg-gradient-to-r from-purple-950 via-pink-500 to-orange-300">
              Read More
            </p>
          </div>
        </div>

{/* CARD2 */}
        <div className="p-4 grid gap-4 shadow-lg">
          <h1 className="text-xl font-semibold capitalize">
            Websites accesibility and why it matters
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
            vulputate aen dolor sit amet conss ...
          </p>
          <div className="flex justify-between lg:text-lg">
            <p className="font-thin">25.01.2024</p>
            <p className="text-sm underline bg-clip-text text-transparent bg-gradient-to-r from-purple-950 via-pink-500 to-orange-300">
              Read More
            </p>
          </div>
        </div>

{/* CARD3 */}
        <div className="p-4 grid gap-4 shadow-lg">
          <h1 className="text-xl font-semibold capitalize">
            Websites accesibility and why it matters
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
            vulputate aen dolor sit amet conss ...
          </p>
          <div className="flex justify-between lg:text-lg">
            <p className="font-thin">25.01.2024</p>
            <p className="text-sm underline bg-clip-text text-transparent bg-gradient-to-r from-purple-950 via-pink-500 to-orange-300">
              Read More
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Insight;
