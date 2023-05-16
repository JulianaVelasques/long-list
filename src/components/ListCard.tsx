import logo from '../assets/logo/gump.jpg';
import download from '../assets/icon/download.svg';

export default function ListCard() {
  return (
    <div className="flex flex-row items-center justify-between p-3 border border-gray-300 rounded-2xl m-4 shadow-md ">
      <span className="flex flex-row items-center gap-4">
        <div className="border border-gray-300 rounded-2xl ">
          <img
            src={logo}
            alt="logo da empresa tal"
            width={80}
            className="rounded-2xl"
          />
        </div>
        <div>
          <h2 className="text-[1.4rem] font-medium mb-2 tracking-wider">
            Gump
          </h2>
          <div className="flex flex-row gap-2 items-center text-sm">
            <div className="bg-orange-100 px-3 py-1 rounded-md">
              <p className="text-orange-600 font-bold">Crédito</p>
            </div>
            <p>12/08/2022</p>
          </div>
        </div>
      </span>

      <div className="border border-gray-300 rounded-full p-2">
        <img src={download} alt="" width={35} />
      </div>
    </div>
  );
}
