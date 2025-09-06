import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; 
import { Star, Trophy, Target } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "MySQL", level: 65 },
    { name: "Python", level: 70 },
    { name: "AWS", level: 65 },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 
      dark:from-gray-800 dark:via-blue-900/10 dark:to-purple-900/10 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 
          bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-40 h-40 
          bg-gradient-to-br from-teal-200/20 to-blue-200/20 rounded-full blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get To Know Me Better And Discover My Technical Expertise
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo + Animations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative group">
              {/* Animated border around photo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-80 h-80 mx-auto 
                rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 p-1"
              >
                <div className="w-full h-full bg-gray-50 dark:bg-gray-800 rounded-full" />
              </motion.div>

              {/* Profile image */}
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden 
              shadow-2xl group-hover:shadow-3xl transition-all duration-500 
              transform group-hover:scale-105">
                <img
                  src="./public/myPic.jpeg"
                  alt="Rohit Kumar"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t 
                from-blue-600/20 via-transparent to-purple-600/20 opacity-0 
                group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
          {/* Bio + Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
                  <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">1.5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
                  <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">13+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
                  <Star className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Users</div>
                </div>
              </div>

              {/* Bio text */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Passionate Full Stack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                With Over 1.5 Years Of Experience In Web Development, I Specialize In Creating
                Robust, Scalable Applications Using Modern Technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                I Love Working With React Ecosystems, Building RESTful APIs With Node.js,
                And Designing Intuitive UIs. When I'm Not Coding, I Contribute To Open-Source
                Projects Or Explore Latest Tech Trends.
              </p>

              {/* Skills */}
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                Technical Skills
              </h4>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 h-3 rounded-full relative"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                      >
                        {/* Glow animation */}
                        <motion.div
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full h-full"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
