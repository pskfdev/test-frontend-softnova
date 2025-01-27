function Promote() {
  return (
    <main className="relative">
      <div className="w-full h-[400px] bg-white"></div>
      <div className="w-full h-[420px] bg-main-brown"></div>
      <article className="flex flex-col lg:flex-row items-center lg:space-x-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full lg:w-fit">
        <div>
          <img
            src="https://static.wixstatic.com/media/46a9af1d9d8642edab228733a946086c.png/v1/fill/w_494,h_680,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Book%20Cover%20.png"
            alt=""
            className="w-[395px] h-[544px] object-cover"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 lg:space-y-28 px-5 lg:px-0 text-white lg:text-main-brown">
          <div>
            <h1 className="tracking-wide">
              A Best-Selling Book by Emily Clark
            </h1>
          </div>
          <div className="text-white space-y-5 text-center lg:text-start">
            <p className="tracking-widest">eBook Version is Available</p>
            <button className="px-10 py-2 text-white hover:text-main-brown border border-white hover:bg-white transition ease-in-out duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Promote;
