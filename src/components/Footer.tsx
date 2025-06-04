import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const socials = [
    { name: 'github', url: 'https://github.com/MuhammadUsmanRana' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/muhammad-usman-280321268/' },
    { name: 'x', url: 'https://x.com/Muhamma69588482' },
    { name: 'whatsapp', url: 'https://wa.me/923212494291' }
  ];
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and short description */}
          <div className="md:col-span-2">
            <motion.a
              href="#home"
              className="text-3xl font-bold text-white inline-block mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MU<span className="text-primary-400">.</span>
            </motion.a>
            <p className="text-gray-300 mb-6 max-w-md">
              Building beautiful digital experiences with a focus on clean design and intuitive user interfaces.
              Let's work together to bring your ideas to life.
            </p>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.name === 'linkedin' ? (
                    <FaLinkedin className="w-5 h-5 text-gray-500" />
                  ) : (
                    <img
                      src={`https://cdn.simpleicons.org/${social.name}/6b7280`}
                      alt={social.name}
                      className="w-5 h-5"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary-400 mr-2">Email:</span>
                <a
                  href="mailto:ranausman5939@gmail.com"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  ranausman5939@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-2">Phone:</span>
                <a
                  href="tel:+11234567890"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  +92 (321) 2494291
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-2">Location:</span>
                <span className="text-gray-300">Faisalabad, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Muhammad Usman. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 md:mt-0 bg-primary-600 hover:bg-primary-700 p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;