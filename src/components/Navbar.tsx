function Navbar() {
  return (
    <div className="w-full py-2 flex items-center justify-center">
      <div className="uppercase flex space-x-5 items-center">
        <p className="tracking-wider">home</p>
        <div className="rounded-full overflow-hidden flex items-end bg-orange-400 drop-shadow-2xl">
          <img className="w-20 scale-150 object-cover" src="/img/logo.png" alt="logo" />
        </div>
        <p className="tracking-wider">cart</p>
      </div>
    </div>
  );
}

export default Navbar;
