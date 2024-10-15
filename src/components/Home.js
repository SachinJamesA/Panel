import React from "react";
import { FaTiktok, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    id: 1,
    title: "Tiktok",
    description: `Buy 100% Tiktok REAL Followers Worldwide,
                    Buy 100% Tiktok REAL Female Followers,
                    Buy 100% Tiktok REAL Profile Followers,
                    Buy 100% Tiktok REAL Photo Likes and Views`,
    bgColor: "bg-gray-700",
    textColor: "text-white",
    buttonColor: "bg-white text-gray-800",
    icon: <FaTiktok className="text-white" size={40} />,
  },
  {
    id: 2,
    title: "Instagram",
    description: `Buy 100% Instagram REAL Followers Worldwide,
                    Buy 100% Instagram REAL INDIAN Followers,
                    Buy 100% Instagram REAL TARGETED Followers,
                    Buy 100% Instagram REAL Photo Likes and Views`,
    bgColor: "bg-purple-600",
    textColor: "text-white",
    buttonColor: "bg-white text-purple-800",
    icon: <FaInstagram className="text-white" size={40} />,
  },
  {
    id: 3,
    title: "Facebook",
    description: `Buy 100% Facebook REAL Page Likes Indian,
                    Buy 100% Facebook REAL Post Likes,
                    Buy 100% Facebook REAL Followers Targeted,
                    Buy 100% Facebook REAL Profile Followers`,
    bgColor: "bg-blue-500",
    textColor: "text-white",
    buttonColor: "bg-white text-blue-800",
    icon: <FaFacebookF className="text-white" size={40} />,
  },
  {
    id: 4,
    title: "Youtube",
    description: `Buy 100% Youtube REAL SUBSCRIBERS Worldwide,
                    Buy 100% Youtube REAL INDIAN SUBSCRIBERS,
                    Buy 100% Youtube REAL VIEWS,
                    Buy 100% Youtube REAL COUNTRY TARGETED VIEWS`,
    bgColor: "bg-red-600",
    textColor: "text-white",
    buttonColor: "bg-white text-red-800",
    icon: <FaYoutube className="text-white" size={40} />,
  },
];

const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with 1000ms animation duration
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white min-h-screen flex items-center justify-center dark:text-white dark:bg-gray-900">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Elevate Your Brand with Expert Social Media Marketing
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Unlock the full potential of your business through effective social
            media strategies tailored to your needs.
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
      {/* <section id="services" className="py-16 lg:py-24 px-6 md:px-12 lg:px-20">
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
      </section> */}

      {/* Top Selling Services Section */}
      <section className="text-black py-16 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-8">
            Our Top Selling Services
          </h2>
          <p className="text-center mb-12 text-lg max-w-xl mx-auto">
            SmmSocialMedia is the #1 Best SMM Panel for Instagram, Facebook, and
            other social media platforms. You can provide quality and cheap SMM
            services to your customers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`${service.bgColor} p-6 rounded-lg`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-xl font-bold ${service.textColor}`}>
                    {service.title}
                  </h3>
                  <span>{service.icon}</span>
                </div>
                <p
                  className={`mb-6 ${service.textColor}`}
                  style={{ maxHeight: "100px", overflowY: "auto" }}
                >
                  {service.description}
                </p>
                <button
                  className={`w-full py-2 rounded-full ${service.buttonColor} font-bold`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="text-black py-16 dark:text-white dark:bg-gray-900">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">HOW IT WORK?</h2>
    <p className="text-gray-400 mb-12">
      A FEW STEPS TO PROMOTE YOUR BUSINESS OR PERSONAL PAGE
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Step 1 */}
      <div className="text-black border border-gray-500 border-solid p-6 rounded-lg dark:text-white dark:bg-gray-800 dark:border-0">
        <div className="text-4xl font-bold mb-2">Step</div>
        <div className="text-6xl text-gray-600">1</div>
        <h3 className="text-xl font-bold mt-4">REGISTER AN ACCOUNT</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Go to the registration page and fill in all the fields and register.
        </p>
        <img src="/path/to/icon1.png" alt="Register Icon" className="mx-auto mt-4" />
      </div>

      {/* Step 2 */}
      <div className="text-black border border-gray-500 border-solid p-6 rounded-lg dark:text-white dark:bg-gray-800 dark:border-0">
        <div className="text-4xl font-bold mb-2">Step</div>
        <div className="text-6xl text-gray-600">2</div>
        <h3 className="text-xl font-bold mt-4">ORDER A SERVICE</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Choose any of the services that you like and place your order.
        </p>
        <img src="/path/to/icon2.png" alt="Order Icon" className="mx-auto mt-4" />
      </div>

      {/* Step 3 */}
      <div className="text-black border border-gray-500 border-solid p-6 rounded-lg dark:text-white dark:bg-gray-800 dark:border-0">
        <div className="text-4xl font-bold mb-2">Step</div>
        <div className="text-6xl text-gray-600">3</div>
        <h3 className="text-xl font-bold mt-4">GET YOUR POPULARITY</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Monitor how your services are performed efficiently and quickly.
        </p>
        <img src="/path/to/icon3.png" alt="Popularity Icon" className="mx-auto mt-4" />
      </div>
    </div>

    {/* Call to Action Button */}
    <div className="mt-8">
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-blue-600">
        Get Started Now
      </button>
    </div>
  </div>
</section>


      {/* Call to Action Section */}
      <section className="dark:bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 flex justify-between relative">
        
        {/* Middle Line */}
        <div className="absolute left-[51%] transform -translate-x-1/2 top-0 h-full w-[2px] bg-gray-300"></div>

        {/* Left Side: Image or Illustration */}
        <div className="w-1/2 text-center md:text-left flex flex-col justify-center relative z-10">
          <div className="bg-purple-900 p-8 rounded-lg" data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-4">WE PREFER QUALITY</h2>
            <p className="text-gray-400">
              We care about our users, so we give the best and are ready to
              answer every question 24/7.
            </p>
          </div>

          {/* Arrow pointing from the left content to the middle line */}
          <div className="absolute right-[-15px] top-1/2 transform -translate-y-1/2 w-[30px] h-[2px] bg-gray-300"></div>
        </div>

        {/* Right Side: Features List */}
        <div className="w-1/2 pl-8 space-y-12 relative z-10">
          <div
            className="bg-gradient-to-r from-pink-600 to-purple-700 p-8 rounded-lg flex items-center relative"
            data-aos="fade-up"
          >
            {/* Arrow pointing to the middle line */}
            <div className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 w-[30px] h-[2px] bg-gray-300"></div>
            <span className="text-3xl">🏆</span>
            <div className="ml-6">
              <h3 className="text-xl font-bold">HIGH QUALITY PROMOTION</h3>
              <p className="text-gray-200">
                We use only proven account promotion tactics without losing the
                trust of the audience.
              </p>
            </div>
          </div>

          <div
            className="bg-gradient-to-r from-pink-600 to-purple-700 p-8 rounded-lg flex items-center relative"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Arrow pointing to the middle line */}
            <div className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 w-[30px] h-[2px] bg-gray-300"></div>
            <span className="text-3xl">🚀</span>
            <div className="ml-6">
              <h3 className="text-xl font-bold">FAST START</h3>
              <p className="text-gray-200">
                If you dream of becoming popular and communicating with an
                audience of thousands, your dream will come true very soon.
              </p>
            </div>
          </div>

          <div
            className="bg-gradient-to-r from-pink-600 to-purple-700 p-8 rounded-lg flex items-center relative"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Arrow pointing to the middle line */}
            <div className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 w-[30px] h-[2px] bg-gray-300"></div>
            <span className="text-3xl">🎧</span>
            <div className="ml-6">
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
