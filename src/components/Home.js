import React from "react";
import serviceImage1 from "../assets/service1.jpg"; // Add your actual image path
import serviceImage2 from "../assets/service2.jpg";
import serviceImage3 from "../assets/service3.jpg";
import serviceImage4 from "../assets/serviceImage4.jpg"; // Paid Advertising
import serviceImage5 from "../assets/serviceImage5.jpg"; // Influencer Marketing
import serviceImage6 from "../assets/serviceImage6.jpg"; // Community Management

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Elevate Your Brand with Expert Social Media Marketing
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Unlock the full potential of your business through effective
            social media strategies tailored to your needs.
          </p>
          <a
            href="#services"
            className="inline-block bg-white text-blue-900 font-semibold py-3 px-6 rounded hover:bg-gray-200 transition duration-200"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Services</h2>
          <p className="text-lg md:text-xl font-light mb-12">
            We offer a wide range of services to help your brand grow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={serviceImage1} alt="Social Media Management" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Social Media Management</h3>
              <p className="text-gray-600">
                We handle your social media profiles, ensuring consistent branding and engagement with your audience.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={serviceImage2} alt="Content Creation" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Content Creation</h3>
              <p className="text-gray-600">
                Our creative team crafts compelling content tailored to resonate with your target audience.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={serviceImage3} alt="Analytics & Reporting" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Analytics & Reporting</h3>
              <p className="text-gray-600">
                We provide detailed analytics to track your social media performance and refine strategies.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={serviceImage4} alt="Paid Advertising" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Paid Advertising</h3>
              <p className="text-gray-600">
                We create targeted ad campaigns on platforms like Facebook and Instagram to boost your reach.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={serviceImage5} alt="Influencer Marketing" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Influencer Marketing</h3>
              <p className="text-gray-600">
                Collaborate with influencers to enhance your brand visibility and credibility.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={serviceImage6} alt="Community Management" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Community Management</h3>
              <p className="text-gray-600">
                Engage and nurture your online community, turning followers into loyal customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">HOW IT WORK?</h2>
        <p className="text-gray-400 mb-12">A FEW STEPS TO PROMOTE YOUR BUSINESS OR PERSONAL PAGE</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-4xl font-bold mb-2">Step</div>
            <div className="text-6xl text-gray-600">1</div>
            <h3 className="text-xl font-bold mt-4">REGISTER AN ACCOUNT</h3>
            <p className="text-gray-400 mt-2">Go to the registration page and fill in all the fields and register.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-4xl font-bold mb-2">Step</div>
            <div className="text-6xl text-gray-600">2</div>
            <h3 className="text-xl font-bold mt-4">ORDER A SERVICE</h3>
            <p className="text-gray-400 mt-2">Choose any of the services that you like and place your order.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-4xl font-bold mb-2">Step</div>
            <div className="text-6xl text-gray-600">3</div>
            <h3 className="text-xl font-bold mt-4">GET YOUR POPULARITY</h3>
            <p className="text-gray-400 mt-2">Monitor how your services are performed efficiently and quickly.</p>
          </div>
        </div>
      </div>
    </section>

      {/* Call to Action Section */}
      <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 md:flex items-center">
        {/* Left Side: Image or Illustration */}
        <div className="md:w-1/2 text-center md:text-left">
          <div className="bg-purple-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">WE PREFER QUALITY</h2>
            <p className="text-gray-400">
              We care about our users, so we give the best and are ready to
              answer every question 24/7.
            </p>
          </div>
        </div>

        {/* Right Side: Features List */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 space-y-4">
          <div className="bg-gradient-to-r from-pink-600 to-purple-700 p-6 rounded-lg flex items-center">
            <span className="text-2xl">🏆</span>
            <div className="ml-4">
              <h3 className="text-xl font-bold">HIGH QUALITY PROMOTION</h3>
              <p className="text-gray-200">
                We use only proven account promotion tactics without losing the
                trust of the audience.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-600 to-purple-700 p-6 rounded-lg flex items-center">
            <span className="text-2xl">🚀</span>
            <div className="ml-4">
              <h3 className="text-xl font-bold">FAST START</h3>
              <p className="text-gray-200">
                If you dream of becoming popular and communicating with an
                audience of thousands, your dream will come true very soon.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-600 to-purple-700 p-6 rounded-lg flex items-center">
            <span className="text-2xl">🎧</span>
            <div className="ml-4">
              <h3 className="text-xl font-bold">24/7 SUPPORT</h3>
              <p className="text-gray-200">
                We solve issues in the shortest time to ensure customers are
                satisfied with our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;
