import React from 'react';
import { Bell, Home, Users, Zap, BarChart2, BookOpen } from 'lucide-react';
import ProfileDropdown from './ProfileDropdown';

export default function Navbar() {
  return (
    <nav className="bg-[#1a1d21] text-white p-4 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <span className="text-2xl font-bold">FirstBench</span>
          
          <div className="hidden md:flex items-center space-x-6">
            <NavItem icon={<Home size={18} />} text="Dashboard" active />
            <NavItem icon={<Zap size={18} />} text="FirstGuru" />
            <NavItem icon={<Users size={18} />} text="TownHall" />
            <NavItem icon={<BookOpen size={18} />} text="AI Evaluation" />
            <NavItem icon={<BarChart2 size={18} />} text="Performance" />
            <NavItem icon={<BookOpen size={18} />} text="Mock Test" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Bell className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
          <ProfileDropdown />
        </div>
      </div>
    </nav>
  );
}

function NavItem({ icon, text, active }) {
  return (
    <div className={`flex items-center space-x-2 cursor-pointer transition-colors ${active ? 'text-[#3cd2c8]' : 'text-gray-300 hover:text-white'}`}>
      {icon}
      <span className="text-sm">{text}</span>
    </div>
  );
}

