import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiResturant";
import MenuItem from "./MenuItem";
import CartOverview from "../../ui/CartOverview";

function Menu() {
  const menu = useLoaderData();
  return (
    <div className="mb-32 mt-16">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
      <CartOverview />
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
