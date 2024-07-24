// Test ID: IIDSAT

import OrderItem from "./OrderItems";

// import { useLoaderData } from "react-router-dom";

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";

function Order() {
  //   const order = useLoaderData();
  const order = {
    id: 12345,
    status: "Pending",
    priority: true,
    priorityPrice: 5.0,
    orderPrice: 35.0,
    estimatedDelivery: "2024-07-10",
    cart: [
      { id: 1, name: "Pizza", quantity: 2, totalPrice: 10 },
      { id: 2, name: "Salad", quantity: 1, totalPrice: 5.0 },
      { id: 3, name: "Drink", quantity: 3, totalPrice: 2.0 },
    ],
  };
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-10 px-4 h-screen md:w-[80%] m-auto py-20 md:space-y-15">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-golden">Order #{id} status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-golden px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="dive-stone-200 divide-y border-b border-t text-golden">
        {cart.map((item) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="space-y-2  px-6 py-5 bg-golden rounded-lg">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">To pay on delivery:</p>
      </div>
    </div>
  );
}

// export async function loader({ params }) {
//     const order = await getOrder(params.orderId);
//     return order;
//   }

export default Order;
