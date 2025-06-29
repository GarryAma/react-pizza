// Test ID: IIDSAT
import OrderItem from "./OrderItem";
import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

//https://chatgpt.com/c/67fb2a28-a424-8012-940e-33174537a31a
//cant use useParams()
// useParams only for component
//loader function cant be inside Order component
//loader function will run first before Order component mount.has to be outside Order component

//this loader function will run before Order component mount
//if error occured,Error component will display(based on what i put in App.jsx(Order route))
export const loader = async (obj) => {
  // console.log(obj);
  const result = await getOrder(obj.params.orderId);
  // console.log(result);
  return result;
};

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  // console.log(order);

  //use the data from menu route without user going there
  const fetcher = useFetcher();

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
    <div className="px-4 py-6 space-y-8">
      <div className="flex justify-between items-center flex-wrap gap-x-2 gap-y-2">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="bg-red-500 rounded-full py-1 px-3 text-sm uppercase font-semibold text-red-50 tracking-wider">
              Priority
            </span>
          )}
          <span className="bg-green-500 rounded-full py-1 px-3 text-sm uppercase font-semibold text-green-50 tracking-wider">
            {" "}
            {status} order
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-x-2 bg-stone-200 px-4 py-3">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs italic">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200">
        {cart.map((item) => (
          <OrderItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="space-y-4 py-3 px-4 bg-stone-200">
        <p className="text-sm font-medium text-tone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-tone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-sm font-bold text-tone-600">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export default Order;
