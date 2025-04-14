import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

export const loader = async () => {
  const menus = await getMenu();
  return menus;
};

function Menu() {
  const menus = useLoaderData();
  // console.log(menus);
  return (
    <h1>
      {menus.map((eachPizza) => (
        <MenuItem pizza={eachPizza} key={eachPizza.id} />
      ))}
    </h1>
  );
}

export default Menu;
