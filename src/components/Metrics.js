import React from 'react';
import scale from "../components/scale.png"
export default function Metrics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="font-semibold mb-6">Compare Accuracy</h3>
        
        {/* Time intervals */}
        <div className="flex justify-between mb-6">
          {['10min', '15min', '30min', '45min'].map((time, index) => (
            <div 
              key={time} 
              className={`px-3 py-1 rounded ${index === 2 ? 'bg-teal-500 text-white' : 'bg-gray-100'}`}
            >
              {time}
            </div>
          ))}
        </div>

        <div className="relative h-80">
          {/* Y-axis labels */}
          <div className="absolute left-0 h-full flex flex-col justify-between text-sm text-gray-500">
            {['100%', '75%', '50%', '25%', '0%'].map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>

          {/* Grid background */}
          <div className="absolute left-8 right-0 h-full">
            <div className="h-full w-full bg-grid-pattern opacity-10"></div>
          </div>

          {/* Bars */}
          <div className="absolute left-8 right-0 bottom-0 flex justify-between items-end h-full px-8">
            {[85, 45, 35, 65, 55, 45, 70].map((height, index) => (
              <div
                key={index}
                className="w-16 bg-indigo-500 rounded-t transition-all duration-300 hover:bg-indigo-600"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-8 right-0 flex justify-between px-4 pt-2">
            {[1, 2, 3, 4, 5, 6, 7].map((slot) => (
              <span key={slot} className="text-sm text-gray-500">{slot}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="font-semibold mb-6">Time Taken</h3>
        <div className="space-y-8">
          {/* First scale */}
          <div className="relative mt-8">
            <div className="h-4 rounded-full overflow-hidden relative">
              <div 
                className="absolute inset-0 opacity-20" 
                style={{
                  backgroundImage: 'url(/images/time-taken-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="h-full w-2/3 bg-red-500 rounded-full relative z-10" />
            </div>
          </div>
          
          {/* Second scale */}
          <div className="relative mt-12">
            <div className="h-4 rounded-full overflow-hidden relative">
              <div 
                className="absolute inset-0 opacity-20" 
                style={{
                  backgroundImage: scale,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="h-full w-1/3 bg-green-500 rounded-full relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
