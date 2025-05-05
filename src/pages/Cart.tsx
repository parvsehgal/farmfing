import Layout from "../components/layout/Layout";
import { useCart } from "../hooks/useCart";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, total } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <ShoppingCart className="h-20 w-20 mx-auto text-gray-300 mb-6" />
              <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link to="/raw-materials">
                <Button size="lg" className="font-medium">
                  Browse Items
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="hidden md:flex border-b p-4">
                  <div className="w-2/5 font-medium text-gray-600">Item</div>
                  <div className="w-1/5 font-medium text-gray-600">Price</div>
                  <div className="w-1/5 font-medium text-gray-600">
                    Quantity
                  </div>
                  <div className="w-1/5 font-medium text-gray-600">Total</div>
                </div>

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="border-b p-4 flex flex-wrap md:flex-nowrap items-center"
                  >
                    {/* Item */}
                    <div className="w-full md:w-2/5 flex items-center gap-4 mb-4 md:mb-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          Unit: {item.unit}
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="w-1/3 md:w-1/5 flex items-center md:justify-start mb-4 md:mb-0">
                      <span className="md:hidden font-medium text-gray-600 mr-2">
                        Price:
                      </span>
                      <span>₹{item.price.toFixed(2)}</span>
                    </div>

                    {/* Quantity */}
                    <div className="w-1/3 md:w-1/5 flex items-center md:justify-start mb-4 md:mb-0">
                      <span className="md:hidden font-medium text-gray-600 mr-2">
                        Qty:
                      </span>
                      <div className="flex items-center border rounded-md">
                        <button
                          className="px-2 py-1"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          className="px-2 py-1"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="w-1/3 md:w-1/5 flex items-center justify-end md:justify-start mb-4 md:mb-0">
                      <span className="md:hidden font-medium text-gray-600 mr-2">
                        Total:
                      </span>
                      <span className="font-medium">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    {/* Remove */}
                    <div className="w-full md:w-auto flex justify-end">
                      <button
                        className="text-red-500 hover:text-red-600"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="p-4 flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-600"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>

                  <Link to="/raw-materials">
                    <Button variant="outline" size="sm">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>₹150.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>₹{(total * 0.18).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹{(total + 150 + total * 0.18).toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
