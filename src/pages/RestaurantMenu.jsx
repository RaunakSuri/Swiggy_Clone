import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuData from "../assets/MenuData";
import { Search } from "lucide-react";

function RestaurantMenu() {
  let { id } = useParams();
  let [menuData, setMenuData] = useState({});

  useEffect(() => {
    setMenuData(MenuData[id]);
  }, []);

  return (
    <div className="w-full">
      <div className="w-200 h-500 mt-12 m-auto">
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
              4.6 (25K+ ratings) • $350 fro two
            </h2>
            <h2 className="text-red-600 font-bold">
              Indian | Chinese | Italian
            </h2>
            <h2 className="text-green-500 font-bold">Open Now</h2>
          </div>
          <div className="mt-6 p-4">
            <h1 className="font-bold text-2xl mb-4">Deals for you</h1>
            <div className="flex justify-around items-center">
              <div className="flex flex-col border border-gray-500 rounded-2xl p-2 w-75">
                <h1>Extra 20% OFF</h1>
                <h2>No CODE Required | Above $99</h2>
              </div>
              <div className="flex flex-col border border-gray-500 rounded-2xl p-2 w-75">
                <h1>10% OFF Upto $75</h1>
                <h2>Use VISAPLATINUMCC</h2>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 mt-4 flex justify-center items-center w-[90%] m-auto border rounded-[10px] h-[30px]">
            <p>
              <Search className="w-5 h-5 text-gray-500" />
            </p>
            <input type="text" placeholder="Search for dishes" className="w-[75%] text-center outline-none"/>
          </div>
        </div>

        {/* <div>
          <button>VEG MODE</button>
          <button>NON VEG MODE</button>
          <button>MIX MODE</button>
        </div> */}
        <div className="w-[80%]">
          {/* {menuData.categories.map(()=> {
                
            })} */}
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
