import FoodOptions from "../components/FoodOptions.jsx";
import GroceryOptions from "../components/GroceryOptions.jsx";
import RestaurantOptionsHome from "../components/RestaurantOptionsHome.jsx";
import Banner from "../components/Banner.jsx";
import Header from "../components/Header.jsx";

function Home() {
  return (
    <>
      <Header />
      <FoodOptions />
      <GroceryOptions />
      <RestaurantOptionsHome />
      <Banner />
    </>
  );
}


export default Home;