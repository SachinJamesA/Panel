import React, { useRef } from "react";

const About = () => {
  // Ref for the "Our Story" section
  const storyRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToStory = () => {
    storyRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            About Our Social Media Marketing Agency
          </h1>
          <p className="text-lg md:text-xl font-light mb-6">
            We help businesses grow and achieve their full potential through
            innovative social media strategies.
          </p>
          <button
            onClick={scrollToStory}
            className="inline-block bg-white text-blue-900 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-200"
          >
            Our Story
          </button>
        </div>
      </section>

      {/* Company Story */}
      <section
        id="story"
        ref={storyRef}
        className="py-16 lg:py-24 bg-gray-100 px-6 md:px-12 lg:px-20"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-center mb-8">
            Established in 2015, our agency has grown from a small group of
            enthusiasts into a full-fledged marketing powerhouse, with a team
            of professionals dedicated to driving online success for brands
            across the globe. We live and breathe social media, and our passion
            is reflected in the innovative solutions we provide.
          </p>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Creativity</h3>
              <p className="text-gray-600">
                We believe creativity is the key to standing out in the crowded
                social media landscape. Our team constantly pushes the
                boundaries to deliver fresh, unique content that resonates with
                audiences.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                Social media is ever-changing, and we make it our mission to
                stay ahead of the trends. Innovation drives everything we do,
                from content creation to strategy development.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Client-Centric</h3>
              <p className="text-gray-600">
                Your success is our success. We tailor every strategy and
                campaign specifically to meet your business goals, ensuring
                measurable outcomes that drive growth and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 lg:py-24 bg-blue-50 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Achievements
          </h2>
          <p className="text-lg md:text-xl font-light mb-12">
            We’re proud of the impact we've made and the milestones we've
            achieved over the years.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">200+</h3>
              <p className="text-gray-600">Successful Campaigns</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">500K+</h3>
              <p className="text-gray-600">Engagement Growth for Clients</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">30+</h3>
              <p className="text-gray-600">Industry Awards</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">95%</h3>
              <p className="text-gray-600">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-white px-6 md:px-12 lg:px-20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Meet Our Team
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-center mb-8">
            Our team is made up of experienced social media strategists,
            creatives, and digital marketing experts who are passionate about
            driving results for our clients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Alex Smith</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Sarah Lee</h3>
              <p className="text-gray-600">Chief Marketing Officer</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Tom Brown</h3>
              <p className="text-gray-600">Head of Strategy</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 4"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Emma Green</h3>
              <p className="text-gray-600">Creative Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-blue-900 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Grow Your Business Together!
          </h2>
          <p className="text-lg md:text-xl font-light mb-8">
            Ready to take your social media to the next level? Contact us today
            and let's create a customized strategy to elevate your brand.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-200"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
