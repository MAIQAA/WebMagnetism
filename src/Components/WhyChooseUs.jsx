import icon1 from "../assets/icon.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";

const WhyChooseUs = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-gray-100 pb-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="white"
          fillOpacity="1"
          d="M0,224L60,197.3C120,171,240,117,360,90.7C480,64,600,64,720,64C840,64,960,64,1080,90.7C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <div className="max-w-screen-lg mx-auto px-0 md:mx-6 bg-gray-100">
        <h1 className="font-semibold capitalize text-3xl text-center mb-10">
          Why choose us
        </h1>

        {/* SVG Container */}
        <foreignObject x="50" y="50" width="900" height="300">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex gap-4 items-center mb-4">
                <img src={icon1} className="w-10 h-10" alt="Icon 1" />
                <h2 className="text-lg font-semibold lg:text-xl">
                  Take Control of Your Entire Marketing Landscape
                </h2>
              </div>
              <p className="font-thin lg:text-lg">
                We`ve curated top-tier teams under one roof, enabling you to
                bypass the complexities of overseeing a network of agencies and
                internal hires.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex gap-4 items-center mb-4">
                <img src={icon2} className="w-10 h-10" alt="Icon 2" />
                <h2 className="text-lg font-semibold lg:text-xl">
                  Your Business`s Dedicated Marketing Wing
                </h2>
              </div>
              <p className="font-thin lg:text-lg">
                Even if your business is modest in size, having a well-versed
                extension focused on digital marketing provides a distinct
                competitive edge.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex gap-4 items-center mb-4">
                <img src={icon3} className="w-10 h-10" alt="Icon 3" />
                <h2 className="text-lg font-semibold lg:text-xl">
                  A Reliable Collaborator
                </h2>
              </div>
              <p className="font-thin lg:text-lg">
                Our exceptional team members function seamlessly as an integral
                part of your team, fully committed to your success and the
                sanctity of your brand.
              </p>
            </div>
          </div>
        </foreignObject>
      </div>
    </div>
  );
};

export default WhyChooseUs;
