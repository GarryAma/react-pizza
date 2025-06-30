import React from "react";
import Button from "../../ui/Button";
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";

export const action = async ({ request, params }) => {
  //   console.log("update");
  //   return null;

  const result = await updateOrder(params.orderId, { priority: true });
  return null;
};

const UpdatePriorityOrder = ({ order }) => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type={"primary"}>Make as priority</Button>
    </fetcher.Form>
  );
};

export default UpdatePriorityOrder;
