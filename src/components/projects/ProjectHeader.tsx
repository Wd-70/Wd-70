import React from 'react';

interface ProjectHeaderProps {
  title: string;
  description: string;
  category: string;
  period: string;
}

export default function ProjectHeader({ 
  title, 
  description, 
  category, 
  period 
}: ProjectHeaderProps) {
  return (
    <div className="text-center space-y-4">
      <div className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-medium py-1 px-3 rounded-full mb-2">
        {category}
      </div>
      <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
        {title}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {description}
      </p>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        {period}
      </div>
    </div>
  );
}
