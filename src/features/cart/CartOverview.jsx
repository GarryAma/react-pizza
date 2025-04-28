import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-gradient-to-l from-green-700 via-green-600 to-green-500  text-stone-100 uppercase px-4 py-4 sm:px-6 flex justify-between items-center">
      <div className="space-x-4 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </div>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
