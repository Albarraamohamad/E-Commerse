import React, { useContext } from "react";
import { CartContext } from "../Components/CartContext";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>

      <NavBar/>
 
    <div className="min-h-screen px-16">
     

      {/* Breadcrumb */}
      <div className="flex gap-2 py-20 ">
        <Link to='/'>
          <button>Home</button>
        </Link>
        <button>/Cart</button>
      </div>

      {/* Table Headers */}
      <div className="hidden md:flex justify-between w-full px-10 bg-white rounded-lg shadow-lg py-4 mb-6 font-semibold">
        <div className="w-1/4 text-center">Product</div>
        <div className="w-1/4 text-center">Price</div>
        <div className="w-1/4 text-center">Quantity</div>
        <div className="w-1/4 text-center">Subtotal</div>
      </div>

      {cart.length === 0 ? (
        <p className="mt-5 text-lg text-center">Your cart is empty.</p>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* ✅ Products List */}
          <div className="space-y-6 px-4 md:px-16">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-center justify-between border-b pb-4">
                
                {/* ✅ Product Image & Title */}
                <div className="w-full md:w-1/4 flex items-center space-x-4">
                  <img src={item.images} alt={item.title} className="w-20 h-20 rounded-md object-cover" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>

                {/* ✅ Product Price */}
                <p className="w-full md:w-1/4 text-center text-gray-500 mt-2 md:mt-0"> ${item.price}</p>

                {/* ✅ Quantity Controls */}
                <div className="w-full md:w-1/4 flex justify-center mt-2 md:mt-0">
                  <button 
                    className="bg-gray-200 px-3 py-1 rounded-md" 
                    onClick={() => decreaseQuantity(item.id)}
                    disabled={item.quantity <= 1}
                  >-</button>
                  <span className="text-lg font-semibold mx-4">{item.quantity}</span>
                  <button 
                    className="bg-gray-200 px-3 py-1 rounded-md" 
                    onClick={() => increaseQuantity(item.id)}
                  >+</button>
                </div>

                {/* ✅ Subtotal & Remove Button */}
                <div className="w-full md:w-1/4 flex justify-between md:justify-center items-center mt-2 md:mt-0">
                  <p className="text-gray-500">${(item.price * item.quantity).toFixed(2)}</p>
                  <button 
                    className="bg-red-500 text-white px-4 py-2 rounded-md ml-4 md:ml-8"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Cart Summary */}
          <div className="mt-6 text-right px-4 md:px-16">
            <h3 className="text-xl font-semibold">Total: <span className="text-green-600">${totalPrice.toFixed(2)}</span></h3>
            <Link to='/CheckoutPage'>
            <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold">
              Checkout
            </button>
            </Link>
          
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default CartPage;
