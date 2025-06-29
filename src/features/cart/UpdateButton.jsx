import React from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  getCurrentQuantityUserClicked,
  increaseQuantity,
} from "./cartSlice";

const UpdateButton = ({ pizzaId }) => {
  const dispatch = useDispatch();

  const increaseQty = () => {
    dispatch(increaseQuantity(pizzaId));
  };

  const decreaseQty = () => {
    dispatch(decreaseQuantity(pizzaId));
  };

  const currentQuantity = useSelector(getCurrentQuantityUserClicked(pizzaId));

  return (
    <div className="flex space-x-2 items-center">
      <Button type="round" onclick={decreaseQty}>
        -
      </Button>
      <span className="text-sm">{currentQuantity}</span>
      <Button type="round" onclick={increaseQty}>
        +
      </Button>
    </div>
  );
};

export default UpdateButton;
