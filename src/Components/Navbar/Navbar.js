import React from 'react';

const Navbar = () => {
    return (
        <>

            <nav
                className="relative flex items-center justify-between lg:h-10 text-sm m-2"
                aria-label="Global"
            >
                <div className="flex uppercase font-bold text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
                    </svg>
                    <a href="#">clickmotto</a>
                </div>
                <div className="flex space-x-4">
                    <div>
                        <a href="#">Explore</a>
                    </div>
                    <div className="text-gray-500">
                        <a href="#">Discover</a>
                    </div>
                    <div className="text-gray-500">
                        <a href="#">For Professionals</a>
                    </div>
                    <div className="border px-2 text-gray-500 border-gray-400 rounded-md shadow-md">
                        <button>Submit Photos</button>
                    </div>
                    <div className="border-gray-400 border-l-2 shadow-lg"></div>
                    <div className="text-gray-500">
                        <button>Login</button>
                    </div>
                    <div className="bg-yellow-500 px-3 rounded text-white">
                        <button className="font-bold">Join Free</button>
                    </div>
                </div>

            </nav>
        </>
    );
};

export default Navbar;