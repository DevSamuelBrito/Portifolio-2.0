//fazendo os imports necessários
'use client';
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; 


const Navbar = () => {
  //criando um estado para controlar o menu
  const [isOpen, setIsOpen] = useState(false);
 //função para abrir e fechar o menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  //retornando toda a rederização da NavBar
  return (
    <header>
      <div className="container mx-auto px-4 flex items-center justify-between h-14">
        <div className="flex items-center justify-center">
          <p className="text-white text-2xl font-bold">Portifolio</p>
        </div>
        <div className="hidden md:flex space-x-20">
          <Link href="/" className="text-white hover:text-gray-300 hover:scale-110 transition duration-300 ease-in-out">
            Home
          </Link>
          <Link href="/" className="text-white hover:text-gray-300 hover:scale-110 transition duration-300 ease-in-out">
            About
          </Link>
          <Link href="/" className="text-white hover:text-gray-300 hover:scale-110 transition duration-300 ease-in-out">
            Projects
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="https://www.linkedin.com/in/samuel-fava-de-brito/" target="_blank">
            <button className="text-white bg-blue-500 font-bold rounded-full px-4 py-2 hover:scale-125 transition duration-300 ease-in-out hover:shadow-custom-color">
              Contact
            </button>
          </Link>
          <button className="text-white pl-3">Language</button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 mt-4">
            <li>
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-white hover:text-gray-300">
                Projects
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/samuel-fava-de-brito/" target="_blank">
                <button className="text-white bg-red-500 font-bold rounded-full px-4 py-2">
                  Contact
                </button>
              </Link>
            </li>
            <li>
              <button className="text-white">Language</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
