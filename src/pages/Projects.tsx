import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI Research Framework",
      description: "A comprehensive framework for artificial intelligence research and development",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400",
      category: "Research",
      author: "Dr. Sarah Chen",
      date: "2024-03-15"
    },
    {
      id: 2,
      title: "Sustainable Energy Solutions",
      description: "Documentation and analysis of renewable energy implementation strategies",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=400",
      category: "Documentation",
      author: "Prof. James Wilson",
      date: "2024-03-14"
    },
    {
      id: 3,
      title: "Medical Data Analysis",
      description: "Statistical analysis of patient outcomes in clinical trials",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
      category: "Research",
      author: "Dr. Emily Brown",
      date: "2024-03-13"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Projects</h1>
        <div className="flex space-x-4 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search projects..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <Filter className="h-5 w-5 mr-2" />
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full">
                  {project.category}
                </span>
                <span className="text-sm text-gray-500">{project.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{project.author}</span>
                <Link
                  to={`/details/project/${project.id}`}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}