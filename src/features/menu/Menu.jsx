import Footer from "../../ui/Footer";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className="mt-10">
      <MenuItem />
      <MenuItem />
      <MenuItem available={false} />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <Footer />
    </div>
  );
}

export default Menu;
