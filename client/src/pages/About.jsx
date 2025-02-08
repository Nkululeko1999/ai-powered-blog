import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Header from "../components/Header";
import aboutHeroImgUrl from "../assets/hero.jpg";

const About = () => {
  return (
    <section>
        <Header />

        <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen bg-gray-200 py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative bg-white rounded-3xl shadow-all overflow-hidden mb-10">
          <div className="lg:grid lg:grid-cols-2">
            <motion.div
              className="p-8 sm:p-12 lg:py-20 lg:px-16"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl mb-4">
                About Our AI-Powered Blog
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Welcome to Tekblog, your go-to destination for insightful,
                engaging, and AI-enhanced content across a wide range of topics.
                We are dedicated to leveraging AI to provide personalized
                experiences and insightful articles.
              </p>
              <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
                Get started
              </Button>
            </motion.div>
            <motion.div
              className="relative h-96 lg:h-auto"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={aboutHeroImgUrl}
                alt="AI Blog Illustration"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Mission Section */}
        <section className="py-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
            Our mission is to empower readers with valuable content crafted
            intelligently through the synergy of human creativity and AI
            technology.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Deliver accurate and well-researched information.",
              "Personalize your reading experience.",
              "Provide AI-assisted content summaries and recommendations.",
            ].map((item, index) => (
              <li
                key={index}
                className="bg-white border-l-4 border-indigo-900 shadow-md p-6 rounded-md hover:shadow-lg transition duration-300"
              >
                <p className="text-gray-700">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* AI Features */}
        <section className="py-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Why AI-Powered?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "High-Quality Content",
                desc: "AI assists writers in drafting and enhancing content.",
                img: aboutHeroImgUrl,
              },
              {
                title: "Personalized Recommendations",
                desc: "Our intelligent algorithms suggest tailored content.",
                img: aboutHeroImgUrl,
              },
              {
                title: "Semantic Search",
                desc: "Discover content seamlessly with AI-powered search.",
                img: aboutHeroImgUrl,
              },
              {
                title: "Content Summaries",
                desc: "Access quick-read versions for faster consumption.",
                img: aboutHeroImgUrl,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-lg transition duration-300"
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-32 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
    </section>
  );
};

export default About;
