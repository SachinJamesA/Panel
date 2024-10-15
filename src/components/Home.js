import React from "react";

const services = [
  {
    id: 1,
    title: 'Tiktok',
    description: `Buy 100% Tiktok REAL Followers Worldwide,
                  Buy 100% Tiktok REAL Female Followers,
                  Buy 100% Tiktok REAL Profile Followers,
                  Buy 100% Tiktok REAL Photo Likes and Views`,
    bgColor: 'bg-gray-800',
    textColor: 'text-white',
    buttonColor: 'bg-purple-600 text-white',
    icon: '🔵',
  },
  {
    id: 2,
    title: 'Instagram',
    description: `Buy 100% Instagram REAL Followers Worldwide,
                  Buy 100% Instagram REAL INDIAN Followers,
                  Buy 100% Instagram REAL TARGETED Followers,
                  Buy 100% Instagram REAL Photo Likes and Views`,
    bgColor: 'bg-gray-800',
    textColor: 'text-white',
    buttonColor: 'bg-purple-600 text-white',
    icon: '🟣',
  },
  {
    id: 3,
    title: 'Facebook',
    description: `Buy 100% Facebook REAL Page Likes Indian,
                  Buy 100% Facebook REAL Post Likes,
                  Buy 100% Facebook REAL Followers Targeted,
                  Buy 100% Facebook REAL Profile Followers`,
    bgColor: 'bg-gray-800',
    textColor: 'text-white',
    buttonColor: 'bg-purple-600 text-white',
    icon: '🔵',
  },
  {
    id: 4,
    title: 'Youtube',
    description: `Buy 100% Youtube REAL SUBSCRIBERS Worldwide,
                  Buy 100% Youtube REAL INDIAN SUBSCRIBERS,
                  Buy 100% Youtube REAL VIEWS,
                  Buy 100% Youtube REAL COUNTRY TARGETED VIEWS`,
    bgColor: 'bg-gray-800',
    textColor: 'text-white',
    buttonColor: 'bg-purple-600 text-white',
    icon: '🔴',
  },
];

const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Elevate Your Brand with Expert Social Media Marketing
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Unlock the full potential of your business through effective social media strategies tailored to your needs.
          </p>
          <a
            href="#services"
            className="inline-block bg-purple-600 text-white font-semibold py-3 px-6 rounded hover:bg-purple-700 transition duration-200"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Top Selling Services Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-8">Our Top Selling Services</h2>
          <p className="text-center mb-12 text-lg max-w-xl mx-auto">
            SmmSocialMedia is the #1 Best SMM Panel for Instagram, Facebook, and other social media platforms. You can provide quality and cheap SMM services to your customers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(service => (
              <div key={service.id} className={`${service.bgColor} p-6 rounded-lg`}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-xl font-bold ${service.textColor}`}>{service.title}</h3>
                  <span className="text-4xl">{service.icon}</span>
                </div>
                <p className={`mb-6 ${service.textColor}`} style={{ maxHeight: '100px', overflowY: 'auto' }}>
                  {service.description}
                </p>
                <button className={`w-full py-2 rounded-full ${service.buttonColor} font-bold`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">HOW IT WORKS</h2>
          <p className="text-gray-400 mb-12">A FEW STEPS TO PROMOTE YOUR BUSINESS OR PERSONAL PAGE</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">Step</div>
              <div className="text-6xl text-gray-500">1</div>
              <h3 className="text-xl font-bold mt-4">REGISTER AN ACCOUNT</h3>
              <p className="text-gray-400 mt-2">Go to the registration page and fill in all the fields and register.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">Step</div>
              <div className="text-6xl text-gray-500">2</div>
              <h3 className="text-xl font-bold mt-4">ORDER A SERVICE</h3>
              <p className="text-gray-400 mt-2">Choose any of the services that you like and place your order.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">Step</div>
              <div className="text-6xl text-gray-500">3</div>
              <h3 className="text-xl font-bold mt-4">GET YOUR POPULARITY</h3>
              <p className="text-gray-400 mt-2">Monitor how your services are performed efficiently and quickly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 md:flex items-center">
          {/* Left Side: Image or Illustration */}
          <div className="md:w-1/2 text-center md:text-left">
            <div className="bg-purple-700 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">WE PREFER QUALITY</h2>
              <p className="text-gray-400">
                We care about our users, so we give the best and are ready to answer every question 24/7.
              </p>
            </div>
          </div>

          {/* Right Side: Features List */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 space-y-4">
            <div className="bg-gradient-to-r from-purple-600 to-blue-700 p-6 rounded-lg flex items-center">
              <span className="text-2xl">🏆</span>
              <div className="ml-4">
                <h3 className="text-xl font-bold">HIGH QUALITY PROMOTION</h3>
                <p className="text-gray-200">
                  We use only proven account promotion tactics without losing the trust of the audience.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-700 p-6 rounded-lg flex items-center">
              <span className="text-2xl">🚀</span>
              <div className="ml-4">
                <h3 className="text-xl font-bold">FAST START</h3>
                <p className="text-gray-200">
                  If you dream of becoming popular and communicating with an audience of thousands, your dream will come true very soon.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-700 p-6 rounded-lg flex items-center">
              <span className="text-2xl">🎧</span>
              <div className="ml-4">
                <h3 className="text-xl font-bold">24/7 SUPPORT</h3>
                <p className="text-gray-200">
                  We are always ready to answer all your questions at any time of the day.
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
