import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

function Sidebar() {

    const [open, setOpen] = useState(false)

    function handleClick() {
        setOpen((prev) => !prev)
    }

    const allLinks = [
        {
            path: "/",
            name: "Home",
        },
        {
            path: "/about",
            name: "About",
        },
        {
            path: "/contact",
            name: "Contact",
        },
        {
            path: "/profile",
            name: "Profile",
        },
    ]

    return (
        <div className="bg-gray-800">
            <div className='px-4 sm:px-6'>
                <div className='flex items-center justify-between h-16'>
                    <div className="flex items-center">
                        <a href="/" className="text-white">Navbar</a>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex space-x-4">
                            {allLinks.map((allLink) => (
                                <ul key={allLink.name} className='text-gray-300 transition-all duration-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md font-medium'>
                                    <Link to={allLink.path} className='text-gray-200 hover:text-gray-400 duration-500'>{allLink.name}</Link>
                                </ul>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden cursor-pointer">
                        <button onClick={handleClick}>
                            <span className='sr-only'>Open</span>
                            {open === true ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {open ? (
                <div className="md:hidden">
                    <div className="pt-2 pb-3 space-y-1 sm:px-3">
                        {allLinks.map((allLink) => (
                            <ul key={allLink.name} className='text-gray-300 transition-all duration-700 hover:bg-gray-600 block hover:text-white text-center px-3 py-2 font-medium'>
                                <Link to={allLink.path} className='text-gray-200 hover:text-gray-400 duration-500'>{allLink.name}</Link>
                            </ul>
                        ))}
                    </div>
                </div>
            ) : (null)}
        </div>
    )
}

export default Sidebar