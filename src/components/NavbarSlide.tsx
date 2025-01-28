import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
/* Components */
import { AiFillShopping } from "react-icons/ai";

function NavbarSlide() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-0 transition-all duration-300 z-50 bg-white rounded-b-2xl ${
        isScrolled && "h-20 shadow-lg"
      }`}
    >
      <div className="h-full flex items-center justify-around">
        <NavLink
          to="/"
          className="rounded-full overflow-hidden flex items-center bg-orange-400 drop-shadow-2xl"
        >
          <img
            className={`w-14 scale-150 object-cover transition-all duration-300 ${
              isScrolled ? "block" : "hidden"
            }`}
            src="/img/logo.png"
            alt="logo"
          />
        </NavLink>

        <NavLink
          to="/cart"
          className={`text-red-500 relative ${isScrolled ? "block" : "hidden"}`}
        >
          <AiFillShopping size={32} />
          <p className="absolute top-3 left-2 text-xs px-1 text-white rounded-full">
            1
          </p>
        </NavLink>
      </div>
    </div>
  );
}

export default NavbarSlide;
