import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';
import { experienceData, educationData } from '../data/experience';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const TimelineItem = ({ item, index, isExperience = true }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-teal-600 h-full" />
      
      {/* Timeline dot */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10 shadow-lg animate-glow"
      />
      
      {/* Content */}
      <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
        <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-medium">{item.period}</span>
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              {item.title}
            </h3>
            
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-3">
              {isExperience ? <Building className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
              <span className="text-sm">{item.company || item.institution}</span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
            
            {item.technologies && (
              <div className="flex flex-wrap gap-2 mt-3">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 text-xs rounded-full hover:scale-105 transition-transform duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            </motion.div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-blue-50/30 dark:from-gray-800 dark:via-indigo-900/10 dark:to-blue-900/10 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-indigo-200/20 to-blue-200/20 rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My Professional Journey And Educational Background
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Professional Experience
          </h3>
          <div className="relative space-y-12">
            {experienceData.map((exp, index) => (
              <TimelineItem key={exp.id} item={exp} index={index} isExperience={true} />
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Education
          </h3>
          <div className="relative space-y-12">
            {educationData.map((edu, index) => (
              <TimelineItem key={edu.id} item={edu} index={index} isExperience={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;