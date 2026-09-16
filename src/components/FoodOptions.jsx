import { imageGridCards } from "../assets/FoodData";

function FoodData() {
  return (
    <div className="max-w-[80%] mx-auto overflow-x-auto mt-12">
      <h1 className="font-bold text-2xl ml-4 mt-4">Order our best food options</h1>
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
  );
}

export default FoodData;
