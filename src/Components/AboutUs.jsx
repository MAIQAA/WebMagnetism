import image from "../assets/funnel.png";

const AboutUs = () => {
  return (
    <div className="justify-center mx-auto lg:w-3/5 text-center mt-20 px-6 gap-6 grid">
      <h1 className="text-3xl font-semibold capitalize">
        An Integrated Team for unique Web design and strategic digital marketing{" "}
      </h1>
      <p className="px-6 font-light lg:text-lg">
        Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate
        aenean aliquam accumsan vestibulum in sit Blandit sodales lacus
        vulputate aenean aliquam accumsan vestibulum in sit m accumsan.
      </p>
      <img src={image} className="h-4/5 mx-auto" />
    </div>
  );
};

export default AboutUs;
