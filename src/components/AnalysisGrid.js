import React from 'react';
import { Clock, TrendingUp, Brain, Lightbulb } from 'lucide-react';

function AnalysisBox({ title, icon, content }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      {content}
    </div>
  );
}

function TimeTag({ time, label, color }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-xs bg-gray-100 px-2 py-1 rounded">{time}</span>
      <span className={`text-xs ${color}`}>{label}</span>
    </div>
  );
}

export default function AnalysisGrid() {
  const improvements = [
    'Geography', 'Politics', 'Current Affairs', 'Mathematics',
    'Social Studies', 'English Literature', 'Indian History', 'Economics'
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <AnalysisBox
        title="Improvements"
        icon={<TrendingUp className="w-5 h-5" />}
        content={
          <div className="flex flex-wrap gap-2">
            {improvements.map((subject) => (
              <span key={subject} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                {subject}
              </span>
            ))}
          </div>
        }
      />
      
      <AnalysisBox
        title="Response Time"
        icon={<Clock className="w-5 h-5" />}
        content={
          <div className="space-y-2">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold">60</span>
              <span className="text-sm text-gray-500">% Ans took</span>
              <span className="text-sm text-red-500">2min</span>
            </div>
            <div className="text-red-500 text-sm font-medium">You are slow!</div>
          </div>
        }
      />
      
      <AnalysisBox
        title="Approach Data"
        icon={<Brain className="w-5 h-5" />}
        content={
          <div className="space-y-2">
            <div className="text-sm">25% Based on Facts</div>
            <div className="text-sm">32% Based on Analysis</div>
            <div className="text-sm">19% Based on Elimination</div>
            <div className="text-sm">24% Based on Guess</div>
          </div>
        }
      />
      
      <AnalysisBox
        title="Suggestions"
        icon={<Lightbulb className="w-5 h-5" />}
        content={
          <div className="flex flex-wrap gap-2">
            <TimeTag time="1-12" label="Easy" color="text-green-500" />
            <TimeTag time="12-32" label="Medium" color="text-yellow-500" />
            <TimeTag time="32-40" label="Hard" color="text-red-500" />
          </div>
        }
      />
    </div>
  );
}

