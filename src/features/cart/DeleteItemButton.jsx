import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { removeItem } from "./cartSlice";

const DeleteItemButton = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <Button type="secondary" onclick={() => dispatch(removeItem(pizzaId))}>
      Delete
    </Button>
  );
};

export default DeleteItemButton;
