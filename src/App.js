import React from 'react';
import Navbar from './components/Navbar';
import ResultSection from './components/ResultSection';
import CompareBox from './components/CompareBox';
import AnalysisGrid from './components/AnalysisGrid';
import Metrics from './components/Metrics';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6 pt-20">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section */}
          <div className="lg:w-1/3">
            <ResultSection />
          </div>
          
          {/* Right Section */}
          <div className="lg:w-2/3 space-y-6">
            {/* Compare Accuracy Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CompareBox />
              <CompareBox />
              <CompareBox />
            </div>
            
            {/* Analysis Grid */}
            <AnalysisGrid />
            
            {/* Metrics */}
            <Metrics />
          </div>
        </div>
      </div>
    </div>
  );
}

