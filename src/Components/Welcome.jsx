import welcome from "../assets/welcome.png";
import { GoArrowUpRight } from "react-icons/go";

const Welcome = () => {
  return (
    <div className="w-3/4 mx-auto flex flex-col md:flex-row py-6 justify-center gap-6">
      <div className="grid gap-6 flex-1">
        <h1 className="text-3xl capitalize font-semibold text-center md:text-left">
          Welcome to Web Magnetism
        </h1>

        <div className="flex flex-col gap-3 text-center md:text-left lg:text-lg">
          <p className="font-thin">
            Your hub for bespoke web design and digital marketing success. We
            seamlessly merge creativity and SEO expertise to craft visually
            stunning websites that magnetize audiences.
          </p>
          <p className="font-thin">
            Our digital marketing, from SEO mastery to impactful campaigns,
            ensures your brand`s resonance online. At Web Magnetism, we`re not
            just designers; we`re digital architects, sculpting unique online
            experiences that elevate your brand.
          </p>
          <p className="font-thin">
            Navigate the digital landscape with confidence – choose Web
            Magnetism for tailored web design and strategic digital marketing,
            where innovation meets results for a compelling online journey
          </p>
        </div>

        <button
          type="button"
          className="uppercase border border-white text-white bg-custom-gradient-hero rounded-full w-fit p-2 px-5 flex flex-row gap-2 mx-auto md:mx-0"
        >
          About Us
          <GoArrowUpRight className="mt-1" />
        </button>
      </div>

      <div className="items-center justify-center flex-1">
        <img
          src={welcome}
          className="object-contain h-full"
          alt="Welcome to Web Magnetism"
        />
      </div>
    </div>
  );
};

export default Welcome;
