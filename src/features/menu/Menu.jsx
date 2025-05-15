import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
// import { useSelector } from "react-redux";

export const loader = async () => {
  const menus = await getMenu();
  return menus;
};

function Menu() {
  const menus = useLoaderData();
  // console.log(menus);

  // const cart = useSelector((state) => state.cart);
  // console.log(cart);

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menus.map((eachPizza) => (
        <MenuItem pizza={eachPizza} key={eachPizza.id} />
      ))}
    </ul>
  );
}

export default Menu;
