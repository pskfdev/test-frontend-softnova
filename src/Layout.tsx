import { Outlet } from "react-router-dom";
/* Components */
import Navbar from "./components/Navbar";
import NavbarSlide from "./components/NavbarSlide";

function Layout() {
  return (
    <div>
      <nav>
        <Navbar />
        <NavbarSlide />
      </nav>

      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
