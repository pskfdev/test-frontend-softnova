function Promotion() {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2">
        <img
          src="/img/bg-sale.jpg"
          alt="bg-sale"
          className="w-[400px] py-5 lg:py-0 mx-auto lg:w-full h-full object-cover brightness-75 lg:rounded-r-3xl drop-shadow-2xl"
        />
      </div>
      <div className="lg:w-1/2 flex justify-center items-center">
        <div className="w-3/4 text-main-brown">
          <div className="my-5">
            <h2 className="text-center flex items-center tracking-wider">
              Promotion
            </h2>
            <div className="w-[90px] mt-2 border-b-2 border-main-brown rounded-xl"></div>
          </div>
          <div className="space-y-2">
            <h3 className="tracking-wider">
              ซื้อเล่มไม่ซ้ำกัน 2 เล่ม ลด{" "}
              <span className="text-red-500">10%</span> ของ 2 เล่มนั้น
            </h3>
            <h3 className="tracking-wider">
              ซื้อเล่มไม่ซ้ำกัน 3 เล่ม ลด{" "}
              <span className="text-red-500">20%</span> ของ 3 เล่มนั้น
            </h3>
            <h3 className="tracking-wider">
              ซื้อเล่มไม่ซ้ำกัน 4 เล่ม ลด{" "}
              <span className="text-red-500">30%</span> ของ 4 เล่มนั้น
            </h3>
            <h3 className="tracking-wider">
              ซื้อเล่มไม่ซ้ำกัน 5 เล่ม ลด{" "}
              <span className="text-red-500">40%</span> ของ 5 เล่มนั้น
            </h3>
            <h3 className="tracking-wider">
              ซื้อเล่มไม่ซ้ำกัน 6 เล่ม ลด{" "}
              <span className="text-red-500">50%</span> ของ 6 เล่มนั้น
            </h3>
            <h3 className="tracking-wider">
              ซื้อเล่มไม่ซ้ำกัน 7 เล่ม ลด{" "}
              <span className="text-red-500">60%</span> ของ 7 เล่มนั้น
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promotion;
