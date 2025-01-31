import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "../store/cartSlice";
//Type
import { ItemCart } from "../store/cartSlice";

function ProductCart() {

  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cartStore.cart);

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    dispatch(
      updateCart(
        cart.map((item: ItemCart) =>
          item.id == id ? { ...item, quantity: newQuantity } : item
        )
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    dispatch(updateCart(cart.filter((item: ItemCart) => item.id !== id)));
  };

  return (
    <section className="flex flex-col lg:flex-row m-5 border-y border-gray-100 shadow-lg rounded-xl">
      <div className="py-8 w-full text-main-brown">
        <header className="py-5 mx-2 md:mx-16 flex justify-between items-center border-b-2 border-gray-100">
          <h2 className="tracking-wide">Shopping Cart</h2>
          <h2 className="tracking-wide">
            {cart.length != 0 && cart.length} Items
          </h2>
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
              {cart.length > 0 ? (
                cart.map((item: any, idx: number) => (
                  <tr
                    key={item.id}
                    className="text-center text-main-brown hover:bg-gray-50"
                  >
                    <td className="hidden md:table-cell">{idx}</td>
                    <td className="py-5 flex items-center justify-start md:space-x-8">
                      <img
                        src={item?.image}
                        alt={item.name}
                        className="w-16 h-16 hidden md:block md:ml-5 lg:ml-20"
                      />
                      <div className="py-1 text-xs text-start space-y-2">
                        <p>{item.name}</p>
                        <p className="text-gray-400">{item?.detail}</p>
                        <button
                          onClick={() => handleRemoveItem(item?.id)}
                          className="p-1 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition ease-in-out duration-300"
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                    <td>
                      {item.price.toFixed(2)} <span className="text-xs">฿</span>
                    </td>
                    <td>
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(e) =>
                          handleUpdateQuantity(item.id, Number(e.target.value))
                        }
                        className="w-16 border border-gray-300 rounded-md px-2 py-1"
                      />
                    </td>
                    <td>
                      {(item.price * item.quantity).toFixed(2)}{" "}
                      <span className="text-xs">฿</span>
                    </td>
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
          <p className="text-sm font-bold uppercase text-slate-600">
            Items {cart.length != 0 && cart.length}
          </p>

          <div>
            {cart.length > 0 &&
              cart.map((item: ItemCart) => (
                <div
                  key={item?.id}
                  className="flex justify-between items-center space-y-2"
                >
                  <p>
                    {item.name} * {item.quantity} ea
                  </p>
                  <p>
                    {(item.price * item.quantity).toFixed(2)}{" "}
                    <span className="text-xs">฿</span>
                  </p>
                </div>
              ))}
          </div>
        </div>

        {/* Total */}
        <div className="py-6 mx-14 flex justify-between items-center text-sm font-bold">
          <p className="uppercase text-red-500">Total cost</p>
          <p>
            452 <span className="text-xs">฿</span>
          </p>
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
