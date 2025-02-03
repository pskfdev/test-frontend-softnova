import { useState } from "react";
import {
  AiOutlineShopping,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { BiLoader } from "react-icons/bi";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { addcart, updateCart } from "../store/cartSlice";
/* Type */
import { ItemCart } from "../store/cartSlice";
import { RootState } from "../store/store";
import { Books } from "./List-books";

interface Props {
  item: Books
}

function CardBook({ item }: Props) {
  
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cartStore.cart);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddCart = () => {
    setLoading(true);
    /* ถ้า cart ยังไม่มี product */
    /* หรือ ยังไม่มี product นี้ใน cart */
    if (
      cart.length == 0 ||
      cart.filter((itemCart: ItemCart) => itemCart.id == item.id).length == 0
    ) {
      dispatch(addcart({ ...item, quantity: quantity }));

      setTimeout(() => {
        setLoading(false);
      }, 1000);
      return;
    }

    /* ถ้ามี product นี้ใน cart ให้เพิ่มที่จำนวนแทน */
    const found = cart.filter((itemCart: ItemCart) => itemCart.id == item.id);
    const dataFilter = cart.filter(
      (itemCart: ItemCart) => itemCart.id != item.id
    );

    /* อัพเดทข้อมูลเดิมที่ไม่ตรงกับ id ก่อน */
    dispatch(updateCart(dataFilter));
    /* อัพเดท quantity ของ product ที่ id ตรง */
    dispatch(addcart({ ...found[0], quantity: found[0]?.quantity + quantity }));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-80 h-96 rounded-2xl py-5 overflow-hidden bg-white group relative shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div>
        <img
          src={item?.image}
          alt={item?.name}
          className="w-60 h-64 mx-auto drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
        />
      </div>
      <div className="text-center mt-3 space-y-1">
        <h3 className="tracking-wide">{item?.name}</h3>
        <p className="text-xs">{item?.detail}</p>
        <p className="text-red-500">
          {item?.price} <span className="text-xs">฿</span>
        </p>
      </div>

      {/* ไอคอนตะกร้าสินค้าเมื่อ hover */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
        <div className="bg-white p-3 rounded-xl shadow-md flex items-center space-x-2">
          <button
            onClick={handleDecrease}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <AiOutlineMinus className="w-4 h-4 text-gray-600" />
          </button>
          <input
            type="number"
            value={quantity}
            readOnly
            className="w-12 text-center border border-gray-300 rounded-md focus:outline-none"
          />
          <button
            onClick={handleIncrease}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <AiOutlinePlus className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <button
          onClick={handleAddCart}
          className="bg-orange-500 text-white p-3 mt-3 rounded-full shadow-md hover:bg-red-500"
          disabled={loading}
        >
          {loading ? <BiLoader className="w-6 h-6 animate-spin" />:<AiOutlineShopping className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}

export default CardBook;
