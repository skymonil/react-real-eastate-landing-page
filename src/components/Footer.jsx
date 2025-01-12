import React from "react";
import { assets} from "../assets/assets";
const Footer = () => {
  return (
    <div
      id="#Footer"
      className="w-full overflow-hidden pt-10 px-4 md:px-20 lg:px-32 bg-gray-900"
    >
      <div className="conatiner mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img src={assets.logo_dark} alt=""/>
            <p className="to-gray-400 mt-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum accusantium temporibus laborum maxime earum, ullam eos ducimus tempore dolor in exercitationem, quos dolores repellat, eaque enim consectetur? Vero, adipisci quis.</p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:md-0">
            <h3 className="text-white text-lg font-bold mb-4">Company </h3>
            <ul className="flex flex-col gap-2 text-gray-400">
                <a href='#Header' className="hover:text-white">Home</a>
                <a href='#About' className="hover:text-white">About Us</a>
                <a href='#Contact' className="hover:text-white">Contact Us</a>
                <a href='#' className="hover:text-white">Privacy Policy</a>
            </ul>
        </div>
        <div className="w-full md:w-1/3 ">
        <h3 className="text-white text-lg font-bold mb-4">Subscribe to our newsletter</h3>
        <p className="text-gray-400 md-4 max-w-80">The latest news, articles, and resources, sent to your inbox weekly</p>

        </div >
        <input type="email" placeholder="Enter your Email" className="p-2 rounded bg-gray-800 text-gray-400 border-gray-700 focus:outline-none md:w-auto"/>
        <button className="py-2 px-4 rounded bg-blue-500 text-white">Subscribe</button>
      </div>
    </div>
  );
};

export default Footer;
