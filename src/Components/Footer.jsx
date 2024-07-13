import { GoArrowUpRight } from "react-icons/go";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";

const Footer = () => {
  return (
    <div className="px-6 md:px-20 pt-12 pb-7 bg-darket-purple ">
      {/* BUTTONS */}
      <div className="flex flex-col gap-6 md:flex-row justify-between">
        <div className="flex flex-row  gap-2 bg-custom-gradient-hero rounded-full px-7 py-3">
          <img src="/src/assets/wm.png" alt="" className="w-1/12" />
          <p className="uppercase text-sm font-semibold">Web Magnetism</p>
        </div>

        <div className="flex flex-row items-center gap-2 bg-custom-gradient-hero text-white rounded-full px-7 py-3">
          <p className="uppercase text-sm">Contact Us</p>
          <GoArrowUpRight />
        </div>
      </div>

      {/* HORIZONTAL GRADIENT LINE */}
      <hr className="my-9 bg-gradient-to-r from-purple-900 via-pink-400 to-orange-400 h-0.5 border-0" />

      {/* LINKS */}
      <div className="flex flex-col md:flex-row gap-14">
        {/* COLUMN 1 */}
        <div className="md:w-2/6">
          <h1 className="text-xl text-white capitalize pb-2 font-semibold">
            Services
          </h1>

          <hr className="border-0 h-0.5 bg-white" />

          <div className="mt-3 flex flex-row justify-between text-xs">
            <div className="text-left font-extralight text-white space-y-2">
              <p className="font-bold">Digital Marketing</p>
              <p>Email Nurture</p>
              <p>SEO</p>
              <p>Social Media Marketing</p>
              <p>Conversion Rate Optimization</p>
              <p>Copy Writing</p>
              <p>Email Marketing</p>
              <p>Remarketing</p>
              <p>PPC</p>
            </div>

            <div className="text-left font-extralight text-white space-y-2">
              <p className="font-bold">Bespoke Web Design</p>
              <p>Web Design</p>
              <p>Web Redesign</p>
              <p>UI/UX Design</p>
              <p>Brand Ientity and Logo</p>
              <p className="font-bold">App Development</p>
            </div>
          </div>
        </div>

        {/* COLUMN2 */}
        <div className="w-1/2 md:w-1/6">
          <h1 className="text-lg text-white capitalize pb-2 font-semibold">
            Home
          </h1>

          <hr className="border-0 h-0.5 bg-white" />

          <h1 className="mt-3 text-lg text-white capitalize pb-2 font-semibold">
            About us
          </h1>

          <hr className="border-0 h-0.5 bg-white" />

          <h1 className="mt-3 text-lg text-white capitalize pb-2 font-semibold">
            contact us
          </h1>

          <hr className="border-0 h-0.5 bg-white" />

          <p className="mt-14 text-white font-extralight text-sm">
            United Kington, <br /> TW4 7LU <br /> London
          </p>
        </div>

        {/* COLUMN3 */}
        <div className="w-1/2 md:w-1/6">
          <h1 className="text-lg text-white capitalize pb-2 font-semibold">
            Resources
          </h1>

          <hr className="border-0 h-0.5 bg-white" />

          <div className="mt-3 text-left text-xs font-extralight text-white space-y-2 capitalize">
            <p>our work</p>
            <p>Insights</p>
          </div>
        </div>

        {/* COLUMN4 */}
        {/* SOCIAL MEDIA ISONS */}
        <div className="w-1/2 md:w-1/6">
          <h1 className="text-lg text-white capitalize pb-2 font-semibold">
            Social Media
          </h1>

          <hr className="border-0 h-0.5 bg-white" />

          <div className="mt-3 text-left text-xs font-light text-white space-y-2 capitalize">
            {/* size-4 to change the size of icons */}
            <div className="flex flex-row gap-3 items-center">
              <TiSocialFacebook className="rounded-full bg-purple-500 size-4" />{" "}
              <p>Facebook</p>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <FaInstagram className=" rounded-full bg-purple-500 size-4 p-0.5" />{" "}
              <p>Instagram</p>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <FaXTwitter className="rounded-full bg-purple-500 size-4 p-0.5" />{" "}
              <p>Twitter</p>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <FaTelegramPlane className="rounded-full bg-purple-500 size-4 p-0.5" />{" "}
              <p>Telegram</p>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <FaYoutube className="rounded-full bg-purple-500 size-4 p-0.5" />{" "}
              <p>YouTube</p>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <FaTiktok className="rounded-full bg-purple-500 size-4 p-0.5" />{" "}
              <p>TikTok</p>
            </div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="flex flex-row mt-7 text-right gap-4 text-white w-full justify-end content-end self-end">
        <div className="w-full md:w-2/6  ">
          <p className="font-thin text-base text-left">
            Subscribe to our weekly newsletter today!
          </p>

          {/* ENTER EMAIL */}
          <div className="mt-2 flex flex-row gap-0">
            <input
              type="mail"
              id="email"
              className="grid grid-col-1 shadow-sm bg-transparent border border-white text-white text-xs rounded-l-lg w-full py-2.5 px-2"
              placeholder="Enter Your Email Address"
            />
            <i>
              <GoChevronRight className="items-center bg-custom-gradient-hero min-w-10 min-h-10 rounded-r-lg border border-white" />
            </i>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-white font-thin text-sm">
        <p>
          ©Copyright. 2024 Web Magnetism All rights reserved I Terms and
          condition I Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Footer;
