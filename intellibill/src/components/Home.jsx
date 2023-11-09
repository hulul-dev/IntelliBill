import React, { useState } from 'react';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Menu Bar */}
      <div className="bg-blue-500 py-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Billing App</div>
          <div className="md:hidden">
            {/* Menu Icon */}
            <button onClick={toggleMenu}>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 9a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 13a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="md:flex space-x-4">
            <a
              href="#"
              className={`${
                activeMenuItem === 'Dashboard' ? 'border-b-2 border-blue-700' : ''
              } px-3 py-2 rounded text-white`}
              onClick={() => handleMenuItemClick('Dashboard')}
            >
              Dashboard
            </a>
            <a
              href="#"
              className={`${
                activeMenuItem === 'Users' ? 'border-b-2 border-blue-700' : ''
              } px-3 py-2 rounded text-white`}
              onClick={() => handleMenuItemClick('Users')}
            >
              Users
            </a>
          </div>
        </div>
      </div>

      {/* Sidebar Menu (visible on mobile) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          <a href="#" className="block mb-2">Dashboard</a>
          <a href="#" className="block">Users</a>
        </div>
      )}

      {/* Content */}
      <div className="md:ml-64 py-8 md:py-0">
        <div className="container mx-auto">
          <div className="bg-white p-4 rounded shadow-md">
            {/* Your Content */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;