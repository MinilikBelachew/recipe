export default function Navbar() {
    return (
      <nav className="bg-blue-600 fixed w-full top-0 left-0 h-16 z-50">
        <div className="container mx-auto h-full flex justify-between items-center px-4">
          <div className="text-white text-xl font-semibold">MyApp</div>
          <div className="space-x-4">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">About</a>
            <a href="#" className="text-white">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  