import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Upload, BookOpen, Folder } from 'lucide-react';

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "AI Research Framework",
      description: "A comprehensive framework for artificial intelligence research and development",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400",
      category: "Research"
    },
    {
      id: 2,
      title: "Sustainable Energy Solutions",
      description: "Documentation and analysis of renewable energy implementation strategies",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=400",
      category: "Documentation"
    },
    {
      id: 3,
      title: "Medical Data Analysis",
      description: "Statistical analysis of patient outcomes in clinical trials",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
      category: "Research"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Knowledge Hub for Projects & Research
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Organize, share, and discover academic projects and research papers in one place
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Browse Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/upload"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-indigo-500"
              >
                Upload Your Work
                <Upload className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-indigo-100 rounded-full p-3 w-12 h-12 mx-auto mb-4">
                <Search className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Discovery</h3>
              <p className="text-gray-600">Find relevant projects and papers with powerful search tools</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-indigo-100 rounded-full p-3 w-12 h-12 mx-auto mb-4">
                <Upload className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Simple Sharing</h3>
              <p className="text-gray-600">Upload and share your work with the academic community</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-indigo-100 rounded-full p-3 w-12 h-12 mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Organized Access</h3>
              <p className="text-gray-600">Keep all your research materials in one organized space</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
            <p className="mt-4 text-xl text-gray-600">Discover outstanding research and documentation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    to={`/details/project/${project.id}`}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              View All Projects
              <Folder className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}