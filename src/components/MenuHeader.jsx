import { ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function MenuHeader() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((total, item) => total + item.count, 0);

  return (
    <header className="w-full h-20 shadow-sm flex items-center px-12 md:px-50 sticky top-0 z-50 bg-[#ff5200]">
      <div className="flex items-center">
        <Link to="/home">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
            alt="Swiggy Logo"
            className="w-30 h-12 rounded-xl p-1"
          />
        </Link>
      </div>
      <div
        onClick={() => navigate("/cart")}
        className="ml-auto flex items-center gap-2 cursor-pointer hover:text-orange-500 transition"
      >
        <ShoppingBag className="w-6 h-6 text-white text-2xl" />
        <span className="font-bold text-lg text-white">Cart : {total}</span>
      </div>
    </header>
  );
}

export default MenuHeader;
