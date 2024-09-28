import { Sidebar } from "lucide-react";

export default function SideBar() {
    return   (
        <div className="bg-gray-800 fixed left-0 top-16 w-64 h-full z-40 p-4">
        <ul>
          <li className="mb-2">
            <a href="/" className="text-gray-300 hover:text-white">Home</a>
          </li>
          <li className="mb-2">
            <a href="/recipes" className="text-gray-300 hover:text-white">Food List</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-300 hover:text-white">Settings</a>
          </li>
        </ul>
      </div>
    );

}