import  { useState } from 'react';
import { FaBars, FaTimes, FaSearch, FaUser, FaGlobe } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";
import tarajilogo from "../assets/taraji.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const dropDownVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative pt-0 md:pt-4">
      {/* Top Navbar */}
      <div className="navbar flex bg-[#fff] text-[#0c1324] rounde font-bold justify-between items-center shadow-md  px-6 py-6 md:py-8">
        {/* Left: Menu and Links */}
        <div className="flex items-center">
          <button onClick={toggleMenu} className=" text-sm md:text-xl flex items-center">
            {isMenuOpen ? <FaTimes className="mr-2" /> : <FaBars className="mr-2" />}
            MENU
          </button>

          <div className="hidden md:flex ml-4 space-x-4 text-sm">
            <span className="text-red-500">|</span>
            <a className="hover:text-yellow-400 transition" href="/">FIRST TEAM</a>
            <a className="hover:text-yellow-400 transition uppercase" href="https://play.google.com/store/apps/details?id=com.taraji.plus&hl=en&pli=1">Taraji TV</a>
          </div>
        </div>

        {/* Center: Logo */}
    <div className="absolute left-1/2  w-[45px] h-[50px] md:w-[70px] object-cover  md:h-[70px] transform -translate-x-1/2">
          <img src={tarajilogo} className=' h-full object-cover ' alt="Logo" />
        </div> 


        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          <button onClick={toggleSearch} className="hover:text-yellow-400 transition"><FaSearch /></button>
          <button className="hover:text-yellow-400 transition"><FaUser /></button>
          <button className="hover:text-yellow-400 transition"><FaGlobe /></button>
        </div>
      </div>

      {/* Search Input */}
      {isSearchOpen && (
        <div className="w-full flex items-center justify-center bg-[#0c1324] px-6 py-4">
          <input
            autoFocus
            type="text"
            placeholder="Search..."
            className="p-2 border border-none outline-none rounded-md px-24 py-4 focus:outline-none focus:ring-2"
          />
        </div>
      )}

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropDownVariants}
            className="absolute left-0 right-0  z-50 bg-white text-black shadow-xl px-10   py-5  md:w-full  grid grid-cols-2 md:grid-cols-4 gap-6 text-sm overflow-hidden"
          >
            {[
              {
                title: 'FIRST TEAM',
                color: 'border-black',
                links: ['News', 'Squad', 'Fixtures and results', 'League table', 'Honours']
              },
              {
                title: 'WOMEN',
                color: 'border-black',
                links: ['News', 'Squad', 'Fixtures and results', 'League Table', 'Honours']
              },
              {
                title: 'HANDBALL',
                color: 'border-black',
                links: ['News', 'Squad', 'Fixtures and results', 'League table']
              },
              {
                title: 'OTHER TEAMS',
                color: 'border-gray-400',
                links: ['Youth teams', 'eSports']
              },
              {
                title: 'MEDIA',
                color: 'border-gray-400',
                links: ['TARAJI TV', 'TARAJI TV Premium', 'Photos', 'Podcasts']
              },
              {
                title: 'FANS',
                color: 'border-gray-400',
                links: ['News', 'Mobile app', 'Supporters Clubs', 'Official stores', 'Silvercard']
              },
              {
                title: 'THE CLUB',
                color: 'border-gray-400',
                links: ['News', 'Identity', 'President', 'Paris Saint-Germain Campus', 'Sponsors']
              },
              {
                title: 'SHOP',
                color: 'border-gray-400',
                links: ['Tickets', 'Store', 'Match worn shirts']
              }
            ].map(({ title, color, links }) => (
              <motion.div key={title} variants={childVariants} className='p-4'>
                <h3 className={`font-bold mb-2 uppercase ${color} ${color ? 'border-b-2' : ''}`}>{title}</h3>
                <ul className="space-y-1">
                  {links.map(link => (
                    <motion.li key={link} variants={childVariants}>
                      <a className="hover:text-red-600 transition" href="#">{link}</a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
