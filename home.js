import React from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <motion.h1 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Fortnite Lobby Bot Hosting
      </motion.h1>
      
      <motion.img 
        src="/images/fortnite-banner.jpg"
        alt="Fortnite Lobby Bots"
        className="w-2/3 rounded-xl shadow-lg mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Link to="/dashboard">
          <button className="px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md">
            Get Started
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white text-3xl">
      Dashboard Page (Coming Soon)
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
