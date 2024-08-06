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
    <header className="bg-black w-full h-16 flex justify-center items-center">
      <section className=" px-8 w-full max-w-screen-lg flex justify-between">
        <nav className="flex items-center justify-center">
          <Link href="/">
            <h1 className="text-white text-xl font-bold">Portifolio</h1>
          </Link>
        </nav>
        <div className="flex items-center justify-between w-96">
          <Link
            className="text-white hover:text-gray-400 hover:scale-110 transition duration-300 ease-in-out"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-white hover:text-gray-400 hover:scale-110 transition duration-300 ease-in-out"
            href="/"
          >
            About
          </Link>
          <Link
            className="text-white hover:text-gray-400 hover:scale-110 transition duration-300 ease-in-out"
            href="/"
          >
            Projects
          </Link>

          <button
            onClick={() => {
              console.log("Console");
            }}
            className="border text-white cursor-pointer rounded-2xl bg-transparent px-6 py-1 hover:bg-white hover:text-black hover:font-bold hover:scale-110 transition duration-300 ease-in-out"
          >
            Contact
          </button>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
