import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full py-2 flex items-center justify-center">
      <div className="uppercase font-bold flex space-x-10 items-center text-main-brown tracking-wider">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active" : "hover:text-orange-500"
          }
        >
          home
        </NavLink>
        <NavLink
          to="/"
          className="rounded-full overflow-hidden flex items-end bg-orange-400"
        >
          <img
            className="w-20 scale-150 object-cover"
            src="/img/logo.png"
            alt="logo"
          />
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "active" : "hover:text-orange-500"
          }
        >
          cart
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
