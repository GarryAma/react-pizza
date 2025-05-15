import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import DeleteItemButton from "./DeleteItemButton";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 flex justify-between">
      <p className="mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-4">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <DeleteItemButton pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
