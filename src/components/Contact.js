import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section
      className="relative bg-cover bg-left"
      style={{ backgroundImage: "url('https://i.ibb.co/9p3Cnk9/slider-2.jpg')" }}
    >
      <div className="bg-gradient-to-r from-blue-600/90 to-blue-700/90 py-28">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            {/* Contact Info Section */}
            <div className="w-full lg:w-1/2 flex items-center px-4">
              <div className="space-y-6">
                <h2 className="text-red-700 text-3xl font-semibold">
                  Have Any Questions?
                </h2>
                <p className="text-gray-200">
                Get The Best Cheapest Smm Provider. Our Smm Panel Providing Quality Support Service.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-white">
                    <i className="fas fa-mobile-alt text-2xl mr-4"></i>
                    <h4>+91 8141372744</h4>
                  </li>
                  <li className="flex items-center text-white">
                    <i className="fas fa-at text-2xl mr-4"></i>
                    <h4>adminn@prosmmindia.com</h4>
                  </li>
                  <li className="flex items-center text-white">
                    <i className="fas fa-map-marker-alt text-2xl mr-4"></i>
                    <h4>INDIA</h4>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="w-full lg:w-1/2 flex items-center px-4 mt-12 lg:mt-0">
              <div className="relative bg-white p-8 rounded-lg shadow-lg w-full">
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      className="w-full border-b-2 border-gray-200 py-3 px-2 text-lg font-semibold focus:outline-none focus:border-red-400 transition"
                      placeholder="Enter Your Name *"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="w-full border-b-2 border-gray-200 py-3 px-2 text-lg font-semibold focus:outline-none focus:border-red-400 transition"
                      placeholder="Enter Your Email *"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      rows="4"
                      className="w-full border-b-2 border-gray-200 py-3 px-2 text-lg font-semibold focus:outline-none focus:border-red-400 transition"
                      placeholder="Enter Your Message *"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-red-400 text-white font-semibold py-3 px-8 rounded-full hover:bg-red-500 transition"
                  >
                    Send Us <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
