import React from 'react';
import { useParams } from 'react-router-dom';
import { Mail, Phone, BookOpen, Folder, User } from 'lucide-react';
import useAuthStore from '../store/authStore';

export default function UserProfile() {
  const { id } = useParams();
  const { user } = useAuthStore();
  const isOwnProfile = user?.id === id;

  // Mock user data - replace with API call
  const profileData = {
    id,
    name: 'Dr. Sarah Chen',
    email: 'sarah.chen@example.com',
    phone: '+1 234 567 8900',
    branch: 'Computer Science',
    bio: 'Research scientist specializing in AI and Machine Learning. Published author with over 10 years of experience in academic research.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    stats: {
      projects: 12,
      documents: 8,
      likes: 156
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-48 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="absolute -bottom-12 left-8">
            <img
              src={profileData.avatar}
              alt={profileData.name}
              className="w-24 h-24 rounded-full border-4 border-white"
            />
          </div>
        </div>
        
        <div className="pt-16 pb-8 px-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{profileData.name}</h1>
              <p className="text-gray-600">{profileData.branch}</p>
            </div>
            {isOwnProfile && (
              <button className="btn btn-secondary">
                Edit Profile
              </button>
            )}
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="h-5 w-5" />
              <span>{profileData.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="h-5 w-5" />
              <span>{profileData.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <User className="h-5 w-5" />
              <span>{profileData.branch}</span>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">About</h2>
            <p className="text-gray-600">{profileData.bio}</p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-200 pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">{profileData.stats.projects}</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">{profileData.stats.documents}</div>
              <div className="text-sm text-gray-600">Documents</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">{profileData.stats.likes}</div>
              <div className="text-sm text-gray-600">Likes</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Projects</h2>
            <Folder className="h-5 w-5 text-gray-400" />
          </div>
          {/* Add project list */}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Documents</h2>
            <BookOpen className="h-5 w-5 text-gray-400" />
          </div>
          {/* Add document list */}
        </div>
      </div>
    </div>
  );
}