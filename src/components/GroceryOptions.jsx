import { GroceryData } from "../assets/GroceryData";

function GroceryOptions() {
  return (
    <div className="max-w-[80%] mx-auto overflow-x-auto mt-12">
      <h1 className="font-bold text-2xl ml-4 mt-4">
        Shop groceries on Instamart
      </h1>
      <div className="flex overflow-x-auto gap-8 mt-4">
        {GroceryData.map((food) => (
          <div key={food.id} className="shrink-0">
            <a
              href={food.action.link}
              className="flex-col justify-center items-center"
            >
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${food.imageId}`}
                alt={food.accessibility.altText}
                className="w-[180px] h-[220px] object-contain"
              />
              <h2 className="text-center font-bold text-gray-600">
                {food.action.text}
              </h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroceryOptions;
