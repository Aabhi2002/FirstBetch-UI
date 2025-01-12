import React from 'react';

export default function AccuracyGraph() {
  const data = [75, 45, 35, 65, 55, 45, 70];

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h3 className="text-lg font-semibold mb-6">Compare Accuracy</h3>
      <div className="relative h-64">
        <div className="absolute left-0 bottom-0 w-full h-full flex items-end justify-between">
          {data.map((value, index) => (
            <div
              key={index}
              className="w-8 bg-indigo-500 rounded-t-lg transition-all duration-500 ease-in-out hover:bg-indigo-600 mx-2"
              style={{ height: `${value}%` }}
            >
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-gray-600">
                {value}%
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 w-full border-t border-gray-200">
          <div className="flex justify-between mt-2">
            {[1, 2, 3, 4, 5, 6, 7].map((slot) => (
              <div key={slot} className="text-sm text-gray-500">
                {slot}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
