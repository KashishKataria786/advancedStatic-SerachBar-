import { useEffect,  useState } from "react";
import "../App.css";
import { GrAttachment } from "react-icons/gr";
import { GoPerson } from "react-icons/go";
import { PiChatsCircle } from "react-icons/pi";
import { VscListSelection } from "react-icons/vsc";
import { CustomButton } from "../components/CustomButton.jsx";
import Card from "../components/card.jsx";
import TabChange from "../components/TabChange.jsx";
import LoadingCard from "../components/LoadingCard.jsx";
import Spinner from "../components/Spinner.jsx";
import { IoSearch } from "react-icons/io5";
import { RiSettings2Line } from "react-icons/ri";
import Profile from "../components/Profile.jsx";
import fakedata from '../config/db.js'

function SearchBox() {
  const [openSearchBox, setOpenSearchBox] = useState(true);
  const [showFiles, setShowFiles] = useState(false);
  const [showPeople, setShowPeople] = useState(false);
  const [showChats, setShowChats] = useState(false);
  const [showLists, setShowLists] = useState(false);
  const [openShortDialog, setOpenShortDialog] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    if (search.trim() === "") {
      setData([]);
      setOpenSearchBox(false);
      return;
    }

    setLoading(true);
    setOpenSearchBox(true);

    const timeout = setTimeout(() => {
      const filtered = fakedata.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setData(filtered);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div className="md:grid grid-cols-2  gap-10 items justify-between ">
      <div className="text-left p-10 ">
        <Profile />
      </div>

      {/*  */}
      <div className="min-h-screen flex flex-col text-left justify-start ">
        <h2 className="text-3xl pt-10 my-5 font-semibold ">
          Advanced Search Bar with Static Data
        </h2>
        <h6 className="text-sm font-gray-400 py-3 text-left">
          Eg:Try Searching "Al" or "Alice"
        </h6>
        <div className="md:w-[43vw] border border-gray-200 rounded-3xl bg-white shadow-md">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-5">
              {loading ? <Spinner /> : <IoSearch size={30} />}

              <input
                type="search"
                placeholder="Something is easier"
                value={search}
                className="outline-none input-no-x text-xl font- text-gray-700"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {!loading && search ? (
              <>
                {" "}
                <h4
                  onClick={() => {
                    setSearch("");
                    setOpenSearchBox(false);
                    setLoading(false);
                  }}
                  className="font-semibold underline cursor-pointer"
                >
                  Clear
                </h4>
              </>
            ) : (
              <>
                <div className="flex gap-3 items-center">
                  <p className="px-2 border rounded-md">S</p>
                  <span>Quick Access</span>
                </div>
              </>
            )}
          </div>

          <div
            className={`transition-transform duration-500 ${
              openSearchBox
                ? "translate-y-2 opacity-1000"
                : "translate-y-0 opacity-0"
            }:`}
          >
            {openSearchBox && (
              <>
                <div className="transition-all duration-100 px-5 pt-3 border-b border-gray-300 flex items-center justify-between">
                  <div className="flex items-start gap-2 flex-wrap">
                    <CustomButton title="All" num={data.length} />
                    {showFiles && (
                      <CustomButton
                        title="Files"
                        num={3}
                        icon={<GrAttachment />}
                      />
                    )}
                    {showPeople && (
                      <CustomButton
                        title="People"
                        num={2}
                        icon={<GoPerson />}
                      />
                    )}
                    {showChats && (
                      <CustomButton
                        title="Chats"
                        num={8}
                        icon={<PiChatsCircle />}
                      />
                    )}
                    {showLists && (
                      <CustomButton
                        title="Lists"
                        num={6}
                        icon={<VscListSelection />}
                      />
                    )}
                  </div>

                  <div className="relative">
                    <button
                      className={` p-2 rounded ${
                        openShortDialog ? "bg-gray-100" : "bg-white"
                      }`}
                      onClick={() => setOpenShortDialog(!openShortDialog)}
                    >
                      <RiSettings2Line
                        size={30}
                        className={`transition-transform duration-300 ${
                          openShortDialog ? "rotate-90" : "rotate-0"
                        }`}
                      />
                    </button>

                    {/* Settings Dropdown */}
                    {openShortDialog ? (
                      <div
                        className={` absolute right-0 mt-2 px-3 py-4 bg-white border border-gray-300 w-[200px] rounded shadow-md z-50`}
                      >
                        <TabChange
                          icon={<GrAttachment size={20} />}
                          tab={showFiles}
                          setTab={setShowFiles}
                          title={"Files"}
                        />
                        <TabChange
                          icon={<PiChatsCircle size={20} />}
                          tab={showChats}
                          setTab={setShowChats}
                          title={"Chats"}
                        />
                        <TabChange
                          icon={<GoPerson size={20} />}
                          tab={showPeople}
                          setTab={setShowPeople}
                          title={"People"}
                        />
                        <TabChange
                          icon={<VscListSelection size={20} />}
                          tab={showLists}
                          setTab={setShowLists}
                          title={"Lists"}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="space-y-1 ">
                  {loading ? (
                    [1, 2, 3, 4, 5].map((item) => <LoadingCard />)
                  ) : data.length > 0 ? (
                    data.map((item, index) => (
                      <Card
                        key={index}
                        name={item.name}
                        label={item.label}
                        pic={item.pic}
                        online={item.online}
                      />
                    ))
                  ) : (
                    <div className="text-gray-500 text-center py-4">
                      No results found
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
