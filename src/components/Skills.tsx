import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

const skillsData: Skill[] = [
  // Frontend
  { name: 'HTML5', level: 95, icon: '🌐', category: 'frontend' },
  { name: 'CSS3', level: 90, icon: '🎨', category: 'frontend' },
  { name: 'JavaScript', level: 92, icon: '📜', category: 'frontend' },
  { name: 'React', level: 88, icon: '⚛️', category: 'frontend' },
  { name: 'TypeScript', level: 85, icon: '📘', category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, icon: '🌬️', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 80, icon: '🟢', category: 'backend' },
  { name: 'Express', level: 78, icon: '🚂', category: 'backend' },
  { name: 'MongoDB', level: 75, icon: '🍃', category: 'backend' },
  { name: 'Firebase', level: 82, icon: '🔥', category: 'backend' },
  
  // Design
  { name: 'Figma', level: 88, icon: '🎭', category: 'design' },
  { name: 'Adobe XD', level: 85, icon: '📐', category: 'design' },
  { name: 'UI/UX Design', level: 87, icon: '📱', category: 'design' },
  
  // Tools
  { name: 'Git', level: 90, icon: '📊', category: 'tools' },
  { name: 'Docker', level: 70, icon: '🐳', category: 'tools' },
  { name: 'Jest', level: 78, icon: '🧪', category: 'tools' },
  { name: 'VS Code', level: 95, icon: '💻', category: 'tools' },
];

const categoryLabels = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  design: 'Design',
  tools: 'Tools & Platforms',
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-primary-600 dark:text-primary-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I'm proficient with. I'm always expanding my skillset
            and learning new technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-3 h-8 bg-primary-600 dark:bg-primary-400 mr-3 rounded-sm"></span>
                {categoryLabels[category]}
              </h3>

              <div className="space-y-5">
                {skillsData
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                          <span className="mr-2 text-xl">{skill.icon}</span>
                          <span className="font-medium text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;