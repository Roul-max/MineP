import React from 'react';
import { Github, Linkedin, Twitter, Mail, Code } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/Roul-max' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/roulmax' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/johndoe' },
    { name: 'Email', icon: Mail, href: 'mailto:rohitkumarrrx@gmail.com' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Personal Portfolio
            </span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  aria-label={link.name}
                >
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 Rohit Kumar. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with React, Vite, and TailwindCSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;