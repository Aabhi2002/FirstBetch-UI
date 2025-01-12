import React from 'react';

export default function AnalysisSection() {
  const subjects = [
    { name: 'Geography', color: 'bg-green-500' },
    { name: 'Politics', color: 'bg-yellow-500' },
    { name: 'Current Affairs', color: 'bg-blue-500' },
    { name: 'General Studies', color: 'bg-purple-500' },
    { name: 'Mathematics', color: 'bg-red-500' },
    { name: 'Social Studies', color: 'bg-gray-500' },
    { name: 'English Literature', color: 'bg-pink-500' },
    { name: 'Indian History', color: 'bg-orange-500' },
    { name: 'Economics', color: 'bg-teal-500' },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Improvements
        </h3>
        <div className="flex flex-wrap gap-2">
          {subjects.map((subject, index) => (
            <span
              key={index}
              className={`${subject.color} text-white px-3 py-1 rounded-full text-sm`}
            >
              {subject.name}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Response Time
        </h3>
        <div className="flex items-center space-x-4">
          <div className="text-4xl font-bold text-indigo-600">60<span className="text-2xl">%</span></div>
          <div className="text-gray-500">
            Ans took
            <span className="text-red-500 ml-2">2min</span>
          </div>
        </div>
      </div>
    </div>
  );
}

