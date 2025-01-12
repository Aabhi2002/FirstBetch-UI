import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function CompareBox() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg h-48">
      <div className="flex items-center justify-between">
        <span className="text-gray-600">Compare Accuracy</span>
        <button className="text-gray-400 hover:text-gray-600">
          <ChevronDown size={20} />
        </button>
      </div>
    </div>
  );
}

