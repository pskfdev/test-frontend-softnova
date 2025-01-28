import { NavLink } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";

function Footer() {
  return (
    <div className="w-full text-center text-white rounded-t-3xl bg-main-brown relative">
      <div className="py-7 tracking-wider">
        <h3 className="w-full text-center uppercase flex justify-center items-center ">
          <FiBookOpen size={28} className="mr-1 -rotate-12 " />
          ร้านหนังสือ <span className="text-orange-500">บ้านนายดิน</span>
        </h3>
      </div>

      <div className="flex text-xs uppercase absolute top-14 md:top-9 right-1/2 md:right-20 space-x-5">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "hover:text-orange-500")}
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active" : "hover:text-orange-500")}
        >
          Cart
        </NavLink>
      </div>

      <div className="py-5 border-t border-zinc-700">
        <p className="tracking-widest text-xs italic">
          © 2025 by <span className="text-red-500">PSKFDEV</span>. Test
          front-end{" "}
          <span className="underline underline-offset-2">Softnova</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
