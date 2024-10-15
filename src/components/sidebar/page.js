"use client"
import { Coffee, Home, List, Utensils, Menu, Beef } from "lucide-react";
import { useState } from "react";

export default function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      
      <button
        className="md:hidden p-3 bg-gray-900 text-white fixed top-4 left-4 z-50 rounded-md shadow-lg"
        onClick={toggleSidebar}
      >
        <Menu className="w-6 h-6" />
      </button>


      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 h-full w-64 p-6 fixed top-16 left-0 z-40 bg-gray-950 shadow-2xl`}
      >
        <ul className="space-y-6">
          <li>
            <a
              href="/"
              className="flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800 p-2 rounded-lg"
              aria-label="Home"
            >
              <Home className="w-6 h-6 mr-3 text-white" />
              <span className="text-sm font-semibold">Home</span>
            </a>
          </li>
          <li>
            <a
              href="/recipes"
              className="flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800 p-2 rounded-lg"
              aria-label="All Food List"
            >
              <List className="w-6 h-6 mr-3 text-white" />
              <span className="text-sm font-semibold">All Food List</span>
            </a>
          </li>
          <li>
            <a
              href="/snack"
              className="flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800 p-2 rounded-lg"
              aria-label="Snacks"
            >
              <Utensils className="w-6 h-6 mr-3 text-white" />
              <span className="text-sm font-semibold">Snacks</span>
            </a>
          </li>
          <li>
            <a
              href="/breakfast"
              className="flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800 p-2 rounded-lg"
              aria-label="Breakfast"
            >
              <Coffee className="w-6 h-6 mr-3 text-white" />
              <span className="text-sm font-semibold">Breakfast</span>
            </a>
          </li>
          <li>
            <a
              href="/dinner"
              className="flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800 p-2 rounded-lg"
              aria-label="Dinner"
            >
              <Beef className="w-6 h-6 mr-3 text-white" />
              <span className="text-sm font-semibold">Dinner</span>
            </a>
          </li>
        </ul>
      </div>

      
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
