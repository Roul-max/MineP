import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blog';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-20 min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <Link
            to="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-900">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>
          
          <div className="mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* In a real app, you would parse markdown content here */}
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p>{post.content}</p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">
                Key Takeaways
              </h2>
              
              <ul className="space-y-2">
                <li>Modern React patterns for better performance</li>
                <li>Best practices for component architecture</li>
                <li>How to implement efficient state management</li>
                <li>Testing strategies for React applications</li>
              </ul>
              
              <p>
                This approach has helped me build more maintainable and scalable applications. 
                I hope these insights help you in your own development journey.
              </p>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;