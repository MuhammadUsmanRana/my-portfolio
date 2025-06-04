import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../../public';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-400 dark:bg-primary-700 rounded-lg opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-400 dark:bg-secondary-700 rounded-lg opacity-20"></div>
              <img
                src={IMAGES.ABOUT_IMAGE}
                alt="Usman working"
                className="relative z-10 w-full h-auto object-cover rounded-lg"
                style={{ boxShadow: 'rgba(255, 255, 255, 0.3) 0px 0px 27px' }}

              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              MERN Stack & Next.js Developer
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Hello! I'm Usman, a passionate MERN Stack and Next.js developer with over 2 years of experience
              creating beautiful, functional websites and applications. I specialize in React, TypeScript,
              and modern CSS frameworks like Tailwind CSS, Bootstrap, and Material UI. I also have experience with Node.js, Express, and MongoDB.
              I also have experience with Next.js, Node.js, Express, and MongoDB.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My journey in web development began during college when I built my first e-commerce site.
              Since then, I've worked with startups and established companies to deliver engaging digital
              experiences that users love. I'm particularly passionate about accessibility and ensuring
              websites work for everyone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-2"></div>
                <span className="text-gray-800 dark:text-gray-200">
                  <strong>Name:</strong> Muhammad Usman
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-2"></div>
                <span className="text-gray-800 dark:text-gray-200">
                  <strong>Email:</strong> ranausman5939@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-2"></div>
                <span className="text-gray-800 dark:text-gray-200">
                  <strong>Location:</strong> Faisalabad, Pakistan
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-2"></div>
                <span className="text-gray-800 dark:text-gray-200">
                  <strong>Availability:</strong> Freelance & Full-time
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors duration-300"
              >
                Hire Me
              </a>
              <a
                href={IMAGES.MY_RESUME}
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md transition-colors duration-300"
                download
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;