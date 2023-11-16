import Footer from "../../ui/Footer";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <>
      <MenuItem />
      <MenuItem />
      <MenuItem available={false} />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <Footer />
    </>
  );
}

export default Menu;
