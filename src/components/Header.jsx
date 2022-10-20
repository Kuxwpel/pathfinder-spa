import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 bg-[#f3f4f6] text-black outline-10">
      {/* ^ ustawic backgroud opacity lub  */}
      <div>
        {/* logo */}
        {/* on click menu */}
        {/* onClick={handleNav} className={logo ? 'hidden' : 'block'} */}
        <h1>
          <Link to="/">PATHFINDER.</Link>
        </h1>
      </div>

      {/* top menu */}
      <ul className="hidden md:flex justify-between items-center px-4">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="destinations">
          <li>Destinations</li>
        </Link>
        <Link to="travel">
          <li>Travel</li>
        </Link>
        <Link to="view">
          <li>View</li>
        </Link>
        <Link to="book">
          <li>Book</li>
        </Link>
      </ul>
      <div className="hidden md:flex">
        <BsPerson className="mr-2" size={20} />
        <BiSearch size={20} />
      </div>

      {/* hamburger */}

      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* mobile menu dropdown */}

      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>PATHFINDER.</h1>
          <Link to="/">
            <li className="border-b">Home</li>
          </Link>
          <Link to="destinations">
            <li className="border-b">Destinations</li>
          </Link>
          <Link to="travel">
            <li className="border-b">Travel</li>
          </Link>
          <Link to="view">
            <li className="border-b">View</li>
          </Link>
          <Link to="book">
            <li className="border-b cursor-pointer">Book</li>
          </Link>
          <div className="flex flex-col">
            <a href="/">
              <button className="my-6">Search</button>
            </a>
            <a href="/">
              <button>Account</button>
            </a>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
