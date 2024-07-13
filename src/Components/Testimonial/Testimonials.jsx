import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import TestimonialData from "./Testimonial.json";


const Testimonials = () => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className="text-yellow-500"
          />
        ))}
        {halfStar && (
          <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
        )}
      </>
    );
  };

  return (
    <div className="p-6 md:px-20 md:py-0">
      <h1 className="text-2xl md:text-4xl capitalize text-center font-semibold">
        What our clients say about us
      </h1>

      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 my-8">
        {TestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:p-4 p-3 gap-3 bg-white shadow-lg rounded-lg max-w-xs lg:max-w-sm m-3"
          >
            <img
              src={testimonial.img}
              alt=""
              className=" rounded-full mx-auto"
            />
            <div className="text-center">
              {renderStars(testimonial.rating)}
            </div>
            <p className="text-gray-600 text-left text-sm lg:text-lg">
              {testimonial.description}
            </p>

            <div className="flex justify-between mt-4">
              <p className="text-sm font-semibold text-center">
                {testimonial.name}
              </p>

              <p className="text-sm underline bg-clip-text text-transparent bg-gradient-to-r from-purple-950 via-pink-500 to-orange-300">
                Read More
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
