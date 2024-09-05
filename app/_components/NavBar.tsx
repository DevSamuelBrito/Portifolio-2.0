//fazendo os imports necessários
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  //criando um estado para controlar o menu
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("/BR.png");
  const urlImageBrasil = "/BR.png";
  const urlImageEua = "/ES.png";

  const changeImageButton = () => {
    setLanguage(language != urlImageBrasil ? urlImageBrasil : urlImageEua);
    console.log("changed language");
  };
  //função para abrir e fechar o menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  //retornando toda a rederização da NavBar
  return (
    <header className="bg-transparent w-full h-16 flex justify-center items-center">
      <section className=" px-8 mt-5 w-full max-w-screen-xl flex justify-between">
        <nav className="flex items-center justify-center">
          <Link href="/">
            <h1 className="text-white 2xl:text-3xl font-bold md:text-2xl text-xl  ">Samuel Brito</h1>
          </Link>
        </nav>
        <div className="hidden md:flex items-center justify-between w-96">
          <Link
            className="text-white hover:text-gray-400  text-lg  hover:scale-110 transition duration-300 ease-in-out"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-white hover:text-gray-400  text-lg hover:scale-110 transition duration-300 ease-in-out"
            href="/"
          >
            About
          </Link>
          <Link
            className="text-white hover:text-gray-400  text-lg hover:scale-110 transition duration-300 ease-in-out"
            href="/"
          >
            Projects
          </Link>
          <Link
            href="https://www.linkedin.com/in/samuel-fava-de-brito/"
            target="_blank"
          >
            <button
              onClick={() => {
                console.log("Console");
              }}
              className="border text-white cursor-pointer text-lg rounded-2xl bg-transparent px-6 py-1 hover:bg-white hover:text-black hover:font-bold hover:scale-110 transition duration-300 ease-in-out"
            >
              Contact
            </button>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden absolute mt-14 left-0 w-full z-20 bg-gray-900">
            <ul className="flex flex-col items-center space-y-4 mt-4">
              <li>
                <Link href="/" className="text-white hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white hover:text-blue-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/samuel-fava-de-brito/"
                  className="text-white hover:text-blue-400"
                  target="_blank"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Image
                  onClick={changeImageButton}
                  src={language}
                  alt="change language"
                  width={32}
                  height={32}
                  className="cursor-pointer"
                ></Image>{" "}
              </li>
            </ul>
          </div>
        )}
      </section>
    </header>
  );
};

export default Navbar;
