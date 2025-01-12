import React from 'react';

export default function ResultCard() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center space-x-4 mb-6">
        <img src="/placeholder.svg?height=80&width=80" alt="Result Icon" className="w-20 h-20" />
        <div>
          <h2 className="text-2xl font-bold text-indigo-600">Your Result!</h2>
          <p className="text-gray-600">All your insights & details in one place</p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <div className="text-3xl font-bold">136<span className="text-gray-400 text-lg">/240</span></div>
              <div className="text-sm text-gray-500">YOU'VE PASSED!</div>
            </div>
          </div>
          <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm">
            76% ACCURACY
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center space-x-3 mb-4">
            <img src="/placeholder.svg?height=40&width=40" alt="User" className="w-10 h-10 rounded-full" />
            <div>
              <div className="text-2xl font-bold">230<span className="text-gray-400 text-lg">/240</span></div>
              <div className="text-sm text-gray-500">Top Score</div>
            </div>
          </div>
          
          <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm inline-block">
            92% ACCURACY
          </div>
        </div>
      </div>

      <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
        Practice more
      </button>
    </div>
  );
}

