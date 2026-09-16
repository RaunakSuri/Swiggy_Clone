import { RestaurantDataHome } from "../assets/RestaurantDataHome";

function RestaurantOptionsHome() {
  return (
    <div className="max-w-[80%] mx-auto overflow-x-auto mt-12">
      <h1 className="font-bold text-2xl ml-4 mt-4">
        Discover best restaurants on Dineout
      </h1>

      <div className="flex overflow-x-auto gap-8 mt-4">
        {RestaurantDataHome.map((rest) => (
          <div
            key={rest.info.id}
            className="shrink-0 text-[13px] font-bold text-gray-600 border
            border-gray-200 p-2 rounded-2xl relative"
          >
            <div className="relative">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${rest.info.mediaFiles[0].url}`}
                alt={rest.info.name}
                className="w-[327px] h-[190px] object-cover rounded-xl "
              />
              <div className=" w-[100%] h-[24px] absolute left-0 bottom-0 bg-gradient-to-b from-gray-300 to-gray-900 border-b rounded"></div>
            </div>

            <div className="absolute left-4 bottom-33 text-white">
              <p>{rest.info.name}</p>
            </div>

            <div className="flex flex-col gap-2 pl-2 pr-2 pt-2">
              <div className="flex justify-between">
                <div>{rest.info.cuisines.join(" • ")}</div>
                <div>{rest.info.costForTwo}</div>
              </div>

              <div className="flex justify-between">
                <div>{rest.info.locationInfo.formattedAddress}</div>
                <div>{rest.info.locationInfo.distanceString}</div>
              </div>

              <div className="flex justify-between bg-green-600 rounded pl-2 pr-2 pt-1 pb-1 text-white">
                <div className="flex justify-between">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${rest.info.offerInfoV3?.offerLogo?.logo}`}
                    alt="offer"
                    className="w-[26px] h-[20px]"
                  />
                  <span>
                    {rest.info.offerInfoV3?.vendorOffer?.title}{" "}
                    {rest.info.offerInfoV3?.vendorOffer?.subtitle}
                  </span>
                </div>
                <div>{rest.info.offerInfoV3?.vendorOffer?.subtext}</div>
              </div>

              <div>{rest.info.offerInfoV3?.couponOffer?.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantOptionsHome;
