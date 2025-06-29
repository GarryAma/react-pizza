import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCart } from "../cart/cartSlice";
import DeleteItemButton from "../cart/DeleteItemButton";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const cart = useSelector(getCart);

  // console.log(cart);

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const inTheCart = cart.filter((singleItem) => singleItem.pizzaId === id);

  const handleAddCart = () => {
    const itemObj = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(itemObj));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-50 grayscale" : ""}`}
      />
      <div className="flex flex-col w-full">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase font-medium text-stone-400">
              Sold out
            </p>
          )}
          {!soldOut && inTheCart.length > 0 && (
            <DeleteItemButton type={"secondary"} pizzaId={id}>
              delete
            </DeleteItemButton>
          )}

          {!soldOut && inTheCart.length === 0 && (
            <Button type={"primary"} onclick={handleAddCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

// https://chatgpt.com/c/676c9d43-81a0-8012-a37c-4e52724a7619
