import Heart from '../assets/icon/heart.svg';

export default function Header() {
  return (
    <header className="flex items-center gap-4 border-b-2 py-4 px-4 sticky top-0 bg-white">
      <div className="border rounded-md border-gray-300 p-2 bg-[#f5fcff]">
        <img src={Heart} alt="ícone de favorito" width={35} />
      </div>
      <h1 className="text-[1.4rem] font-semibold">Long List</h1>
    </header>
  );
}
