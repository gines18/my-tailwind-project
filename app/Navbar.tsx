"use client"
import Link from 'next/link';

function Navbar() {
    
    return (
<nav className="bg-white shadow dark:bg-gray-800">
    <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <Link href="/dashboard/Home" className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</Link>

        <Link href="/dashboard/About" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">About</Link>

        <Link href="/dashboard/Blog" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">blog</Link>
        <Link href="/dashboard/Projects" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">projects</Link>

        <Link href="/dashboard/Contact" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contact</Link>

    </div>
</nav>


  );
}

export default Navbar;
