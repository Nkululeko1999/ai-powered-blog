import React from 'react'
import { Link } from 'react-router-dom'
import { TfiMenu } from "react-icons/tfi";

function Header() {
    return (
        <header className="bg-white shadow-all">
            <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-6 py-2">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link to="/" className="block text-2xl font-bold text-blue-800">
                            Tekblog
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link to="/" className="text-gray-500 transition hover:text-blue-800 text-base font-semibold"> Home </Link>
                                </li>
                                <li>
                                    <Link to="/blogs" className="text-gray-500 transition hover:text-blue-800 text-base font-semibold"> Blogs </Link>
                                </li>

                                <li>
                                    <Link to="/about" className="text-gray-500 transition hover:text-blue-800 text-base font-semibold"> About </Link>
                                </li>

                                <li>
                                    <Link to="/create-blog" className="hidden text-gray-500 transition hover:text-blue-800 text-base font-semibold"> Create Blog </Link>
                                </li>

                                <li>
                                    <Link className="hidden text-gray-500 transition hover:text-blue-800 text-base font-semibold"> Manage Blogs </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Link to="/login"
                                className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"

                            >
                                Login
                            </Link>

                            <div className="hidden sm:flex">
                                <Link to="/register"
                                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600"

                                >
                                    Register
                                </Link>
                            </div>
                        </div>

                        <div className="block md:hidden">
                            <button
                                className="rounded-sm bg-gray-200 p-2 text-gray-600 transition hover:text-gray-600/75"
                            >
                                <TfiMenu className='size-5' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
