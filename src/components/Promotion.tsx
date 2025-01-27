function Promotion() {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2">
        <img
          src="/public/img/bg-sale.jpg"
          alt=""
          className="w-[400px] py-5 lg:py-0 mx-auto lg:w-full h-full object-cover brightness-75 lg:rounded-r-3xl drop-shadow-2xl"
        />
      </div>
      <div className="lg:w-1/2 flex justify-center items-center">
        <div className="w-3/4 space-y-5 text-main-brown">
          <div>
            <h2 className="text-center flex items-center tracking-wider">
              Promotion
            </h2>
            <div className="w-[90px] mt-2 border-b-2 border-main-brown rounded-xl"></div>
          </div>
          <p className="tracking-wider">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page.{" "}
          </p>
          <p className="tracking-wider">
            This is a great space to write long text about your company and your
            services. You can use this space to go into a little more detail
            about your company. Talk about your team and what services you
            provide.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Promotion;
