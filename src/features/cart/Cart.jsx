import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalAmount } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cart = useSelector(getCart);
  // const cart = fakeCart;
  // console.log(cart);

  const total = useSelector(getTotalAmount);

  const removeAllCart = () => {
    dispatch(clearCart());
  };

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="py-3 px-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">
        Your cart, {user.username} 🍺
      </h2>

      <ul className="divide-y divide-stone-200 border-b border-stone-200 mt-3">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to={"/order/new"} type="primary">
          Order pizzas ${total}
        </Button>
        <Button type="secondary" onclick={removeAllCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
