import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 text-stone-200 uppercase">
      <div className="text-stone-300 font-semibold ">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </div>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
