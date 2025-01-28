import { useState } from "react";
import { AiOutlineShopping, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

type Props = {};

function CardBook({ image, title, price }: Props) {

  const [quantity, setQuantity] = useState(1);

  // ฟังก์ชันจัดการเพิ่มและลดจำนวนสินค้า
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="w-80 h-96 rounded-2xl p-5 overflow-hidden space-y-5 bg-white group relative shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div>
        <img
          src={image}
          alt={title}
          className="w-64 h-64 mx-auto object-cover"
        />
      </div>
      <div className="text-center">
        <h3>Potter 1</h3>
        <p>{price}</p>
      </div>

      {/* ไอคอนตะกร้าสินค้าเมื่อ hover */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
        <div className="bg-white p-3 rounded-xl shadow-md flex items-center space-x-2">
          <button
            onClick={handleDecrease}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <AiOutlineMinus  className="w-4 h-4 text-gray-600" />
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
            <AiOutlinePlus  className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <button className="bg-orange-500 text-white p-3 mt-3 rounded-full shadow-md hover:bg-red-500">
          <AiOutlineShopping className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default CardBook;
