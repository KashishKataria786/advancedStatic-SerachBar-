import { TiAttachment, TiTabsOutline } from "react-icons/ti";

const Card = ({ name, label, pic }) => {
  return (
    <div className="p-3 flex items-center justify-between gap-4 border-b border-gray-300 mx-4 hover:bg-gray-100 group">

      <div className="flex items-center gap-3">
        <img className="h-[40px] w-[40px] rounded-xl" src={pic} alt={name} />
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
