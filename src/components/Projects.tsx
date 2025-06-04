import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// Project data structure
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A modern dashboard for e-commerce stores with real-time analytics, inventory management, and order processing.",
    image: "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com/project1",
    githubUrl: "https://github.com/johndoe/project1"
  },
  {
    id: 2,
    title: "Weather App",
    description: "A beautiful weather application with 7-day forecasts, location search, and customizable units of measurement.",
    image: "https://images.pexels.com/photos/1072848/pexels-photo-1072848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "APIs", "CSS"],
    liveUrl: "https://example.com/project2",
    githubUrl: "https://github.com/johndoe/project2"
  },
  {
    id: 3,
    title: "Task Management System",
    description: "A collaborative task management tool with real-time updates, task assignment, and progress tracking.",
    image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Firebase", "Tailwind"],
    liveUrl: "https://example.com/project3",
    githubUrl: "https://github.com/johndoe/project3"
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description: "A comprehensive fitness tracking application with workout plans, progress visualization, and goal setting.",
    image: "https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React Native", "TypeScript", "Charts"],
    liveUrl: "https://example.com/project4",
    githubUrl: "https://github.com/johndoe/project4"
  },
  {
    id: 5,
    title: "Recipe Finder",
    description: "A recipe discovery app with search filters, nutrition information, and personalized recommendations.",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Redux", "API"],
    liveUrl: "https://example.com/project5",
    githubUrl: "https://github.com/johndoe/project5"
  },
  {
    id: 6,
    title: "Virtual Classroom",
    description: "An interactive virtual classroom with video conferencing, whiteboard, and resource sharing capabilities.",
    image: "https://images.pexels.com/photos/8471799/pexels-photo-8471799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "WebRTC", "Firebase"],
    liveUrl: "https://example.com/project6",
    githubUrl: "https://github.com/johndoe/project6"
  }
];

// All unique tags from projects
const allTags = Array.from(new Set(projectsData.flatMap(project => project.tags)));

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);

  // Filter projects based on selected tag
  const handleFilterClick = (tag: string) => {
    setActiveFilter(tag);
    
    if (tag === 'All') {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter(project => project.tags.includes(tag));
      setFilteredProjects(filtered);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Check out some of my latest projects. Each project is carefully crafted with attention to detail,
            focusing on performance and user experience.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => handleFilterClick('All')}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              activeFilter === 'All'
                ? 'bg-primary-600 dark:bg-primary-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleFilterClick(tag)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === tag
                  ? 'bg-primary-600 dark:bg-primary-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden group h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-between items-center">
                      <div className="flex space-x-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs bg-primary-600/80 text-white px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;