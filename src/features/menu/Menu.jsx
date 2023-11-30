import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiResturant";
import Footer from "../../ui/Footer";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <div className="mb-32 mt-16">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
      <Footer />
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
