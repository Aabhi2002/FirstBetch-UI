import React, { useState } from 'react';
import { User, Settings, LogOut, ChevronDown } from 'lucide-react';

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-gray-700 rounded-lg px-3 py-1 cursor-pointer hover:bg-gray-600"
      >
        <User size={18} />
        <span>Abhishek Rajput</span>
        <span className="text-gray-400 text-sm">ID: 123456xyz</span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
          <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2">
            <Settings size={16} />
            <span>Settings</span>
          </button>
          <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2 text-red-600">
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
}

