

export default function Navbar() {


  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-700 bg-opacity-60  fixed w-full top-0 left-0 h-16 z-50">
      <div className="container mx-auto h-full flex justify-between items-center px-4">
        <div className="text-white text-xl font-semibold">
          <img
            src="foodtwo.jpg"
            alt=""
            className=" hidden sm:hidden md:block  w-16 h-12 rounded-full shadow-lg"
          />
        </div>
       

        
    
        <div className="space-x-4">
          <a href="/search" className="text-white">
            Search
          </a>
          <a href="/about" className="text-white">
            About
          </a>
          <a href="/contact" className="text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
