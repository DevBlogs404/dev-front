import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BiUser,
  // BiSearch,
  BiHeart,
  BiCart,
  BiLogOut,
  BiMenu,
  BiHome,
  BsShop,
  AiOutlineContacts,
  BiInfoCircle,
  BsX,
} from "react-icons/all";
import logo from "../assets/Logo.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const navigateCart = () => {
    token ? navigate("/cart") : navigate("/login");
    setIsMenuOpen(false); // Close the menu after navigating
  };

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setIsMenuOpen(false); // Close the menu after logging out
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = () => {
    setIsMenuOpen(false); // Close the menu after clicking an option
  };

  const navigateHome = ()=>{
    navigate('/')
  }
  const navigateLogin = ()=>{
    navigate('/login')
  }
  const navigateWishList = ()=>{
    navigate('/wishlist')
  }

  return (
    <header className="w-full z-50 h-[60px]  md:h-[80px]  flex items-center justify-between  md:justify-between px-4 shadow-md">
      <Link to="/" className="hidden md:block md:mr-8">
        <img
          src={logo}
          alt="logo"
          className="w-20 object-cover cursor-pointer"
          onClick={navigateHome}
        />
      </Link>
      <nav className="hidden md:flex items-center justify-center gap-8 w-full h-full">
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              to="/"
              className="text-black text-[1.5rem] hover:text-pink-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="text-black text-[1.5rem] hover:text-pink-400"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-black text-[1.5rem] hover:text-pink-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-black text-[1.5rem] hover:text-pink-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="block  md:hidden text-black text-[1.5rem] hover:text-pink-400"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        {isMenuOpen ? <BsX size={34} className="text-pink-500" /> : <BiMenu size={34} className="text-pink-500" />}
      </button>
      <div className="md:hidden">
        <Link to="/">
          <h1 className="text-2xl font-semibold text-pink-500 mr-24">Avira</h1>
        </Link>
      </div>

      {isMenuOpen && (
        <div
          className="absolute top-[60px]  right-0 w-full h-full flex items-center justify-center"
          onClick={toggleMenu}
        >
          <div className="card w-full h-full  p-10 bg-pink-400 text-white bg-opacity-70 z-50 backdrop-filter backdrop-blur-lg rounded-b-lg">
            <ul className="flex flex-col gap-10">
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-start gap-6 text-white text-3xl"
                  onClick={handleOptionClick}
                >
                  <BiHome size={24} className="text-white cursor-pointer" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="flex items-center justify-start gap-6 text-white text-3xl"
                  onClick={handleOptionClick}
                >
                  <BsShop size={24} className="text-white cursor-pointer" />
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center justify-start gap-6 text-white text-3xl"
                  onClick={handleOptionClick}
                >
                  <BiInfoCircle
                    size={24}
                    className="text-white cursor-pointer"
                  />
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center justify-start gap-6 text-white text-3xl"
                  onClick={handleOptionClick}
                >
                  <AiOutlineContacts
                    size={24}
                    className="text-white cursor-pointer"
                  />
                  Contact
                </Link>
              </li>
              {token ? (
                <>
                  <li>
                    <Link
                      to="/cart"
                      className="flex items-center justify-start gap-6 text-white text-3xl"
                      onClick={navigateCart}
                    >
                      <BiCart className="text-white cursor-pointer" size={24} />
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/wishlist'
                      className="flex items-center justify-start gap-6 text-white text-3xl"
                      onClick={handleOptionClick}
                    >
                      <BiHeart
                        className="text-white cursor-pointer"
                        size={24}
                      />
                      WishList
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="flex items-center justify-start gap-6 text-white text-3xl"
                      onClick={logOut}
                    >
                      <BiLogOut
                        className="text-white font-bold cursor-pointer"
                        size={24}
                      />
                      LogOut
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    to="/register"
                    className="flex items-center justify-start gap-6 text-white text-3xl"
                    onClick={handleOptionClick}
                  >
                    <BiUser className="text-white md:mr-2" size={24} />
                    SignIn
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center gap-4  h-full md:mx-4 md:gap-6">
        {token ? (
          <>
            <span>
              <BiCart
                className="inline-block text-pink-400 cursor-pointer"
                size={26}
                onClick={navigateCart}
              />
            </span>
            <span>
              <BiHeart
                className="inline-block text-pink-400 cursor-pointer"
                size={26}
                onClick={navigateWishList}
              />
            </span>
            <span>
              <BiLogOut
                className="inline-block text-pink-400 font-bold cursor-pointer"
                size={26}
                onClick={logOut}
              />
            </span>
          </>
        ) : (
          <span
            className="block text-pink-400 font-bold cursor-pointer"
            onClick={navigateLogin}
          >
            <BiUser className="inline-block text-pink-400 md:mr-2" size={26} />
          </span>
        )}
      </div>
    </header>
  );
};

export default Navbar;
