import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="grid grid-cols-3 h-14 mt-1 max-w-full">
        <div className="flex items-center justify-start">
          <p className="ml-48 font-bold text-white text-2xl">Portifolio</p>
        </div>
        <div className="flex justify-center items-center">
          <ul className="list-none flex flex-row space-x-20">
            <li className="hover:text-white">Home</li>
            <li className="hover:text-white">About</li>
            <li className="hover:text-white">Projects</li>
          </ul>
        </div>
        <div className="flex items-center justify-end">
          <Link
            className="mr-36"
            href="https://www.linkedin.com/in/samuel-fava-de-brito/"
            target="_blank"
          >
            <button className="text-white bg-blue-500 font-bold rounded-full px-4 py-3">
            Contact
            </button>
          </Link>
          <button className="text-white mr-16">Language</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
