import { useState, useEffect, forwardRef } from "react";
import CardBook from "./Card-book";

export type Books = {
  id: number;
  name: string;
  image: string;
  price: number;
  detail: string;
};

const ListBooks = forwardRef<HTMLDivElement>((prop, ref) => {
  const [books, setBooks] = useState<Books[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("./data/data.json");
      const data: Books[] = await response.json();

      setBooks(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div ref={ref} className="py-20 text-main-brown">
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
                key={item?.id}
                item={item}
              />
            ))
          ) : (
            <p className="text-cecnter">Book not found..</p>
          )}
        </div>
      </div>
    </div>
  );
});

export default ListBooks;
