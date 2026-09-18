import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuData from "../assets/MenuData";
import { Search } from "lucide-react";

function RestaurantMenu() {
  let { id } = useParams();
  let [menuData, setMenuData] = useState({});
  let [mode, setMode] = useState("mix");
  let [searchText, setsearchText] = useState("");

  useEffect(() => {
    setMenuData(MenuData[id]);

    document.getElementById("main")?.scrollIntoView({
      behavior: "instant",
    });
  }, [id]);

  return (
    <div className="w-full" id="main">
      <div className="w-200 mt-12 m-auto">
        <div className="">
          <div className="w-200 p-2">
            <h1 className="text-5xl font-bold mb-4">{menuData.name}</h1>
            <img
              src={menuData.image}
              alt="restaurant image"
              className="border-gray-800 rounded-2xl"
            />
          </div>
          <div className="p-4">
            <h2 className="font-bold text-[16px] ">
              4.6 (25K+ ratings) • Starting from ₹200
            </h2>
            <h2 className="text-red-600 font-bold">
              Indian | Chinese | Italian
            </h2>
            <h2 className="text-green-500 font-bold">Open Now</h2>
          </div>
          <div className="p-4">
            <h1 className="font-bold text-2xl mb-4">Deals for you</h1>
            <div className="flex justify-around items-center mt-6">
              <div className="flex flex-col border border-gray-600 rounded-2xl p-2 w-75 bg-green-400 text-white font-bold">
                <h1>Extra 20% OFF</h1>
                <h2>No CODE Required | Above $99</h2>
              </div>
              <div className="flex flex-col border border-gray-600 rounded-2xl p-2 w-75  bg-violet-400 text-white font-bold">
                <h1>10% OFF Upto $75</h1>
                <h2>Use VISAPLATINUMCC</h2>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 mt-4 flex justify-center items-center w-[95%] m-auto border rounded-[10px] h-[38px] p-4">
            <p>
              <Search className="w-5 h-5 text-gray-500" />
            </p>
            <input
              type="text"
              placeholder="Search for dishes"
              className="w-[75%] text-center outline-none"
              onChange={(event) => {
                setsearchText(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="p-4 mt-4 flex gap-6 w-[60%] m-auto">
          <button
            className={`w-50 border p-2 rounded-2xl ${
              mode === "veg" ? "bg-green-500 text-white" : "border-gray-600"
            }`}
            onClick={() => setMode("veg")}
          >
            VEG MODE
          </button>
          <button
            className={`w-50 border p-2 rounded-2xl ${
              mode === "non-veg" ? "bg-red-500 text-white" : "border-gray-600"
            }`}
            onClick={() => setMode("non-veg")}
          >
            NON VEG MODE
          </button>
          <button
            className={`w-50 border p-2 rounded-2xl ${
              mode === "mix" ? "bg-blue-500 text-white" : "border-gray-600"
            }`}
            onClick={() => setMode("mix")}
          >
            MIX MODE
          </button>
        </div>
        <div className="w-[100%] m-auto">
          {menuData?.categories?.map((main) => {
            return (
              <>
                <h1 className="text-2xl font-bold mb-4 ml-4 mt-4">
                  {main.title}
                </h1>
                <div
                  key={main.title}
                  className="flex flex-col gap-4 w-full justify-center items-center"
                >
                  {main.items
                    .filter((item) => {
                      if (mode == "veg" && item.isVeg === false) return false;
                      if (mode == "non-veg" && item.isVeg === true)
                        return false;

                      if (
                        !item.name
                          .toLowerCase()
                          .includes(searchText.toLowerCase())
                      ) {
                        return false;
                      } else return true;
                    })
                    .map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="flex flex-col gap-2 border border-gray-600 rounded-2xl p-4 w-180 mb-4 relative"
                        >
                          <h2 className="text-xl font-bold">{item.name}</h2>
                          <h2>₹ {item.price}</h2>
                          <h2>{item.description}</h2>
                          <img
                            src={item.image}
                            alt="food image"
                            className=" right-2 top-2 w-40 h-28 absolute right-2 top-2 rounded-2xl"
                          />
                        </div>
                      );
                    })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
