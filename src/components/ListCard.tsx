import download from '../assets/icon/download.svg';
import lock from '../assets/icon/lock.svg';

export interface Card {
  _id?: string;
  logo?: string | any;
  name?: string;
  type?: string;
  date: Date;
  isDownload?: boolean;
}

export default function ListCard({ logo, name, type, date, isDownload }: Card) {
  return (
    <div className="flex flex-row items-center justify-between hover:bg-slate-100 p-3 border border-gray-300 rounded-2xl m-4 shadow-md ">
      <span className="flex flex-row items-center gap-4">
        <div className="w-[100%] border border-gray-300 rounded-2xl ">
          <img
            src={`${logo}`}
            alt={`logo da ${name}`}
            width={80}
            className="rounded-2xl"
          />
        </div>
        <div className="w-40 md:w-[100%]">
          <h2 className="text-[1.4rem] truncate overflow-hidden font-medium mb-2 tracking-wider">
            {name}
          </h2>
          <div className="flex flex-row gap-2 items-center text-sm">
            <div
              className={`${
                type == 'Crédito' ? 'bg-orange-100' : 'bg-blue-100'
              }  px-3 py-1 rounded-md`}
            >
              <p
                className={`${
                  type == 'Crédito' ? 'text-orange-600' : 'text-blue-700'
                } font-bold`}
              >
                {type}
              </p>
            </div>
            <p>{new Date(date).toLocaleDateString()}</p>
          </div>
        </div>
      </span>

      <div className="border border-gray-300 rounded-full p-2">
        <img src={isDownload ? download : lock} alt="" width={35} />
      </div>
    </div>
  );
}
