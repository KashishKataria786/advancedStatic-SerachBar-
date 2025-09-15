import { BiToggleLeft, BiToggleRight } from "react-icons/bi";

const TabChange = ({ icon, title, tab, setTab }) => (
  <div
    className={`${
      tab ? "text-gray-900" : "text-gray-500"
    } flex items-center justify-between px-2 `}
  >
    <div className="flex gap-1 items-center">
      {icon}
      <h4>{title}</h4>
    </div>
    <div>
      <button onClick={() => setTab(!tab)}>
        {!tab ? (
          <BiToggleLeft size={40} />
        ) : (
          <BiToggleRight size={40} color="black" />
        )}
      </button>
    </div>
  </div>
);


export default TabChange;