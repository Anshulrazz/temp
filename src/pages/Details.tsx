import React from 'react';
import { useParams } from 'react-router-dom';
import { Download, Share2, BookOpen } from 'lucide-react';

export default function Details() {
  const { type, id } = useParams();

  // Mock data - in a real app, this would come from an API
  const item = {
    id: parseInt(id || '1'),
    title: "AI Research Framework",
    description: "A comprehensive framework for artificial intelligence research and development",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    category: "Research",
    author: "Dr. Sarah Chen",
    date: "2024-03-15",
    tags: ["AI", "Machine Learning", "Research Framework"]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-sm font-semibold bg-indigo-600 rounded-full">
                {item.category}
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
            <div className="flex items-center space-x-4">
              <span>{item.author}</span>
              <span>•</span>
              <span>{item.date}</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm text-indigo-600 bg-indigo-100 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <button className="btn btn-secondary">
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </button>
              <button className="btn btn-primary">
                <Download className="h-5 w-5 mr-2" />
                Download
              </button>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600 mb-6">{item.description}</p>
            
            <h2 className="text-xl font-semibold mb-4">Content</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-gray-400 mr-2" />
                <span className="text-gray-600">Document Preview</span>
              </div>
              <p className="text-gray-600">{item.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}