import React from "react";

type Props = {};

function CardBook({ image, title, price }: Props) {
  return (
    <div className="w-80 h-96 rounded-2xl drop-shadow-2xl p-5 overflow-hidden space-y-5 bg-white">
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
    </div>
  );
}

export default CardBook;
