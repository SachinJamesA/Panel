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

      {/* Testimonials Section */}
      <section className="bg-blue-50 py-16 lg:py-24 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What Our Clients Say</h2>
          <p className="text-lg md:text-xl font-light mb-12">
            Hear from some of our satisfied clients who have transformed their brands with us.
          </p>

          <div className="flex flex-wrap justify-center gap-12">
            <div className="bg-white shadow-lg rounded-lg p-6 w-80">
              <p className="text-gray-600 italic mb-4">
                "The team at this agency helped us grow our online presence significantly!"
              </p>
              <h3 className="font-bold">John Doe</h3>
              <p className="text-gray-500">CEO, Company A</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 w-80">
              <p className="text-gray-600 italic mb-4">
                "Their content strategy has been a game changer for our engagement."
              </p>
              <h3 className="font-bold">Jane Smith</h3>
              <p className="text-gray-500">Marketing Director, Company B</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 w-80">
              <p className="text-gray-600 italic mb-4">
                "We saw an immediate increase in followers and brand awareness."
              </p>
              <h3 className="font-bold">Alice Johnson</h3>
              <p className="text-gray-500">Owner, Company C</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-blue-900 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Your Brand to the Next Level?
          </h2>
          <p className="text-lg md:text-xl font-light mb-8">
            Contact us today for a free consultation and let’s create a strategy that works for you!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 font-semibold py-3 px-6 rounded hover:bg-gray-200 transition duration-200"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
