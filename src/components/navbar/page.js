import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 bg-opacity-60  fixed w-full top-0 left-0 h-16 z-50">
      <div className="container mx-auto h-full flex justify-between items-center px-4">
        <div className="text-white text-xl font-semibold">
          <img
            src="foodtwo.jpg"
            alt=""
            className=" w-16 h-12 rounded-full shadow-lg"
          />
        </div>
        <div className=" flex gap-3">
          <input
            type="text"
            id="foodsearch"
            placeholder="search..."
            className="p-1 w-96  shadow-lg shadow-blue-400 rounded-lg border-solid"
          ></input>
          <button>
            {" "}
            <Search className="w-7 h-7  " />
          </button>
        </div>
        <div className="space-x-4">
          <a href="/" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
