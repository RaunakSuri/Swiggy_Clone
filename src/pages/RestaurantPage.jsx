import { imageGridCards } from "../assets/FoodData";
import { RestaurantPageData } from "../assets/RestaurantPageData";
import { Link } from "react-router-dom";

function RestaurantPage() {
  return (
    <>
      {/* Food Options */}
      <div className="max-w-[80%] mx-auto overflow-x-auto mt-12">
        <h1 className="font-bold text-5xl ml-4 mt-4 text-center mb-12">
          Top restaurant chains in Pune
        </h1>

        <h2 className="font-bold text-2xl ml-4 mt-4">
          Order our best food options
        </h2>

        <div className="grid grid-rows-2 grid-flow-col auto-cols-max gap-6">
          {imageGridCards.map((food) => (
            <div key={food.id}>
              <a href={food.action.link}>
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${food.imageId}`}
                  alt={food.accessibility.altText}
                  className="w-[180px] h-[220px] object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Restaurants */}
      <div className="w-full mt-16">
        <div className="flex w-[80%] mx-auto gap-5 flex-wrap justify-center">
          {RestaurantPageData.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.id}`}
              key={restaurant.id}
              className="shrink-0 w-[340px] rounded-xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="h-[226px] w-full object-cover rounded-xl"
                />

                {/* Gradient */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Restaurant Info */}
              <div className="px-2 pt-2">
                <h2 className="font-bold text-[16px] truncate">
                  {restaurant.name}
                </h2>

                <div className="flex items-center gap-2 text-sm font-medium">
                  <span className="text-green-700">★ {restaurant.rating}</span>

                  <span>•</span>

                  <span>{restaurant.deliveryTime}</span>
                </div>

                <p className="text-gray-600 text-[13px] truncate">
                  {restaurant.cuisines}
                </p>

                <p className="text-gray-500 text-[13px]">
                  {restaurant.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default RestaurantPage;
