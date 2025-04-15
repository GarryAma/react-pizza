import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>this is CartOverview</h1>
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
