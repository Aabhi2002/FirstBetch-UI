import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function ResultSection() {
  return (
    <div className="space-y-4 w-full max-w-sm">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-indigo-600 text-center">Your Result!</h2>
        <p className="text-gray-600 text-center mb-6">All your insights & details in one place</p>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="bg-indigo-100 p-2 rounded">✓</div>
              <div>
                <div className="text-2xl font-bold">136<span className="text-gray-400 text-sm">/240</span></div>
                <div className="text-xs text-indigo-600">YOU'VE PASSED!</div>
              </div>
            </div>
            <div className="bg-teal-500 text-white px-2 py-1 rounded text-xs">
              76% ACCURACY
            </div>
          </div>
          
          <div className="border-t pt-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div>
                <div className="text-xl font-bold">230<span className="text-gray-400 text-sm">/240</span></div>
                <div className="text-xs">Top Score</div>
              </div>
            </div>
            <div className="text-xs bg-teal-500 text-white px-2 py-1 rounded inline-block">
              92% ACCURACY
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="font-semibold mb-2">Improve your Marks</h3>
        <p className="text-sm text-gray-600 mb-4">Improve your score by practicing more.</p>
        <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors">
          Practice more
        </button>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="font-semibold mb-2">Revisit Paper</h3>
        <p className="text-sm text-gray-600 mb-4">Challenge your friends by simply sharing a link to this test</p>
        <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
          <ExternalLink size={16} />
          Visit
        </button>
        <p className="text-xs text-gray-400 mt-4 italic">Instructions for how to upload your handwritten material in given</p>
      </div>
    </div>
  );
}

