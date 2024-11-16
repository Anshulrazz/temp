import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, FileText, ArrowRight } from 'lucide-react';

export default function Documents() {
  const documents = [
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      description: "A comprehensive guide to machine learning algorithms and their applications",
      category: "Research Paper",
      author: "Dr. Michael Chang",
      date: "2024-03-15",
      type: "PDF"
    },
    {
      id: 2,
      title: "Climate Change Impact Analysis",
      description: "Analysis of global climate patterns and their effects on ecosystems",
      category: "White Paper",
      author: "Dr. Lisa Martinez",
      date: "2024-03-14",
      type: "PDF"
    },
    {
      id: 3,
      title: "Quantum Computing Overview",
      description: "Introduction to quantum computing principles and current developments",
      category: "Technical Report",
      author: "Prof. Robert Johnson",
      date: "2024-03-13",
      type: "PDF"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Documents</h1>
        <div className="flex space-x-4 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search documents..."
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
        {documents.map((doc) => (
          <div key={doc.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full">
                  {doc.category}
                </span>
                <FileText className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
              <p className="text-gray-600 mb-4">{doc.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">{doc.author}</span>
                  <span className="text-sm text-gray-400">{doc.date}</span>
                </div>
                <Link
                  to={`/details/document/${doc.id}`}
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