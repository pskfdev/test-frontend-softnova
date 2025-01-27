import { useState, useEffect } from "react";
import CardBook from "./Card-book";

type Props = {};

function ListBooks({}: Props) {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=7");
      const data = await response.json();

      setBooks(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="py-20 text-main-brown">
      {/* Header */}
      <div className="w-full flex flex-col items-center">
        <h2 className="text-center flex items-center tracking-wider">
          List Books
        </h2>
        <div className="w-[90px] mt-2 border-b-2 border-main-brown rounded-xl"></div>
      </div>

      <div className="flex justify-center items-center mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {books ? (
            books?.map((item) => (
              <CardBook
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            ))
          ) : (
            <p className="text-cecnter">ไม่มีข้อมูลหนังสือ</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListBooks;
