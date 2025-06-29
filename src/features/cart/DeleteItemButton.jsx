import React from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { getCart, removeItem } from "./cartSlice";

const DeleteItemButton = ({ pizzaId }) => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  // console.log(cart);
  return (
    <Button type="secondary" onclick={() => dispatch(removeItem(pizzaId))}>
      Delete
    </Button>
  );
};

export default DeleteItemButton;
