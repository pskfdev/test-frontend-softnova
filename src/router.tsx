import { createBrowserRouter, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./Layout";
/* Pages */
import Home from "./pages/Home";
import ProductCart from "./pages/Product-Cart";


export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export const router = createBrowserRouter([
  /* Client router */
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <ProductCart />,
      },
    ],
  },
  /* Page not found */
  {
    path: "*",
    element: (
      <div className="text-center h-100">
        <p className="my-10">There's nothing here: 404!</p>
        <Link to="/" className="p-2 rounded-md text-white bg-blue-500">
          Go to home page
        </Link>
      </div>
    ),
  },
]);
