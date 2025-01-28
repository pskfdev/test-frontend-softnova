import { Outlet } from "react-router-dom";
/* Components */
import Navbar from "./components/Navbar";
import NavbarSlide from "./components/NavbarSlide";
import Footer from "./components/Footer";
import ScrollToTop from "./router";

function Layout() {
  return (
    <div>
      <ScrollToTop />
      <nav>
        <Navbar />
        <NavbarSlide />
      </nav>

      <main className="min-h-screen">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
