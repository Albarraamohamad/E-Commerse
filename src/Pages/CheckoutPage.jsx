import React, { useContext } from "react";
import { CartContext } from "../Components/CartContext";
import { useNavigate ,Link } from "react-router-dom";
import NavBar from "../NavBar";
import Swal from "sweetalert2"; // For beautiful alert messages

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 1000 ? 0 : 20; // Free shipping for orders above $1000
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    Swal.fire({
      title: "Order Placed!",
      text: "Your order has been placed successfully.",
      icon: "success",
      confirmButtonText: "Return Home",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <NavBar />
      <div className="flex gap-2 py-20 px-4 md:px-16">
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='/Cart'>
        <button>/Cart</button>
        </Link>
       
        <button>/Checkout</button>
      </div>

      <div className="min-h-screen px-16 py-10 flex flex-col lg:flex-row gap-10">
        {/* Billing Details */}
        <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>

          <form className="grid gap-4">
            <div>
              <label className="font-medium">First Name*</label>
              <input type="text" className="w-full p-3 border rounded-md" required />
            </div>

            <div>
              <label className="font-medium">Company Name</label>
              <input type="text" className="w-full p-3 border rounded-md" />
            </div>

            <div>
              <label className="font-medium">Street Address*</label>
              <input type="text" className="w-full p-3 border rounded-md" required />
            </div>

            <div>
              <label className="font-medium">Apartment, floor, etc. (Optional)</label>
              <input type="text" className="w-full p-3 border rounded-md" />
            </div>

            <div>
              <label className="font-medium">Town/City*</label>
              <input type="text" className="w-full p-3 border rounded-md" required />
            </div>

            <div>
              <label className="font-medium">Phone Number*</label>
              <input type="text" className="w-full p-3 border rounded-md" required />
            </div>

            <div>
              <label className="font-medium">Email Address*</label>
              <input type="email" className="w-full p-3 border rounded-md" required />
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="save-info" className="mr-2" />
              <label htmlFor="save-info" className="text-sm">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Your Order</h2>

          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <img src={item.images} alt={item.title} className="w-12 h-12 object-cover rounded-md" />
                <p className="font-medium">{item.title}</p>
                <p className="text-gray-600">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}

            <div className="border-t pt-4">
              <div className="flex justify-between">
                <p className="font-medium">Subtotal:</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Shipping:</p>
                <p>{shipping === 0 ? "Free" : `$${shipping}`}</p>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <p>Total:</p>
                <p>${total.toFixed(2)}</p>
              </div>
            </div>

            {/* Payment Options */}
            <div className="mt-4">
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-2" /> Bank
              </label>
              <label className="flex items-center mt-2">
                <input type="radio" name="payment" className="mr-2" defaultChecked /> Cash on delivery
              </label>
            </div>

            {/* Coupon Code */}
            <div className="mt-4 flex">
              <input type="text" className="border p-2 flex-grow rounded-md" placeholder="Coupon Code" />
              <button className="bg-red-500 text-white px-4 py-2 rounded-md ml-2">Apply Coupon</button>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              className="mt-6 w-full bg-red-500 text-white py-3 rounded-md text-lg font-semibold"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
