import { IoMenu, IoClose } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);

  if (typeof window !== 'undefined') {
    const changeColor = () => {
      if (window?.scrollY >= 30) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener('scroll', changeColor);
  }

  return (
    <div className={color ? 'sticky bg-[#FFCC4C] top-0 z-50 duration-300 shadow-md py-1' : 'pt-0 duration-300'}>
      <div className="max-w-[1620px] mx-auto 2xl:px-28 xl:px-28 md:px-10 sm:px-2 px-4">
        <div className="w-full top-0 left-0 z-10">
          <div className={`md:flex justify-between items-center ${color ? 'py-3' : 'py-7'}`}>

            <Link to="/">
              <img src={logo} alt="Logo" className="w-[60px] cursor-pointer mr-3 ml-5 md:ml-0" />
            </Link>

            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
              {
                open ? <IoClose className="text-[#dab558]" /> : <IoMenu className="text-[#dab558]" />
              }
            </div>

            <ul className={`md:flex md:items-center md:py-3 pt-5 pb-7 space-x-5 xl:space-x-8 2xl:space-x-10 space-y-4 md:space-y-0 absolute md:static md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 rounded-[5px] px-4 ${open ? 'top-[65px] opacity-100 bg-[#ffcc4c6b]' : 'top-[-490px] border-t border-[#282522]'}`}>

              <li>
                <Link to="/" className="text-[#EAE8E1] hover:text-[#FFCC4C] font-inter ml-5 md:ml-4">About</Link>
              </li>

              <li>
                <Link to="/" className="text-[#EAE8E1] hover:text-[#FFCC4C] font-inter duration-300">Features</Link>
              </li>

              <li>
                <Link to="/" className="text-[#EAE8E1] hover:text-[#FFCC4C] font-inter duration-300">Tokenomics</Link>
              </li>

              <li>
                <Link to="/" className="text-[#EAE8E1] hover:text-[#FFCC4C] font-inter duration-300">Roadmap</Link>
              </li>

              <li>
                <Link to="/" className="text-[#EAE8E1] hover:text-[#FFCC4C] font-inter duration-300">Docs</Link>
              </li>

              <div className="block md:hidden">
                <div className="flex items-center">
                  <a href="#" className="border border-[#FFCC4C] hover:bg-[#ffcc4c2d] p-[12px] 2xl:p-4 rounded-full mr-3 group duration-300">
                    <FaTelegramPlane className="text-[25px] text-[#ffcc4c] group-hover:scale-110 duration-300" />
                  </a>

                  <a href="#" className="border border-[#FFCC4C] hover:bg-[#ffcc4c2d] p-[13px] 2xl:p-4 rounded-full group duration-300">
                    <FaXTwitter className="text-[22px] text-[#ffcc4c] group-hover:scale-110 duration-300" />
                  </a>
                </div>
              </div>
            </ul>

            <div className="md:block hidden">
              <div className="flex items-center">
                <a href="#" className="border border-[#FFCC4C] hover:bg-[#ffcc4c2d] p-[12px] 2xl:p-4 rounded-full mr-3 group duration-300">
                  <FaTelegramPlane className="text-[25px] text-[#ffcc4c] group-hover:scale-110 duration-300" />
                </a>

                <a href="#" className="border border-[#FFCC4C] hover:bg-[#ffcc4c2d] p-[13px] 2xl:p-4 rounded-full group duration-300">
                  <FaXTwitter className="text-[22px] text-[#ffcc4c] group-hover:scale-110 duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
