import "./App.css";
import RestaurantPage from "./pages/RestaurantPage.jsx";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RestaurantMenu from "./pages/RestaurantMenu.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/restaurants" element={<RestaurantPage />}></Route>
          <Route path="/restaurant/:id" element={<RestaurantMenu />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
