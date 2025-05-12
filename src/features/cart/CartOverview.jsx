import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalAmount, getTotalCart } from "./cartSlice";

function CartOverview() {
  const cartQuantity = useSelector(getTotalCart);
  const totalAmount = useSelector(getTotalAmount);

  console.log(cartQuantity);
  console.log(totalAmount);

  if (!cartQuantity) return null;

  return (
    <div className="bg-gradient-to-l from-green-700 via-green-600 to-green-500  text-stone-100 uppercase px-4 py-4 sm:px-6 flex justify-between items-center">
      <div className="space-x-4 sm:space-x-6">
        <span>{cartQuantity} pizzas</span>
        <span>${totalAmount}</span>
      </div>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
