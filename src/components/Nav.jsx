export default function Nav() {
  return (
    <>
      <nav className="sticky bg-orange-100 rounded-xl p-4 flex justify-between items-center shadow ">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-purple-700 rounded-full mr-2"></div>
          <h1 className="text-lg text-black font-bold">HOME</h1>
        </div>
        <h1 className="text-center font-mono text-black font-bold text-2xl">Mangko News</h1>
        <button className="font-bold text-black mr-4">Login</button>
      </nav>
    </>
  );
}
