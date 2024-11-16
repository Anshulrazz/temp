import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Documents from './pages/Documents';
import Details from './pages/Details';
import Upload from './pages/Upload';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import AuthGuard from './components/AuthGuard';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/details/:type/:id" element={<Details />} />
            <Route path="/user/:id" element={<UserProfile />} />
            <Route
              path="/dashboard"
              element={
                <AuthGuard>
                  <Dashboard />
                </AuthGuard>
              }
            />
            <Route
              path="/upload"
              element={
                <AuthGuard>
                  <Upload />
                </AuthGuard>
              }
            />
            <Route path="/auth/:type" element={<Auth />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;