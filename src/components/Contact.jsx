import React, { useState } from "react";
import { toast } from "react-toastify";
import {motion} from 'framer-motion'
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5ca5e84c-d73d-4754-9d54-7c7d7dfb42af");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form submitted successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-center mb-2 font-bold text-2xl sm:text-4xl">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make a Move? Let’s Build Your Future Together
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8" onSubmit={onSubmit}>
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <label htmlFor="name" className="text-left block">
              Your Name
            </label>
            <input
              className="border border-gray-300 px-4 mt-2 rounded py-3 w-full"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <label htmlFor="email" className="text-left block">
              Your Email
            </label>
            <input
              className="border border-gray-300 px-4 mt-2 rounded py-3 w-full"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="text-left block">
            Message
          </label>
          <textarea
            className="border border-gray-300 px-4 mt-2 rounded py-3 w-full"
            id="message"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded"
          >
            Send Message
          </button>
        </div>
        {result && <p className="mt-4 text-center">{result}</p>}
      </form>
    </motion.div>
  );
};

export default Contact;
