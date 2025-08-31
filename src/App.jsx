import React from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './hooks/useAuth'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Membership from './pages/Membership'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import './App.css'

function App() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600 font-marcellus">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen bg-white font-marcellus">
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              fontFamily: 'Marcellus, serif'
            }
          }}
        />
        
        <Routes>
          {/* Admin Routes */}
          <Route 
            path="/admin" 
            element={
              user ? <AdminDashboard /> : <AdminLogin />
            } 
          />
          
          {/* Public Routes */}
          <Route 
            path="/*" 
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/membership" element={<Membership />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                </Routes>
                <Footer />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App