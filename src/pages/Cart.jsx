import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementItem, decrementItem, clearCart } from "../store/CartSlice";
import { ShoppingBag } from "lucide-react";
import MenuHeader from "../components/MenuHeader";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const [orderPlaced, setOrderPlaced] = useState(false);

  // Total number of items
  const totalItems = cartItems.reduce((total, item) => total + item.count, 0);

  // Total price of food items
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.count,
    0,
  );

  // Taxes
  const taxes = Math.round(totalPrice * 0.05);

  // Delivery fee
  const deliveryFee = 40;

  // Final amount
  const finalTotal = totalPrice + deliveryFee + taxes;

  // Checkout
  const handleCheckout = () => {
    dispatch(clearCart());
    setOrderPlaced(true);
  };

  // --------------------------------
  // ORDER SUCCESS SCREEN
  // --------------------------------

  if (orderPlaced) {
    return (
      <>
        <MenuHeader />

        <div className="min-h-[80vh] flex justify-center items-center bg-gray-100">
          <div className="bg-white rounded-2xl shadow-md p-10 text-center">
            <div className="text-6xl mb-6">🎉</div>

            <h1 className="text-3xl font-bold text-green-600 mb-3">
              Thank you for your purchase!
            </h1>

            <p className="text-gray-600 mb-6">
              Your order has been placed successfully.
            </p>

            <button
              onClick={() => setOrderPlaced(false)}
              className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </>
    );
  }

  // --------------------------------
  // EMPTY CART
  // --------------------------------

  if (cartItems.length === 0) {
    return (
      <>
        <MenuHeader />

        <div className="min-h-[80vh] flex flex-col justify-center items-center bg-gray-100">
          <ShoppingBag className="w-24 h-24 text-gray-400 mb-6" />

          <h1 className="text-3xl font-bold mb-2">Your cart is empty</h1>

          <p className="text-gray-500">Add some delicious food to your cart!</p>
        </div>
      </>
    );
  }

  // --------------------------------
  // CART PAGE
  // --------------------------------

  return (
    <>
      <MenuHeader />

      <div className="w-full min-h-screen bg-gray-100 py-10">
        <div className="w-[80%] max-w-6xl mx-auto">
          {/* Page Heading */}

          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

          <div className="flex gap-8">
            {/* ========================= */}
            {/* CART ITEMS */}
            {/* ========================= */}

            <div className="bg-white rounded-2xl p-6 flex-1">
              <h2 className="text-xl font-bold mb-6">{totalItems} Items</h2>

              <div className="flex flex-col">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b py-6"
                  >
                    {/* Food Details */}

                    <div className="flex gap-5 items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-28 h-24 object-cover rounded-xl"
                      />

                      <div className="max-w-[400px]">
                        <h2 className="text-lg font-bold">{item.name}</h2>

                        <p className="text-gray-600 mt-1">₹ {item.price}</p>

                        <p className="text-gray-500 text-sm mt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Quantity + Price */}

                    <div className="flex flex-col items-end gap-3">
                      {/* Quantity Controls */}

                      <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden">
                        <button
                          onClick={() => dispatch(decrementItem(item))}
                          className="px-4 py-1 text-xl font-bold text-red-500 hover:bg-gray-100"
                        >
                          -
                        </button>

                        <span className="px-4 font-bold">{item.count}</span>

                        <button
                          onClick={() => dispatch(incrementItem(item))}
                          className="px-4 py-1 text-xl font-bold text-green-500 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      {/* Item Total */}

                      <p className="font-bold">₹ {item.price * item.count}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ========================= */}
            {/* BILL DETAILS */}
            {/* ========================= */}

            <div className="w-80 h-fit bg-white rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-6">Bill Details</h2>

              {/* Item Total */}

              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Item Total</span>

                <span>₹ {totalPrice}</span>
              </div>

              {/* Delivery Fee */}

              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Delivery Fee</span>

                <span>₹ {deliveryFee}</span>
              </div>

              {/* Taxes */}

              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Taxes & Charges</span>

                <span>₹ {taxes}</span>
              </div>

              <hr className="my-5" />

              {/* Final Amount */}

              <div className="flex justify-between text-lg font-bold">
                <span>To Pay</span>

                <span>₹ {finalTotal}</span>
              </div>

              {/* Checkout */}

              <button
                onClick={handleCheckout}
                className="w-full mt-6 bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
