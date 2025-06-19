import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';


const experienceData = [
    {
        company: 'Company A',
        role: 'Frontend Developer',
        duration: 'Jan 2021 - Dec 2021',
        description: 'Worked on building responsive web applications using React and TypeScript.'
    },
    {
        company: 'Company B',
        role: 'Full Stack Developer',
        duration: 'Feb 2020 - Dec 2020',
        description: 'Developed REST APIs and integrated them with frontend interfaces.'
    },
    {
        company: 'Company C',
        role: 'Intern',
        duration: 'Jun 2019 - Jan 2020',
        description: 'Assisted in various development tasks and learned about software engineering best practices.'
    }
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        My <span className="text-primary-600 dark:text-primary-400">Experience</span>
                    </h2>
                    <VerticalTimeline>
                        {experienceData.map((exp, idx) => (
                            <VerticalTimelineElement
                                key={idx}
                                date={exp.duration}
                                iconStyle={{ background: '#4f46e5', color: '#fff' }}
                                contentStyle={{ background: '#f3f4f6', color: '#111' }}
                            >
                                <h3 className="vertical-timeline-element-title text-xl font-semibold">{exp.role}</h3>
                                <h4 className="vertical-timeline-element-subtitle text-lg">{exp.company}</h4>
                                <p>{exp.description}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience; 