import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-6 shadow-md animate-fade-in rounded-xl"> {/* Add rounded-xl for curved ends */}
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-extrabold tracking-wide transform transition-transform duration-500 hover:scale-105 animate-fade-in">
          Professional Dashboard
        </h1>
        <ul className="hidden md:flex space-x-8 animate-slide-in">
          <li>
            <Link
              href="/"
              className="hover:text-gray-400 transition-all duration-300 transform hover:scale-110"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="hover:text-gray-400 transition-all duration-300 transform hover:scale-110"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="hover:text-gray-400 transition-all duration-300 transform hover:scale-110"
            >
              Settings
            </Link>
          </li>
        </ul>
        <button
          className="md:hidden text-white focus:outline-none transition-transform duration-300 transform hover:rotate-180"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
