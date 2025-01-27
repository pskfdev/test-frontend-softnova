import React from "react";

type Props = {};

function ListBooks({}: Props) {
  return (
    <div className="py-20 text-main-brown">
        {/* Header */}
      <div className="w-full flex flex-col items-center">
        <h2 className="text-center flex items-center tracking-wider">
          List Books
        </h2>
        <div className="w-[90px] mt-2 border-b-2 border-main-brown rounded-xl"></div>
      </div>
    </div>
  );
}

export default ListBooks;
