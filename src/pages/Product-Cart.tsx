import { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

function ProductCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Product A", price: 100, quantity: 2 },
    { id: 2, name: "Product B", price: 200, quantity: 1 },
    { id: 3, name: "Product C", price: 150, quantity: 3 },
  ]);

  return (
    <section className="flex flex-col lg:flex-row m-5 border-y border-gray-100 shadow-lg rounded-xl">
      <div className="py-8 w-full text-main-brown">
        <header className="py-5 mx-2 md:mx-16 flex justify-between items-center border-b-2 border-gray-100">
          <h2 className="tracking-wide">Shopping Cart</h2>
          <h2 className="tracking-wide">3 Items</h2>
        </header>

        <div className="py-5 mx-2 md:mx-16 overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-center uppercase text-sm font-bold text-gray-400">
                <th className="py-2 hidden md:table-cell">#</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length > 0 ? (
                cartItems.map((item, idx) => (
                  <tr
                    key={item.id}
                    className="text-center text-main-brown hover:bg-gray-50"
                  >
                    <td className="hidden md:table-cell">{idx}</td>
                    <td className="py-5 flex items-center justify-center md:space-x-8">
                      <img
                        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                        alt={item.name}
                        className="w-16 h-16 hidden md:block"
                      />
                      <div className="py-1 text-xs text-start space-y-2">
                        <p>{item.name}</p>
                        <p className="text-gray-400">รายละเอียด</p>
                        <button className="p-1 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition ease-in-out duration-300">
                          Remove
                        </button>
                      </div>
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        /* onChange={(e) =>
                        handleUpdateQuantity(item.id, Number(e.target.value))
                      } */
                        className="w-16 border border-gray-300 rounded-md px-2 py-1"
                      />
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-gray-500">
                    Your cart is empty
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <Link
            to="/"
            className="my-10 w-fit text-sm font-semibold cursor-pointer text-indigo-600 flex items-center p-2 space-x-2 hover:bg-indigo-600 hover:text-white rounded-lg transition ease-in-out duration-300"
          >
            <BsArrowLeft size={19} /> <span>Continue Shopping</span>
          </Link>
        </div>
      </div>

      {/* Summary */}
      <aside className="py-8 w-full lg:w-[550px] bg-gray-100 text-main-brown">
        <header className="py-5 mx-14 border-b-2 border-white">
          <h2 className="tracking-wide">Order Summary</h2>
        </header>

        {/* List Books */}
        <div className="py-6 mx-14 border-b-2 border-white space-y-5">
          <p className="text-sm font-bold uppercase text-slate-600">Items 3</p>

          <div>
            {cartItems.length > 0 &&
              cartItems.map((item) => (
                <div className="flex justify-between items-center space-y-2">
                  <p>{item.name} * 2 ea</p>
                  <p>{item.price}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Total */}
        <div className="py-6 mx-14 flex justify-between items-center text-sm font-bold">
          <p className="uppercase text-red-500">Total cost</p>
          <p>452</p>
        </div>

        <div className="mx-14">
          <button className="w-full uppercase p-2 text-sm bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg">
            Check out
          </button>
        </div>
      </aside>
    </section>
  );
}

export default ProductCart;
