import { Coffee, Home, List, Utensils } from "lucide-react"; // Using lucide-react for icons

export default function SideBar() {
  return (
    <div className="bg-gray-900 fixed left-0 top-16 w-64 h-full z-40 p-6 shadow-lg hidden md:block ">
      <ul className="space-y-6">
        <li>
          <a
            href="/"
            className="active:bg-black hover:bg-gray-800 flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 hover:translate-x-2"
            aria-label="Home"
          >
            <Home className="w-5 h-5 mr-3" />
            <span className="text-sm font-semibold">Home</span>
          </a>
        </li>
        <li>
          <a
            href="/recipes"
            className="hover:bg-gray-800 hover:scale-105 hover:translate-x-2 flex items-center text-gray-300 hover:text-white transition-all duration-300"
            aria-label="All Food List"
          >
            <List className="w-5 h-5 mr-3" />
            <span className="text-sm font-semibold">All Food List</span>
          </a>
        </li>
        <li>
          <a
            href="/snack"
            className="hover:bg-gray-800 hover:scale-105 hover:translate-x-2 flex items-center text-gray-300 hover:text-white transition-all duration-300"
            aria-label="Snacks"
          >
            <Utensils className="w-5 h-5 mr-3" />
            <span className="text-sm font-semibold">Snacks</span>
          </a>
        </li>
        <li>
          <a
            href="/breakfast"
            className="hover:bg-gray-800 hover:scale-105 hover:translate-x-2 flex items-center text-gray-300 hover:text-white transition-all duration-300"
            aria-label="Snacks"
          >
            <Coffee className="w-5 h-5 mr-3" />
            <span className="text-sm font-semibold">BreakFast</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
