export default function Navbar() {
  const items = [
    "Home",
    "Technologies",
    "Smartphones",
    "Investment",
    "About Us",
    "Contact",
  ];
  return (
    <div>
      <nav className="bg-transparent px-4 text-white border border-[#D8B45C] py-3 fixed top-4 rounded-full w-full flex justify-between items-center">
        <div className="px-5">
          <h1 className="text-white font-black">Afri Mobile</h1>
          <p className="text-[#D8B45C] uppercase text-2xl font-black">Tech</p>
        </div>
        <ul className="md:flex space-x-4 gap-3 hidden">
          {items.map((item, index) => (
            <li key={index} className="text-white">
              {item}
            </li>
          ))}
        </ul>
        <div>
          <button className=" py-2 border-3 px-3 rounded-full border-[#D8B45C] hover:bg-[#D8B45C]">
            Become a ShareHolder
          </button>
        </div>
      </nav>
    </div>
  );
}
