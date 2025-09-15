import { TiAttachment, TiTabsOutline } from "react-icons/ti";

const Card = ({ name, label, pic  , online=false}) => {
  return (
    <div className="py-4 flex items-center justify-between gap-4 border-b border-gray-300 px-6  hover:bg-gray-100 rounded-2xl group">

      <div className="flex items-center gap-3">
        <div className="relative">
         <img className="h-[40px] w-[40px] rounded-xl" src={pic} alt={name} />
        <div className={`absolute -right-1 bottom-0 h-[13px] w-[13px] ${online ? " bg-green-500":"bg-red-500"} rounded-full`} > 
        </div>
        

        </div>
        <div className="text-left">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-gray-400">{label}</p>
        </div>
      </div>

      <div className="hidden group-hover:flex items-center gap-5">
        <div className="border border-gray-300 rounded-full p-2 hover:bg-gray-200 transition">
          <TiAttachment size={22} className="text-gray-600" />
        </div>
        <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition">
          <TiTabsOutline size={22} />
          <span className="text-sm">New Tab</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
