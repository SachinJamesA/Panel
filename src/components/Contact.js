import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="md:flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="md:w-[40%] mb-8 md:mb-0 p-6 bg-white shadow-lg rounded-lg md:mr-12 backdrop-filter backdrop-blur-md bg-white/80">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center max-w-xs mx-auto">Get in Touch</h1>
        <p className="text-gray-700 mb-4">
          We’d love to hear from you! Whether you have questions about our services, need support, or just want to chat, feel free to reach out. Our team is here to help you!
        </p>
        <p className="text-gray-700 mb-4">
          You can also connect with us on social media or visit our office. We look forward to your message!
        </p>
        <div className="text-gray-700 mb-4">
          <p className="mb-2">Email: <Link to="mailto:adminn@prosmmindia.com" className="text-blue-500 hover:underline">adminn@prosmmindia.com</Link></p>
          <p>Phone: <Link to="tel:+918141372744" className="text-blue-500 hover:underline">+91 8141372744</Link></p>
        </div>
      </div>
      <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md md:w-1/2 m-auto md:m-0 backdrop-filter backdrop-blur-md bg-white/80">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Contact Us</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Your Message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500 focus:border-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
