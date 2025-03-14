import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
        <Button className="px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md">
          Get Started
        </Button>
      </motion.div>
    </div>
  );
};

export default Home;
