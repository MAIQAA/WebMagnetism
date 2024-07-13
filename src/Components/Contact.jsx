const Contact = () => {
  return (
    <div className="p-6 md:p-20 bg-gray-200 !bg-custom-image bg-cover bg-no-repeat bg-center flex flex-col lg:flex-row justify-between ">
      {/* TEXT */}
      <div className="w-full lg:w-1/3">
        <div>
          <h1 className="text-2xl md:text-4xl capitalize text-left font-semibold w-auto">
            Lets Talk about your Project
          </h1>

          <p className="font-thin mt-4 lg:text-lg">
            Do you have a project in mind, that you feel our approach would work
            well for?
            {/* hr is used to creat padding between two points without using <br/> */}
            <hr className="pt-4" />
            We`re always happy to discuss your project with you and put together
            a free proposal.
          </p>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="mt-6 lg:mt-0 p-10 md:self-center w-full lg:w-2/4 lg:ml-20 flex-1 bg-white rounded-lg">
        <p className="mb-6 font-semibold text-base lg:text-lg">
          {" "}
          Just fill out the form below to get started.
        </p>

        <form action="#" className="space-y-4">
          {/* NAME */}
          <div>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5"
              placeholder="Name"
              required
            />
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5"
              placeholder="Email"
              required
            />
          </div>

          {/* COMPANY NAME */}
          <div>
            <input
              type="text"
              id="company"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5"
              placeholder="Company"
            />
          </div>

          {/* PHONE NUMBER */}
          <div>
            <input
              type="number"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5"
              placeholder="Phone Number"
              required
            />
          </div>

          {/* FILE UPLOAD */}
          <div>
            <input
              type="file"
              id="submit"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5"
              placeholder="Send Us Your Brief"
            />
          </div>

          {/* MESSAGE */}
          <div className="sm:col-span-2">
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-500 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
              placeholder="Message"
            ></textarea>
          </div>

          {/* CHECKBOX */}
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-gray-500 bg-gray-50 border-gray-300 "
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm lg:text-base text-gray-400"
            >
              I agree to have my information stored{" "}
              <b className="bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-orange-300 to-orange-500 font-normal">
                Privacy Policy
              </b>
            </label>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-custom-gradient-hero w-full capitalize"
          >
            Send your message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
